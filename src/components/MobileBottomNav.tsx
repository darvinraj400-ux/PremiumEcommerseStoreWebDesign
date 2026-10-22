import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function MobileBottomNav() {
  const location = useLocation();
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-ivory/95 backdrop-blur-md border-t border-divider z-40 sm:hidden safe-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center gap-0.5 p-2 min-w-[56px] transition-colors ${
            isActive('/') ? 'text-accent' : 'text-warm-gray'
          }`}
        >
          <Home size={20} />
          <span className="text-[10px]">Home</span>
        </Link>
        <Link
          to="/shop"
          className={`flex flex-col items-center justify-center gap-0.5 p-2 min-w-[56px] transition-colors ${
            isActive('/shop') ? 'text-accent' : 'text-warm-gray'
          }`}
        >
          <ShoppingBag size={20} />
          <span className="text-[10px]">Shop</span>
        </Link>
        <Link
          to="/wishlist"
          className={`flex flex-col items-center justify-center gap-0.5 p-2 min-w-[56px] relative transition-colors ${
            isActive('/wishlist') ? 'text-accent' : 'text-warm-gray'
          }`}
        >
          <Heart size={20} />
          <span className="text-[10px]">Wishlist</span>
          {wishlistItems.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1 right-2 w-4 h-4 bg-accent text-white text-[9px] rounded-full flex items-center justify-center"
            >
              {wishlistItems.length}
            </motion.span>
          )}
        </Link>
        <Link
          to="/cart"
          className={`flex flex-col items-center justify-center gap-0.5 p-2 min-w-[56px] relative transition-colors ${
            isActive('/cart') ? 'text-accent' : 'text-warm-gray'
          }`}
        >
          <ShoppingBag size={20} />
          <span className="text-[10px]">Cart</span>
          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1 right-2 w-4 h-4 bg-accent text-white text-[9px] rounded-full flex items-center justify-center"
            >
              {itemCount}
            </motion.span>
          )}
        </Link>
      </div>
    </nav>
  );
}
