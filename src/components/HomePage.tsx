import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products, collections } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Heart, ShoppingBag } from 'lucide-react';
import FallbackImage from './FallbackImage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <motion.div
      variants={itemVariants}
      className="group"
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-ivory-dark mb-4">
        <FallbackImage
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-charcoal text-ivory text-[10px] uppercase tracking-wider rounded-full">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Quick actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product, product.colors?.[0]?.name, product.sizes?.[1]); }}
            className="flex-1 py-2.5 bg-charcoal/90 backdrop-blur-sm text-ivory text-xs rounded-full hover:bg-charcoal transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
          <button
            onClick={(e) => { e.preventDefault(); toggleItem(product); }}
            className={`p-2.5 rounded-full backdrop-blur-sm transition-colors ${
              inWishlist ? 'bg-accent text-white' : 'bg-white/90 text-charcoal hover:bg-accent hover:text-white'
            }`}
            aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Mobile quick add */}
        <div className="absolute bottom-3 left-3 right-3 flex sm:hidden opacity-100">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 py-2.5 bg-charcoal/80 backdrop-blur-sm text-ivory text-xs rounded-full text-center"
          >
            View Details
          </Link>
        </div>
      </div>
      <Link to={`/product/${product.id}`}>
        <h3 className="text-sm font-medium text-charcoal group-hover:text-accent transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-warm-gray mt-1">${product.price}</p>
        {product.colors && (
          <div className="flex gap-1.5 mt-2">
            {product.colors.slice(0, 4).map(color => (
              <span
                key={color.name}
                className="w-3.5 h-3.5 rounded-full border border-divider"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.filter(p => p.badge === 'New' || p.badge === 'Popular').slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <FallbackImage
            src="https://image.qwenlm.ai/generated-images/071c036a-3760-46e4-bd35-9dbfafacf4ff/_result.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/60 to-transparent" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs uppercase tracking-[0.2em] text-accent mb-4 sm:mb-6"
            >
              Winter Collection 2026
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-4 sm:mb-6"
            >
              Objects for<br />
              <em className="text-accent">considered</em> living
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base text-charcoal-light leading-relaxed mb-8 max-w-md"
            >
              Thoughtfully designed essentials crafted from natural materials. 
              Each piece is made to last, to be used daily, and to bring quiet joy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-charcoal text-ivory text-sm rounded-full hover:bg-charcoal-light transition-colors group"
              >
                Shop Collection
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/shop?collection=daily-rituals"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-charcoal/20 text-charcoal text-sm rounded-full hover:border-charcoal/40 transition-colors"
              >
                Explore Rituals
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="border-y border-divider py-3 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-xs tracking-wider text-warm-gray">FREE SHIPPING OVER $150</span>
              <span className="text-accent">✦</span>
              <span className="text-xs tracking-wider text-warm-gray">ETHICALLY MADE</span>
              <span className="text-accent">✦</span>
              <span className="text-xs tracking-wider text-warm-gray">30-DAY RETURNS</span>
              <span className="text-accent">✦</span>
              <span className="text-xs tracking-wider text-warm-gray">SUSTAINABLE MATERIALS</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Featured Collections */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Curated</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Shop by Collection</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {/* Large featured card */}
          <motion.div variants={itemVariants} className="sm:col-span-2 sm:row-span-2">
            <Link to="/shop?collection=daily-rituals" className="group block relative aspect-[4/3] sm:aspect-auto sm:h-full rounded-xl overflow-hidden">
              <FallbackImage
                src={collections[0].image}
                alt={collections[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <p className="text-xs text-ivory/80 uppercase tracking-wider mb-2">{collections[0].productCount} pieces</p>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory mb-2">{collections[0].name}</h3>
                <p className="text-sm text-ivory/80 hidden sm:block">{collections[0].description}</p>
              </div>
            </Link>
          </motion.div>

          {/* Smaller cards */}
          {collections.slice(1, 4).map((collection) => (
            <motion.div key={collection.id} variants={itemVariants}>
              <Link to={`/shop?collection=${collection.id}`} className="group block relative aspect-[4/3] rounded-xl overflow-hidden">
                <FallbackImage
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5">
                  <h3 className="font-serif text-lg sm:text-xl text-ivory">{collection.name}</h3>
                  <p className="text-xs text-ivory/70 mt-1">{collection.productCount} pieces</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10 sm:mb-14"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Handpicked</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Featured Pieces</h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-charcoal hover:text-accent transition-colors"
          >
            View all <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1 text-sm text-charcoal hover:text-accent transition-colors"
          >
            View all products <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="bg-charcoal text-ivory">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Our Philosophy</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Less, but <em className="text-accent">better</em>
              </h2>
              <p className="text-ivory/70 leading-relaxed mb-4">
                We believe in the power of fewer, better things. Each piece in our collection 
                is chosen for its quality, its function, and its ability to bring meaning to daily life.
              </p>
              <p className="text-ivory/70 leading-relaxed mb-8">
                From ethically sourced materials to timeless silhouettes, every detail is considered. 
                This is design that serves life, not the other way around.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 border border-ivory/30 text-sm rounded-full hover:bg-ivory/10 transition-colors"
              >
                Discover More
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <FallbackImage
                  src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop&q=80"
                  alt="Our philosophy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-accent text-ivory p-4 sm:p-6 rounded-xl">
                <p className="font-serif text-2xl sm:text-3xl">12+</p>
                <p className="text-xs sm:text-sm opacity-80">Artisan partners</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Just In</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">New Arrivals</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {newArrivals.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </section>
      )}

      {/* Newsletter */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">Stay in the loop</h2>
            <p className="text-sm text-warm-gray mb-8 max-w-md mx-auto">
              Be the first to know about new arrivals, exclusive offers, and stories from our makers.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 bg-transparent border border-divider rounded-full text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-charcoal text-ivory text-sm rounded-full hover:bg-charcoal-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
