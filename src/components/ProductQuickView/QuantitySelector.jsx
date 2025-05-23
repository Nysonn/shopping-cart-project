// QuantitySelector.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function QuantitySelector({ quantity, incrementQuantity, decrementQuantity }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={decrementQuantity}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Decrease quantity"
      >
        <FaMinus className="text-xs" />
      </motion.button>
      <span className="w-12 text-center text-gray-800 font-medium">{quantity}</span>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={incrementQuantity}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Increase quantity"
      >
        <FaPlus className="text-xs" />
      </motion.button>
    </div>
  );
}
