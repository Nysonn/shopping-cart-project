// MobileQuickAddButton.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function MobileQuickAddButton({ isHovered, addedToCart, handleAddToCart }) {
  return (
    <motion.button
      className={`absolute bottom-0 left-0 right-0 py-2.5 text-center font-medium text-sm sm:hidden transition-all transform ${
        addedToCart
          ? "bg-green-500 text-white translate-y-0"
          : isHovered
          ? "bg-gradient-to-r from-yellow-400 to-green-500 text-white translate-y-0"
          : "translate-y-full"
      }`}
      onClick={handleAddToCart}
      animate={{ translateY: isHovered || addedToCart ? 0 : "100%" }}
      transition={{ duration: 0.3 }}
    >
      {addedToCart ? (
        <span className="flex items-center justify-center gap-1">
          <FaCheck /> Added
        </span>
      ) : (
        "Add to Cart"
      )}
    </motion.button>
  );
}
