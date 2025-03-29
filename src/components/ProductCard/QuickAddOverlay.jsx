// QuickAddOverlay.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaCheck } from "react-icons/fa";

export default function QuickAddOverlay({ isHovered, handleAddToCart, addedToCart }) {
  return (
    <motion.div
      className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
    >
      <motion.button
        className={`px-4 py-2.5 rounded-full font-medium text-sm transition-all ${
          addedToCart
            ? "bg-green-500 text-white"
            : "bg-white text-gray-800 hover:bg-gray-100"
        }`}
        onClick={handleAddToCart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {addedToCart ? (
          <span className="flex items-center gap-1">
            <FaCheck /> Added
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <FaShoppingCart /> Quick Add
          </span>
        )}
      </motion.button>
    </motion.div>
  );
}
