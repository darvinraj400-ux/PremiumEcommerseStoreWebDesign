import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import FallbackImage from './FallbackImage';

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heart size={56} className="mx-auto text-divider mb-6" />
          <h1 className="font-serif text-3xl text-charcoal mb-3">Your wishlist is empty</h1>
          <p className="text-sm text-warm-gray mb-8 max-w-sm mx-auto">
            Save items you love for later. Browse our collection and tap the heart to add to your wishlist.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-ivory text-sm rounded-full hover:bg-charcoal-light transition-colors"
          >
            Explore Products
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
        <h1 className="font-serif text-3xl sm:text-4xl text-charcoal mb-2">Wishlist</h1>
        <p className="text-sm text-warm-gray mb-8 sm:mb-12">{items.length} saved {items.length === 1 ? 'item' : 'items'}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {items.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-ivory-dark mb-4">
                  <Link to={`/product/${product.id}`}>
                    <FallbackImage
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-charcoal hover:text-accent transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <X size={16} />
                  </button>
                  <div className="absolute bottom-3 left-3 right-3">
                    <button
                      onClick={() => addItem(product, product.colors?.[0]?.name, product.sizes?.[1])}
                      className="w-full py-2.5 bg-charcoal/90 backdrop-blur-sm text-ivory text-xs rounded-full hover:bg-charcoal transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-sm font-medium text-charcoal group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-warm-gray mt-1">${product.price}</p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
