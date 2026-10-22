import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; color?: string; size?: string }
  | { type: 'REMOVE_ITEM'; productId: string; color?: string; size?: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; color?: string; size?: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART'; isOpen?: boolean }
  | { type: 'LOAD_CART'; items: CartItem[] };

const getStorageKey = (color?: string, size?: string) => {
  return `${color || ''}-${size || ''}`;
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const key = getStorageKey(action.color, action.size);
      const existingIndex = state.items.findIndex(
        item => item.product.id === action.product.id && 
        getStorageKey(item.selectedColor, item.selectedSize) === key
      );
      
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + 1
        };
        return { ...state, items: newItems, isOpen: true };
      }
      
      return {
        ...state,
        items: [...state.items, {
          product: action.product,
          quantity: 1,
          selectedColor: action.color,
          selectedSize: action.size
        }],
        isOpen: true
      };
    }
    case 'REMOVE_ITEM': {
      const key = getStorageKey(action.color, action.size);
      return {
        ...state,
        items: state.items.filter(
          item => !(item.product.id === action.productId && 
            getStorageKey(item.selectedColor, item.selectedSize) === key)
        )
      };
    }
    case 'UPDATE_QUANTITY': {
      const key = getStorageKey(action.color, action.size);
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.product.id === action.productId && 
              getStorageKey(item.selectedColor, item.selectedSize) === key)
          )
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === action.productId && 
          getStorageKey(item.selectedColor, item.selectedSize) === key
            ? { ...item, quantity: action.quantity }
            : item
        )
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_CART':
      return { ...state, isOpen: action.isOpen !== undefined ? action.isOpen : !state.isOpen };
    case 'LOAD_CART':
      return { ...state, items: action.items };
    default:
      return state;
  }
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, color?: string, size?: string) => void;
  removeItem: (productId: string, color?: string, size?: string) => void;
  updateQuantity: (productId: string, color: string | undefined, size: string | undefined, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (isOpen?: boolean) => void;
  subtotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  useEffect(() => {
    const saved = localStorage.getItem('nova-cart');
    if (saved) {
      try {
        dispatch({ type: 'LOAD_CART', items: JSON.parse(saved) });
      } catch (e) {
        console.error('Failed to load cart:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('nova-cart', JSON.stringify(state.items));
  }, [state.items]);

  const subtotal = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items: state.items,
      isOpen: state.isOpen,
      addItem: (product, color, size) => dispatch({ type: 'ADD_ITEM', product, color, size }),
      removeItem: (productId, color, size) => dispatch({ type: 'REMOVE_ITEM', productId, color, size }),
      updateQuantity: (productId, color, size, quantity) => dispatch({ type: 'UPDATE_QUANTITY', productId, color, size, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      toggleCart: (isOpen) => dispatch({ type: 'TOGGLE_CART', isOpen }),
      subtotal,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
