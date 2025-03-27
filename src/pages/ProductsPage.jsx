import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";
import ProductQuickView from "../components/ProductQuickView";
import { FaSearch, FaFilter, FaChevronDown, FaTimes, FaSlidersH, FaSortAmountDown, FaCheck } from "react-icons/fa";

// Import images
import appleImg from '../assets/apples.jpg';
import carrotImg from '../assets/carrot.jpg';
import bananaImg from '../assets/banana-pic.jpg';
import berryImg from '../assets/berry-pic.jpg';
import grapesImg from '../assets/grapes-pic.jpg';
import sweetMelonImg from '../assets/sweet-melon.jpg';
import orangesImg from '../assets/oranges-pic.jpg';
import watermelonImg from '../assets/watermelon.jpg';

const products = [
  { id: 1, name: "Organic Apples", category: "Fruit", price: "UGX 1,000", image: appleImg, rating: 4.5, reviews: 24, isOrganic: true },
  { id: 2, name: "Fresh Carrots", category: "Vegetable", price: "UGX 2,000", image: carrotImg, rating: 4.3, reviews: 18, isOrganic: false },
  { id: 3, name: "Organic Bananas", category: "Fruit", price: "UGX 4,000", image: bananaImg, rating: 4.7, reviews: 32, isOrganic: true },
  { id: 4, name: "Mixed Berries", category: "Fruit", price: "UGX 3,000", image: berryImg, rating: 4.8, reviews: 42, isOrganic: true },
  { id: 5, name: "Purple Grapes", category: "Fruit", price: "UGX 1,000", image: grapesImg, rating: 4.1, reviews: 15, isOrganic: false },
  { id: 6, name: "Sweet Melon", category: "Fruit", price: "UGX 5,000", image: sweetMelonImg, rating: 4.6, reviews: 28, isOrganic: true },
  { id: 7, name: "Juicy Oranges", category: "Fruit", price: "UGX 2,000", image: orangesImg, rating: 4.4, reviews: 36, isOrganic: false },
  { id: 8, name: "Water Melon", category: "Fruit", price: "UGX 5,000", image: watermelonImg, rating: 4.9, reviews: 45, isOrganic: true },
  { id: 9, name: "Green Grapes", category: "Fruit", price: "UGX 2,000", image: grapesImg, rating: 4.2, reviews: 19, isOrganic: false }
];

