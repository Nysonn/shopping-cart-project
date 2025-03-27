import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaHeart, FaEye, FaPlus, FaMinus } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { state, addItem } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Check if product is in the cart
  const existingCartItem = state.cart.find(item => item.product.id === product.id);
  const isInCart = Boolean(existingCartItem);

  // Quick add quantity handlers
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  const handleAddToCart = () => {
    addItem(product, quantity);
    // Reset quantity after adding
    setQuantity(1);
    setShowQuickAdd(false);
  };

  return (
    <motion.div 
      className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickAdd(false);
      }}
    >
      {/* Product Image with Overlay Actions */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Action buttons that appear on hover */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:bg-green-500 hover:text-white transition-colors duration-300"
            onClick={() => setShowQuickAdd(!showQuickAdd)}
            aria-label="Quick add to cart"
          >
            <FaShoppingCart className="text-lg" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-colors duration-300"
            aria-label="Add to wishlist"
          >
            <FaHeart className="text-lg" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
            aria-label="Quick view"
          >
            <FaEye className="text-lg" />
          </motion.button>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">{product.price}</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-amber-400 text-xs">★</span>
            ))}
          </div>
        </div>
        
        {/* Quick add quantity selector - shown when toggle is clicked */}
        {showQuickAdd && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 flex items-center justify-between"
          >
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={decrementQuantity}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <FaMinus className="text-xs" />
              </button>
              <span className="w-8 text-center text-sm font-medium">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <FaPlus className="text-xs" />
              </button>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition-colors"
            >
              Add
            </motion.button>
          </motion.div>
        )}
        
        {/* Add to cart button */}
        {!showQuickAdd && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className={`mt-3 w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 ${
              isInCart 
                ? 'bg-green-100 text-green-700 border border-green-500' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            <FaShoppingCart />
            <span>{isInCart ? 'Added to Cart' : 'Add to Cart'}</span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
