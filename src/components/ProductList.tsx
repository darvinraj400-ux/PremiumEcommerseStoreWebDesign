import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ShoppingBag, Heart, ChevronDown } from 'lucide-react';
import { products, categories, collections } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest';

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  useEffect(() => {
    const collection = searchParams.get('collection');
    const category = searchParams.get('category');
    if (collection) setSelectedCollection(collection);
    if (category) setSelectedCategory(category);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedCollection) {
      result = result.filter(p => p.collection === selectedCollection);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
    }

    return result;
  }, [search, selectedCategory, selectedCollection, sortBy]);

  const activeCollection = collections.find(c => c.id === selectedCollection);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-12"
      >
        {activeCollection ? (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Collection</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-2">{activeCollection.name}</h1>
            <p className="text-sm text-warm-gray">{activeCollection.description}</p>
          </>
        ) : (
          <>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-2">
              {selectedCategory !== 'All' ? selectedCategory : 'All Products'}
            </h1>
            <p className="text-sm text-warm-gray">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </>
        )}
      </motion.div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-11 pr-4 py-3 bg-transparent border border-divider rounded-full text-sm focus:outline-none focus:border-accent transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-warm-gray hover:text-accent"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter & Sort buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 border rounded-full text-sm transition-colors ${
              showFilters || selectedCategory !== 'All' || selectedCollection
                ? 'border-accent text-accent'
                : 'border-divider text-charcoal hover:border-charcoal/40'
            }`}
          >
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filters</span>
          </button>
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 px-4 py-3 border border-divider rounded-full text-sm text-charcoal hover:border-charcoal/40 transition-colors"
            >
              <span className="hidden sm:inline">{sortOptions.find(o => o.value === sortBy)?.label}</span>
              <span className="sm:hidden">Sort</span>
              <ChevronDown size={14} className={`transition-transform ${showSort ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showSort && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-52 bg-ivory border border-divider rounded-xl shadow-lg overflow-hidden z-20"
                >
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => { setSortBy(option.value); setShowSort(false); }}
                      className={`block w-full text-left px-4 py-3 text-sm hover:bg-ivory-dark transition-colors ${
                        sortBy === option.value ? 'text-accent font-medium' : 'text-charcoal'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="p-4 sm:p-6 border border-divider rounded-xl bg-ivory-dark/50">
              <div className="flex flex-wrap gap-6">
                {/* Categories */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-warm-gray mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                          selectedCategory === cat
                            ? 'bg-charcoal text-ivory'
                            : 'bg-transparent border border-divider text-charcoal hover:border-charcoal/40'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Collections */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-warm-gray mb-3">Collection</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCollection('')}
                      className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                        !selectedCollection
                          ? 'bg-charcoal text-ivory'
                          : 'bg-transparent border border-divider text-charcoal hover:border-charcoal/40'
                      }`}
                    >
                      All
                    </button>
                    {collections.map(col => (
                      <button
                        key={col.id}
                        onClick={() => setSelectedCollection(col.id)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                          selectedCollection === col.id
                            ? 'bg-charcoal text-ivory'
                            : 'bg-transparent border border-divider text-charcoal hover:border-charcoal/40'
                        }`}
                      >
                        {col.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear filters */}
              {(selectedCategory !== 'All' || selectedCollection || search) && (
                <button
                  onClick={() => { setSelectedCategory('All'); setSelectedCollection(''); setSearch(''); }}
                  className="mt-4 text-xs text-accent hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-4xl mb-4">∅</p>
          <h3 className="text-lg text-charcoal mb-2">No products found</h3>
          <p className="text-sm text-warm-gray mb-6">Try adjusting your search or filters.</p>
          <button
            onClick={() => { setSearch(''); setSelectedCategory('All'); setSelectedCollection(''); }}
            className="px-6 py-2.5 bg-charcoal text-ivory text-sm rounded-full hover:bg-charcoal-light transition-colors"
          >
            Reset Filters
          </button>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => {
              const inWishlist = isInWishlist(product.id);
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-ivory-dark mb-4">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </Link>
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-charcoal text-ivory text-[10px] uppercase tracking-wider rounded-full">
                        {product.badge}
                      </span>
                    )}
                    {/* Wishlist button - always visible on mobile */}
                    <button
                      onClick={() => toggleItem(product)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all sm:opacity-0 sm:group-hover:opacity-100 ${
                        inWishlist
                          ? 'bg-accent text-white opacity-100'
                          : 'bg-white/90 text-charcoal hover:bg-accent hover:text-white'
                      }`}
                      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                      <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
                    </button>
                    {/* Quick add - desktop hover */}
                    <div className="absolute bottom-3 left-3 right-3 hidden sm:block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <button
                        onClick={() => addItem(product, product.colors?.[0]?.name, product.sizes?.[1])}
                        className="w-full py-2.5 bg-charcoal/90 backdrop-blur-sm text-ivory text-xs rounded-full hover:bg-charcoal transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag size={14} />
                        Quick Add
                      </button>
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
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