const categories = ["All", "Fruit", "Vegetable"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("name"); // Options: name, price
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showOrganic, setShowOrganic] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(0);
  const filtersRef = useRef(null);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle outside click for filters panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target) && !event.target.closest('[data-filter-toggle]')) {
        setShowFilters(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filtersRef]);

  // Calculate applied filters count
  useEffect(() => {
    let count = 0;
    if (selectedCategory !== "All") count++;
    if (showOrganic) count++;
    if (priceRange[0] > 0 || priceRange[1] < 10000) count++;
    if (sortBy !== "name") count++;
    setAppliedFilters(count);
  }, [selectedCategory, showOrganic, priceRange, sortBy]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      // Category filter
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      
      // Organic filter
      const matchesOrganic = !showOrganic || product.isOrganic;
      
      // Price range filter
      const productPrice = parseInt(product.price.replace(/\D/g, ""));
      const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
      
      // Search query
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesOrganic && matchesPrice && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") {
        return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
      } else if (sortBy === "price-desc") {
        return parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""));
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return a.name.localeCompare(b.name);
    });

  // Handle price range change
  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
  };

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  // Open product quick view
  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  // Close product quick view
  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory("All");
    setSortBy("name");
    setPriceRange([0, 10000]);
    setShowOrganic(false);
    setSearchQuery("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-700 to-green-600 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <span className="inline-block px-3 py-1 bg-green-500/30 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-3">Fresh from the Farm</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fresh Products</h1>
            <p className="text-green-100 text-lg mb-8">
              Browse our selection of fresh, organic fruits and vegetables. 
              All our products are sourced from local farmers and delivered to you at their peak freshness.
            </p>
            <div className="relative max-w-xl mx-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for fresh products..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>
      
      {/* Category Pills */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-md" 
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Panel - Desktop */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block lg:w-64 flex-shrink-0 space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Filters</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          selectedCategory === category ? 'border-green-500 bg-green-500' : 'border-gray-300'
                        }`}>
                          {selectedCategory === category && (
                            <FaCheck className="text-white text-xs" />
                          )}
                        </div>
                        <span className="text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="500"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                        className="w-full accent-green-500"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>UGX 0</span>
                        <span>UGX {priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Product Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Product Type</h4>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showOrganic}
                      onChange={() => setShowOrganic(!showOrganic)}
                      className="w-4 h-4 accent-green-500 rounded-sm"
                    />
                    <span className="text-gray-700">Organic Only</span>
                  </label>
                </div>
                
                {/* Sort By */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Best Rated</option>
                  </select>
                </div>
                
                {/* Reset Filters Button */}
                <button
                  onClick={resetFilters}
                  className="mt-6 w-full px-3 py-2 text-sm text-green-600 hover:text-green-700 hover:bg-green-50 rounded border border-green-200 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-grow">
              {/* Mobile Filter Controls */}
              <div className="mb-6 flex items-center justify-between lg:hidden">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
                <button
                  data-filter-toggle
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 shadow-sm"
                >
                  <FaFilter />
                  <span>Filters</span>
                  {appliedFilters > 0 && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {appliedFilters}
                    </span>
                  )}
                </button>
              </div>
              
              {/* Mobile Filters Panel */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    ref={filtersRef}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="lg:hidden bg-white rounded-xl shadow-lg mb-6 p-6 relative z-10"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg">Filters & Sort</h3>
                      <button 
                        onClick={() => setShowFilters(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                      {/* Categories */}
                      <div className="py-4">
                        <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
                        <div className="flex flex-wrap gap-2">
                          {categories.map(category => (
                            <button
                              key={category}
                              className={`px-4 py-2 rounded-full text-sm ${
                                selectedCategory === category
                                  ? "bg-green-600 text-white"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                              onClick={() => setSelectedCategory(category)}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Price Range */}
                      <div className="py-4">
                        <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                        <input
                          type="range"
                          min="0"
                          max="10000"
                          step="500"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                          className="w-full accent-green-500"
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                          <span>UGX 0</span>
                          <span>UGX {priceRange[1].toLocaleString()}</span>
                        </div>
                      </div>
                      
                      {/* Organic Filter */}
                      <div className="py-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={showOrganic}
                            onChange={() => setShowOrganic(!showOrganic)}
                            className="w-4 h-4 accent-green-500 rounded-sm"
                          />
                          <span className="text-gray-700">Organic Products Only</span>
                        </label>
                      </div>
                      
                      {/* Sort Options */}
                      <div className="py-4">
                        <h4 className="font-medium text-gray-700 mb-3">Sort By</h4>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="name">Name (A-Z)</option>
                          <option value="price-asc">Price: Low to High</option>
                          <option value="price-desc">Price: High to Low</option>
                          <option value="rating">Best Rated</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => setShowFilters(false)}
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          resetFilters();
                          setShowFilters(false);
                        }}
                        className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Reset & Apply
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Desktop Results Summary */}
              <div className="hidden lg:flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm bg-white"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Best Rated</option>
                  </select>
                </div>
              </div>
              
              {/* Products Grid */}
              {isLoading ? (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <motion.div key={n} variants={itemVariants} className="animate-pulse">
                      <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  layout
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <AnimatePresence>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <motion.div 
                          key={product.id} 
                          variants={itemVariants}
                          layout
                          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                          {/* Custom onClick handler to open quick view */}
                          <div onClick={() => openQuickView(product)}>
                            <ProductCard product={product} />
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full text-center py-12"
                      >
                        <div className="bg-white p-8 rounded-xl shadow-sm max-w-md mx-auto">
                          <FaSearch className="text-4xl text-gray-300 mx-auto mb-4" />
                          <h3 className="text-xl font-bold text-gray-800 mb-2">No Products Found</h3>
                          <p className="text-gray-600 mb-6">
                            We couldn't find any products matching your current filters or search terms.
                          </p>
                          <button
                            onClick={resetFilters}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            Reset Filters
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductQuickView 
            product={selectedProduct} 
            closeQuickView={closeQuickView} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
} 