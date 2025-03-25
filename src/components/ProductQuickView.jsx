import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaStar, FaHeart, FaShoppingCart, FaLeaf, FaShippingFast, FaRegCheckCircle } from 'react-icons/fa';

export default function ProductQuickView({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  // Prevent scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-800 z-10 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close quick view"
          >
            <FaTimes />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative overflow-hidden h-64 sm:h-80 md:h-full">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded">New</span>
                )}
                {product.isSale && (
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">Sale</span>
                )}
                {product.isOrganic && (
                  <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded flex items-center gap-1">
                    <FaLeaf className="text-[10px]" /> Organic
                  </span>
                )}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="p-6 flex flex-col h-full overflow-y-auto">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="ml-3 text-lg text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                  )}
                  {product.isSale && (
                    <span className="ml-3 px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                      Save ${(product.oldPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">
                  Premium quality {product.name.toLowerCase()} sourced directly from local farms. 
                  Our products are harvested at peak ripeness to ensure maximum flavor and nutrition.
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaRegCheckCircle className="text-green-500" />
                    <span>Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaRegCheckCircle className="text-green-500" />
                    <span>Farm Fresh</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaLeaf className="text-green-500" />
                    <span>100% Organic</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaShippingFast className="text-green-500" />
                    <span>Fast Delivery</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                {/* Quantity Selector */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center">
                    <button 
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                      {quantity}
                    </span>
                    <button 
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                    aria-label="Add to wishlist"
                  >
                    <FaHeart className="text-red-500" />
                    <span>Add to Wishlist</span>
                  </button>
                  <button
                    className="px-4 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    aria-label="Add to cart"
                  >
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
} 