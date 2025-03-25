import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { FaSearch, FaFilter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // You'll need to install framer-motion

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
  { id: 1, name: "Organic Apples", category: "Fruit", price: "UGX 1,000", image: appleImg },
  { id: 2, name: "Fresh Carrots", category: "Vegetable", price: "UGX 2,000", image: carrotImg },
  { id: 3, name: "Organic Bananas", category: "Fruit", price: "UGX 4,000", image: bananaImg },
  { id: 4, name: "Berry", category: "Fruit", price: "UGX 3,000", image: berryImg },
  { id: 5, name: "Grapes", category: "Fruit", price: "UGX 1,000", image: grapesImg },
  { id: 6, name: "Sweet Melon", category: "Fruit", price: "UGX 5,000", image: sweetMelonImg },
  { id: 7, name: "Oranges", category: "Fruit", price: "UGX 2,000", image: orangesImg },
  { id: 8, name: "Water Melon", category: "Fruit", price: "UGX 5,000", image: watermelonImg },
  { id: 9, name: "Grapes", category: "Fruit", price: "UGX 2,000", image: grapesImg }
];

const categories = ["All", "Fruit", "Vegetable"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("name"); // Options: name, price

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price") {
        return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
      }
      return a.name.localeCompare(b.name);
    });

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

  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Our Fresh Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Browse our selection of fresh, organic fruits and vegetables. 
          All our products are sourced from local farmers and delivered to you at their peak freshness.
        </p>
      </div>
      
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
          >
            <FaFilter />
            Filters & Sort
          </button>
        </div>

        {/* Expandable Filters Section */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 space-y-4">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`px-4 py-2 rounded-full transition-colors ${
                          selectedCategory === category
                            ? "bg-green-500 text-white"
                            : "bg-green-100 text-green-700 hover:bg-green-200"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <h3 className="font-semibold mb-2">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results Summary */}
      <div className="mb-6 text-gray-600">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
      </div>
      
      {/* Products Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="animate-pulse">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-green-600 hover:text-green-700 underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
} 