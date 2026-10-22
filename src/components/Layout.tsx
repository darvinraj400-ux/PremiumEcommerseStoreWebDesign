import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import MobileBottomNav from './MobileBottomNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleCart, itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-charcoal hover:text-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-serif text-xl sm:text-2xl tracking-tight text-charcoal font-medium">
                NOVA SUPPLY
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/shop" className="text-sm tracking-wide text-charcoal-light hover:text-accent transition-colors duration-200">
                Shop All
              </Link>
              <Link to="/shop?collection=daily-rituals" className="text-sm tracking-wide text-charcoal-light hover:text-accent transition-colors duration-200">
                Daily Rituals
              </Link>
              <Link to="/shop?collection=winter-essentials" className="text-sm tracking-wide text-charcoal-light hover:text-accent transition-colors duration-200">
                Winter
              </Link>
              <Link to="/shop?collection=summer-edit" className="text-sm tracking-wide text-charcoal-light hover:text-accent transition-colors duration-200">
                Summer
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-3">
              <Link
                to="/shop"
                className="hidden sm:flex p-2 text-charcoal-light hover:text-accent transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </Link>
              <Link
                to="/wishlist"
                className="relative p-2 text-charcoal-light hover:text-accent transition-colors"
                aria-label={`Wishlist (${wishlistItems.length} items)`}
              >
                <Heart size={20} />
                {wishlistItems.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center"
                  >
                    {wishlistItems.length}
                  </motion.span>
                )}
              </Link>
              <button
                onClick={() => toggleCart(true)}
                className="relative p-2 text-charcoal-light hover:text-accent transition-colors"
                aria-label={`Cart (${itemCount} items)`}
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[360px] bg-ivory z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-serif text-xl text-charcoal">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-charcoal"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>
                <nav className="space-y-1">
                  {[
                    { to: '/', label: 'Home' },
                    { to: '/shop', label: 'Shop All' },
                    { to: '/shop?collection=daily-rituals', label: 'Daily Rituals' },
                    { to: '/shop?collection=winter-essentials', label: 'Winter Essentials' },
                    { to: '/shop?collection=summer-edit', label: 'Summer Edit' },
                    { to: '/shop?collection=home-office', label: 'Home & Office' },
                    { to: '/wishlist', label: 'Wishlist' },
                  ].map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        className="block py-3 text-lg text-charcoal hover:text-accent transition-colors border-b border-divider"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20 pb-16 sm:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <MobileBottomNav />

      {/* Footer */}
      <footer className="border-t border-divider mt-20 mb-16 sm:mb-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <span className="font-serif text-lg text-charcoal block mb-4">NOVA SUPPLY</span>
              <p className="text-sm text-warm-gray leading-relaxed">
                Modern essentials for considered living. Quality materials, timeless design.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-charcoal mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/shop" className="text-sm text-warm-gray hover:text-accent transition-colors">All Products</Link></li>
                <li><Link to="/shop?category=Apparel" className="text-sm text-warm-gray hover:text-accent transition-colors">Apparel</Link></li>
                <li><Link to="/shop?category=Accessories" className="text-sm text-warm-gray hover:text-accent transition-colors">Accessories</Link></li>
                <li><Link to="/shop?category=Home" className="text-sm text-warm-gray hover:text-accent transition-colors">Home</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-charcoal mb-4">Info</h4>
              <ul className="space-y-2">
                <li><span className="text-sm text-warm-gray">Shipping & Returns</span></li>
                <li><span className="text-sm text-warm-gray">Size Guide</span></li>
                <li><span className="text-sm text-warm-gray">Care Instructions</span></li>
                <li><span className="text-sm text-warm-gray">Contact Us</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-charcoal mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><span className="text-sm text-warm-gray">Instagram</span></li>
                <li><span className="text-sm text-warm-gray">Pinterest</span></li>
                <li><span className="text-sm text-warm-gray">Newsletter</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-divider pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-warm-gray">© 2026 Nova Supply. All rights reserved.</p>
            <p className="text-xs text-warm-gray">Designed with intention.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
