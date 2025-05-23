import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function SearchBar({ toggleSearch }) {
  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="border-t border-white/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-full px-5 py-3 pl-12 focus:ring-2 focus:ring-green-500 placeholder-gray-500"
            autoFocus
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={toggleSearch}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
