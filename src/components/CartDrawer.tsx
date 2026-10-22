import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[60]"
            onClick={() => toggleCart(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-ivory z-[60] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-divider">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="font-serif text-lg">Your Cart</h2>
                <span className="text-sm text-warm-gray">({itemCount})</span>
              </div>
              <button
                onClick={() => toggleCart(false)}
                className="p-2 -mr-2 text-charcoal hover:text-accent transition-colors"
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full p-8 text-center"
                >
                  <ShoppingBag size={48} className="text-divider mb-4" />
                  <p className="text-charcoal-light mb-2">Your cart is empty</p>
                  <p className="text-sm text-warm-gray mb-6">Discover something you'll love.</p>
                  <button
                    onClick={() => toggleCart(false)}
                    className="px-6 py-3 bg-charcoal text-ivory text-sm rounded-full hover:bg-charcoal-light transition-colors"
                  >
                    Continue Shopping
                  </button>
                </motion.div>
              ) : (
                <div className="p-4 sm:p-6 space-y-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => {
                      const key = `${item.product.id}-${item.selectedColor || ''}-${item.selectedSize || ''}`;
                      return (
                        <motion.div
                          key={key}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 100 }}
                          className="flex gap-4 pb-4 border-b border-divider last:border-0"
                        >
                          <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden bg-ivory-dark flex-shrink-0">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <div>
                                <h3 className="text-sm font-medium text-charcoal truncate">{item.product.name}</h3>
                                <div className="flex gap-2 mt-1 text-xs text-warm-gray">
                                  {item.selectedColor && <span>{item.selectedColor}</span>}
                                  {item.selectedSize && <span>· {item.selectedSize}</span>}
                                </div>
                              </div>
                              <button
                                onClick={() => removeItem(item.product.id, item.selectedColor, item.selectedSize)}
                                className="p-1 text-warm-gray hover:text-accent transition-colors flex-shrink-0"
                                aria-label={`Remove ${item.product.name}`}
                              >
                                <X size={16} />
                              </button>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center border border-divider rounded-full">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                                  className="p-2 hover:text-accent transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="text-sm w-6 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                                  className="p-2 hover:text-accent transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                              <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(0)}</span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-divider p-4 sm:p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warm-gray">Subtotal</span>
                  <span className="text-lg font-medium">${subtotal.toFixed(0)}</span>
                </div>
                <p className="text-xs text-warm-gray">Shipping calculated at checkout</p>
                <Link
                  to="/cart"
                  onClick={() => toggleCart(false)}
                  className="block w-full py-3.5 bg-charcoal text-ivory text-center text-sm rounded-full hover:bg-charcoal-light transition-colors"
                >
                  View Cart & Checkout
                </Link>
                <button
                  onClick={() => toggleCart(false)}
                  className="block w-full py-2 text-sm text-warm-gray text-center hover:text-accent transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
