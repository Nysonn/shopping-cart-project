import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";

export default function DesktopActions({ cartItemCount, isCartUpdated, openModal, toggleSearch }) {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSearch}
        className="p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Search products"
      >
        <FaSearch className="text-gray-800" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Wishlist"
      >
        <FaHeart className="text-gray-800" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="My Account"
      >
        <FaUser className="text-gray-800" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${cartItemCount > 0 ? 'bg-white/20' : 'hover:bg-white/20'} ${isCartUpdated ? 'animate-pulse' : ''}`}
        onClick={openModal}
        aria-label={`Shopping Cart with ${cartItemCount} items`}
      >
        <FaShoppingCart className="text-lg text-gray-800" />
        <AnimatePresence>
          {cartItemCount > 0 && (
            <motion.span
              key="cart-count"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
            >
              {cartItemCount}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
