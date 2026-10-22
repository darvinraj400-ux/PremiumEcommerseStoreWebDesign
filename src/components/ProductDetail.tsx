import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (product?.colors?.length) {
      setSelectedColor(product.colors[0].name);
    }
    if (product?.sizes?.length) {
      setSelectedSize(product.sizes[1] || product.sizes[0]);
    }
    setSelectedImage(0);
    setQuantity(1);
    setAddedToCart(false);
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-4xl mb-4">∅</p>
        <h2 className="text-xl text-charcoal mb-2">Product not found</h2>
        <p className="text-sm text-warm-gray mb-6">This product may have been removed or doesn't exist.</p>
        <Link to="/shop" className="px-6 py-2.5 bg-charcoal text-ivory text-sm rounded-full hover:bg-charcoal-light transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedColor, selectedSize);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2 text-sm text-warm-gray mb-6 sm:mb-8"
      >
        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-charcoal truncate">{product.name}</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Image - Swipeable on mobile */}
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-ivory-dark mb-4">
            <motion.div
              className="relative w-full h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const threshold = 50;
                if (info.offset.x < -threshold && selectedImage < product.images.length - 1) {
                  setSelectedImage(prev => prev + 1);
                } else if (info.offset.x > threshold && selectedImage > 0) {
                  setSelectedImage(prev => prev - 1);
                }
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
                  draggable={false}
                />
              </AnimatePresence>
            </motion.div>
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-charcoal text-ivory text-xs uppercase tracking-wider rounded-full z-10">
                {product.badge}
              </span>
            )}
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs z-10">
              {selectedImage + 1} / {product.images.length}
            </div>
            {/* Navigation arrows - desktop only */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors hidden sm:block"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setSelectedImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors hidden sm:block"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden transition-all ${
                  selectedImage === i ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.15em] text-warm-gray mb-2">{product.category}</p>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-3">{product.name}</h1>
            <p className="text-xl sm:text-2xl text-charcoal">${product.price}</p>
          </div>

          <p className="text-sm text-charcoal-light leading-relaxed mb-8">{product.description}</p>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-charcoal">
                  Color: <span className="text-warm-gray">{selectedColor}</span>
                </p>
              </div>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-accent scale-110'
                        : 'border-divider hover:border-warm-gray'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-charcoal">Size</p>
                <button className="text-xs text-accent hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[44px] h-11 px-4 text-sm rounded-full border transition-all ${
                      selectedSize === size
                        ? 'bg-charcoal text-ivory border-charcoal'
                        : 'border-divider text-charcoal hover:border-charcoal/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-sm text-charcoal mb-3">Quantity</p>
            <div className="inline-flex items-center border border-divider rounded-full">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:text-accent transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="w-10 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:text-accent transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-8">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleAddToCart}
              className={`flex-1 py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-charcoal text-ivory hover:bg-charcoal-light'
              }`}
            >
              <ShoppingBag size={18} />
              {addedToCart ? 'Added to Cart ✓' : 'Add to Cart'}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleItem(product)}
              className={`p-3.5 rounded-full border transition-all ${
                inWishlist
                  ? 'bg-accent border-accent text-white'
                  : 'border-divider text-charcoal hover:border-accent hover:text-accent'
              }`}
              aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
            </motion.button>
          </div>

          {/* Product Details Accordion */}
          <div className="border-t border-divider">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full py-4 flex items-center justify-between text-sm text-charcoal"
            >
              <span>Product Details</span>
              <motion.span
                animate={{ rotate: showDetails ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={18} className="rotate-90" />
              </motion.span>
            </button>
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="pb-4 space-y-2">
                    {product.details.map((detail, i) => (
                      <li key={i} className="text-sm text-warm-gray flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Shipping Info */}
          <div className="mt-6 p-4 bg-ivory-dark rounded-xl">
            <div className="space-y-2 text-xs text-warm-gray">
              <p>✦ Free shipping on orders over $150</p>
              <p>✦ 30-day free returns</p>
              <p>✦ Ships within 2-3 business days</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 sm:mt-28">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-8 sm:mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-ivory-dark mb-3">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-medium text-charcoal group-hover:text-accent transition-colors">{p.name}</h3>
                <p className="text-sm text-warm-gray mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
