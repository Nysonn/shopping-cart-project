// MobileFiltersPanel.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function MobileFiltersPanel({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  handlePriceChange,
  showOrganic,
  setShowOrganic,
  sortBy,
  setSortBy,
  resetFilters,
  setShowFilters,
  filtersRef,
}) {
  return (
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
            {categories.map((category) => (
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
            onChange={(e) =>
              handlePriceChange(priceRange[0], parseInt(e.target.value))
            }
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
  );
}
