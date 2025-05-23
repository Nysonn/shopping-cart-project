// NoProductsFound.jsx
import React from "react";
import { motion } from "framer-motion";

export default function NoProductsFound({ clearFilters }) {
  return (
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
  );
}
