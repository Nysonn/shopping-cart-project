import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { FaFilter, FaSearch, FaSlidersH, FaTimes } from "react-icons/fa";

import appleImg from '../assets/apples.jpg';
import carrotImg from '../assets/carrot.jpg';
import bananaImg from '../assets/banana-pic.jpg';
import berryImg from '../assets/berry-pic.jpg';
import grapesImg from '../assets/grapes-pic.jpg';
import sweetMelonImg from '../assets/sweet-melon.jpg';
import orangesImg from '../assets/oranges-pic.jpg';
import watermelonImg from '../assets/watermelon.jpg';

const products = [
  { id: 1, name: "Organic Apples", category: "Fruit", price: "UGX 1,000", image: appleImg },
  { id: 2, name: "Fresh Carrots", category: "Vegetable", price: "UGX 2,000", image: carrotImg },
  { id: 3, name: "Organic Bananas", category: "Fruit", price: "UGX 4,000", image: bananaImg },
  { id: 4, name: "Mixed Berries", category: "Fruit", price: "UGX 3,000", image: berryImg },
  { id: 5, name: "Purple Grapes", category: "Fruit", price: "UGX 1,000", image: grapesImg },
  { id: 6, name: "Sweet Melon", category: "Fruit", price: "UGX 5,000", image: sweetMelonImg },
  { id: 7, name: "Juicy Oranges", category: "Fruit", price: "UGX 2,000", image: orangesImg },
  { id: 8, name: "Water Melon", category: "Fruit", price: "UGX 5,000", image: watermelonImg },
  { id: 9, name: "Green Grapes", category: "Fruit", price: "UGX 2,000", image: grapesImg }
];

// Get all unique categories
const categories = ["All", ...new Set(products.map(product => product.category))];

export default function ProductGrid() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("default"); // default, price-asc, price-desc, name

  // Filter products based on category and search term
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(lowerCaseSearchTerm) || 
        product.category.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    
    // Sort products
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => {
          const aPrice = parseFloat(a.price.replace("UGX ", "").replace(",", ""));
          const bPrice = parseFloat(b.price.replace("UGX ", "").replace(",", ""));
          return aPrice - bPrice;
        });
        break;
      case "price-desc":
        result.sort((a, b) => {
          const aPrice = parseFloat(a.price.replace("UGX ", "").replace(",", ""));
          const bPrice = parseFloat(b.price.replace("UGX ", "").replace(",", ""));
          return bPrice - aPrice;
        });
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep default order
        break;
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchTerm, sortBy]);

  // Clear all filters
  const clearFilters = () => {
    setActiveCategory("All");
    setSearchTerm("");
    setSortBy("default");
  };

  return (
    <section id="products" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fresh From Our Farm</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide selection of fresh, locally-sourced produce. We take pride in bringing you the best quality fruits and vegetables.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-2 w-full md:w-auto">
              <button
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FaFilter />
                <span>Filters</span>
              </button>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Sort by</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FaSlidersH />
                </div>
              </div>
              {(activeCategory !== "All" || searchTerm || sortBy !== "default") && (
                <button
                  className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 rounded-lg px-4 py-2 hover:bg-red-100"
                  onClick={clearFilters}
                >
                  <FaTimes />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>
          
          {/* Category Pills */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-green-500 text-white" 
                        : "bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:bg-green-50"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Grid with Animation */}
        <AnimatePresence>
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">No products found. Try a different search.</p>
              <button
                className="mt-4 text-green-600 hover:text-green-700 font-medium"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
