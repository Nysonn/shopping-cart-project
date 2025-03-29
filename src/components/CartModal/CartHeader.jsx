import React from "react";
import { motion } from "framer-motion";
import { FaShoppingBag, FaArrowLeft, FaTimesCircle } from "react-icons/fa";

export default function CartHeader({ closeModal, itemCount }) {
  return (
    <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-yellow-400 to-green-300">
      <div className="flex items-center gap-2">
        <FaShoppingBag className="text-gray-800" />
        <h2 id="cart-heading" className="text-lg font-bold text-gray-800">
          Your Cart
        </h2>
        <span className="bg-white text-green-600 text-xs font-bold px-2 py-1 rounded-full">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </span>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={closeModal}
        className="text-gray-800 hover:text-gray-900"
        aria-label="Close cart"
      >
        <FaTimesCircle className="text-xl" />
      </motion.button>
    </div>
  );
}
