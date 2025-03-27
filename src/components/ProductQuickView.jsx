import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { FaTimes, FaStar, FaRegStar, FaPlus, FaMinus, FaHeart, FaShare, FaShoppingCart, FaTruck, FaShieldAlt, FaExchangeAlt } from "react-icons/fa";

export default function ProductQuickView({ product, closeQuickView }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem, state } = useContext(CartContext);
  
  // Check if product is already in cart
  const existingCartItem = state.cart.find(item => item.product.id === product.id);
  const isInCart = Boolean(existingCartItem);
  
  // Mock additional images (in a real app, these would come from the product data)
  const productImages = [
    product.image,
    // Additional images would be here in a real implementation
  ];
  
  // Keyboard event listener for accessibility
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeQuickView();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling of the body when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [closeQuickView]);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
         onClick={closeQuickView}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-gray-700 hover:bg-gray-100 transition-colors shadow-md"
            onClick={closeQuickView}
            aria-label="Close quick view"
          >
            <FaTimes />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image Gallery */}
            <div>
              <div className="relative bg-gray-50 rounded-lg overflow-hidden mb-4">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-80 object-contain mx-auto"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              
              {/* Thumbnail Navigation (for when there are multiple images) */}
              {productImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      className={`w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                        selectedImage === index ? 'border-green-500' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
              
              {/* Ratings */}
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  star <= 4 ? (
                    <FaStar key={star} className="text-amber-400" />
                  ) : (
                    <FaRegStar key={star} className="text-amber-400" />
                  )
                ))}
                <span className="text-sm text-gray-500 ml-2">(24 reviews)</span>
              </div>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-xl font-bold text-green-600">{product.price}</span>
                <span className="text-sm text-gray-500 ml-2 line-through">UGX {parseInt(product.price.replace("UGX ", "").replace(",", "")) * 1.2}</span>
                <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                  Save 20%
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">
                Our {product.name.toLowerCase()} are freshly harvested from local organic farms. 
                Packed with essential nutrients and bursting with flavor, they're perfect 
                for healthy meals and snacks.
              </p>
              
              {/* Add to Cart Section */}
              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex items-center gap-4">
                  {/* Quantity Selector */}
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
                  
                  {/* Add to Wishlist */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleWishlist}
                    className={`p-3 rounded-lg flex items-center justify-center ${
                      isWishlisted 
                        ? 'bg-red-50 text-red-500 border border-red-100' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <FaHeart className={isWishlisted ? 'text-red-500' : ''} />
                  </motion.button>
                  
                  {/* Share Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    aria-label="Share product"
                  >
                    <FaShare />
                  </motion.button>
                </div>
                
                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 text-white font-medium ${
                    isInCart 
                      ? 'bg-green-600' 
                      : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  <FaShoppingCart />
                  <span>{isInCart ? 'Added to Cart' : 'Add to Cart'}</span>
                </motion.button>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <FaTruck className="text-green-500" />
                  <span className="text-sm text-gray-600">Free delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-green-500" />
                  <span className="text-sm text-gray-600">Quality guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaExchangeAlt className="text-green-500" />
                  <span className="text-sm text-gray-600">Easy returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 