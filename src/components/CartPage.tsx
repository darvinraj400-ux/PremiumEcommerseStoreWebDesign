import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, itemCount, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ShoppingBag size={56} className="mx-auto text-divider mb-6" />
          <h1 className="font-serif text-3xl text-charcoal mb-3">Your cart is empty</h1>
          <p className="text-sm text-warm-gray mb-8 max-w-sm mx-auto">
            Looks like you haven't added anything yet. Explore our collection and find something you'll love.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-ivory text-sm rounded-full hover:bg-charcoal-light transition-colors"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-xs text-warm-gray hover:text-accent transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => {
                const key = `${item.product.id}-${item.selectedColor || ''}-${item.selectedSize || ''}`;
                return (
                  <motion.div
                    key={key}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex gap-4 sm:gap-6 p-4 sm:p-6 border border-divider rounded-xl"
                  >
                    <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                      <div className="w-24 h-28 sm:w-32 sm:h-36 rounded-lg overflow-hidden bg-ivory-dark">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <Link to={`/product/${item.product.id}`}>
                            <h3 className="text-sm sm:text-base font-medium text-charcoal hover:text-accent transition-colors">
                              {item.product.name}
                            </h3>
                          </Link>
                          <div className="flex gap-2 mt-1 text-xs sm:text-sm text-warm-gray">
                            {item.selectedColor && <span>{item.selectedColor}</span>}
                            {item.selectedColor && item.selectedSize && <span>·</span>}
                            {item.selectedSize && <span>{item.selectedSize}</span>}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.selectedColor, item.selectedSize)}
                          className="p-1.5 text-warm-gray hover:text-accent transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      <div className="flex items-end justify-between mt-4 sm:mt-6">
                        <div className="flex items-center border border-divider rounded-full">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                            className="p-2.5 hover:text-accent transition-colors"
                            aria-label="Decrease"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                            className="p-2.5 hover:text-accent transition-colors"
                            aria-label="Increase"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-sm sm:text-base font-medium">${(item.product.price * item.quantity).toFixed(0)}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-6 border border-divider rounded-xl bg-ivory-dark/30">
              <h2 className="font-serif text-lg mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">Subtotal ({itemCount} items)</span>
                  <span>${subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">Shipping</span>
                  <span>{subtotal >= 150 ? 'Free' : '$12'}</span>
                </div>
                <div className="border-t border-divider pt-3 flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium text-lg">${(subtotal + (subtotal >= 150 ? 0 : 12)).toFixed(0)}</span>
                </div>
              </div>
              {subtotal < 150 && (
                <p className="text-xs text-warm-gray mb-4">
                  Add ${(150 - subtotal).toFixed(0)} more for free shipping
                </p>
              )}
              <button className="w-full py-3.5 bg-charcoal text-ivory text-sm rounded-full hover:bg-charcoal-light transition-colors mb-3">
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                className="flex items-center justify-center gap-2 w-full py-2 text-sm text-warm-gray hover:text-accent transition-colors"
              >
                <ArrowLeft size={14} />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
