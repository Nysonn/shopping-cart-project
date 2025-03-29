// SearchAndFilterBar.jsx
import React from "react";
import { FaSearch, FaFilter, FaSlidersH, FaTimes } from "react-icons/fa";

export default function SearchAndFilterBar({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters,
  activeCategory,
  clearFilters,
}) {
  return (
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

        {/* Filter & Sort Controls */}
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
    </div>
  );
}
