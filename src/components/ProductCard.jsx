import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaHeart, FaEye, FaPlus, FaMinus, FaStar, FaRegHeart, FaCheck, FaLeaf } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { state, addItem } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Check if product is in the cart
  const existingCartItem = state.cart.find(item => item.product.id === product.id);
  const isInCart = Boolean(existingCartItem);

  // Quick add quantity handlers
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  // Extract price as number for discount calculation
  const priceValue = parseInt(product.price.replace(/\D/g, ""));
  const hasDiscount = product.id % 3 === 0; // Just for demo - every 3rd product has discount
  const discountPercentage = hasDiscount ? 15 : 0;
  const originalPrice = hasDiscount ? Math.round(priceValue * (100 / (100 - discountPercentage))) : null;
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAddedToCart(true);
    
    // Reset the "Added" state after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
    
    addItem(product, quantity);
    // Reset quantity after adding
    setQuantity(1);
    setShowQuickAdd(false);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      className="group relative rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      layout
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isOrganic && (
          <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium py-1 px-2 rounded-full border border-green-100">
            <FaLeaf className="text-green-500" /> Organic
          </span>
        )}
        {hasDiscount && (
          <span className="bg-red-50 text-red-700 text-xs font-bold py-1 px-2 rounded-full border border-red-100">
            -{discountPercentage}%
          </span>
        )}
      </div>
      
      {/* Wishlist Button */}
      <button
        className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-300 ${
          isFavorite 
            ? "bg-red-50 text-red-500" 
            : "bg-white/70 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white"
        }`}
        onClick={toggleFavorite}
        aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isFavorite ? <FaHeart className="text-lg" /> : <FaRegHeart className="text-lg" />}
      </button>
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on hover with quick actions */}
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
      </div>
      
      {/* Product Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Category */}
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {product.category}
        </div>
        
        {/* Product Name */}
        <h3 className="font-bold text-gray-800 text-lg mb-1 line-clamp-2 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Ratings */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-xs ${
                  i < Math.floor(product.rating) 
                    ? "text-yellow-400" 
                    : i < product.rating 
                      ? "text-gradient-star" // For half stars (using a special class)
                      : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        
        {/* Price */}
        <div className="mt-auto pt-2 flex items-center">
          {hasDiscount && (
            <span className="text-gray-400 text-sm line-through mr-2">UGX {originalPrice.toLocaleString()}</span>
          )}
          <span className="font-bold text-lg text-gray-800">{product.price}</span>
        </div>
        
        {/* Add to Cart Button - Desktop/Larger Screens Only */}
        <button
          onClick={handleAddToCart}
          className={`w-full mt-3 py-2.5 rounded-md font-medium transition-all duration-300 hidden sm:flex sm:items-center sm:justify-center gap-2 ${
            addedToCart 
              ? "bg-green-500 text-white" 
              : "bg-gradient-to-r from-yellow-400 to-green-500 text-white hover:from-yellow-500 hover:to-green-600"
          }`}
        >
          {addedToCart ? (
            <>
              <FaCheck /> Added to Cart
            </>
          ) : (
            <>
              <FaShoppingCart /> Add to Cart
            </>
          )}
        </button>
      </div>
      
      {/* Mobile Quick Add Button - Fixed at bottom */}
      <motion.button
        className={`absolute bottom-0 left-0 right-0 py-2.5 text-center font-medium text-sm sm:hidden transition-all transform ${
          addedToCart 
            ? "bg-green-500 text-white translate-y-0" 
            : isHovered 
              ? "bg-gradient-to-r from-yellow-400 to-green-500 text-white translate-y-0" 
              : "translate-y-full"
        }`}
        onClick={handleAddToCart}
        animate={{ translateY: isHovered || addedToCart ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        {addedToCart ? <span className="flex items-center justify-center gap-1"><FaCheck /> Added</span> : "Add to Cart"}
      </motion.button>
    </motion.div>
  );
}
