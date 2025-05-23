// DesktopFiltersPanel.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function DesktopFiltersPanel({
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
}) {
  return (
    <div className="hidden lg:block lg:w-64 flex-shrink-0 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-bold text-lg text-gray-800 mb-4">Filters</h3>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedCategory === category
                      ? "border-green-500 bg-green-500"
                      : "border-gray-300"
                  }`}
                >
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
                onChange={(e) =>
                  handlePriceChange(priceRange[0], parseInt(e.target.value))
                }
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
    </div>
  );
}
