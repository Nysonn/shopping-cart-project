import React, { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { FaTrash, FaArrowLeft, FaPlus, FaMinus, FaShoppingBag, FaTimesCircle } from "react-icons/fa";

export default function CartModal({ closeModal }) {
  const { state, removeItem, updateQuantity, clearCart } = useContext(CartContext);

  // Calculate total with quantity in mind
  const totalPrice = state.cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.product.price.replace("UGX ", "").replace(",", ""));
    return total + (itemPrice * item.quantity);
  }, 0);

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling of the body when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  // Handle incrementing quantity
  const incrementQuantity = (id, currentQty) => {
    updateQuantity(id, currentQty + 1);
  };

  // Handle decrementing quantity
  const decrementQuantity = (id, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    } else {
      removeItem(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end items-stretch z-50"
      onClick={closeModal}
    >
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white w-full max-w-md h-full shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        {/* Cart Header */}
        <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-yellow-400 to-green-300">
          <div className="flex items-center gap-2">
            <FaShoppingBag className="text-gray-800" />
            <h2 id="cart-heading" className="text-lg font-bold text-gray-800">Your Cart</h2>
            <span className="bg-white text-green-600 text-xs font-bold px-2 py-1 rounded-full">
              {state.cart.length} {state.cart.length === 1 ? 'item' : 'items'}
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
        
        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {state.cart.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-6"
              >
                <FaShoppingBag className="text-4xl text-gray-300 mb-3" />
                <p className="text-gray-500 mb-3">Your cart is empty</p>
                <button
                  onClick={closeModal}
                  className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
                >
                  <FaArrowLeft className="mr-2" /> Continue Shopping
                </button>
              </motion.div>
            ) : (
              state.cart.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex gap-3 border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-gray-50">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <FaTrash className="text-sm" />
                      </motion.button>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{item.product.category}</p>
                    <div className="flex justify-between items-center mt-1">
                      <div className="flex items-center border border-gray-200 rounded-md">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => decrementQuantity(item.product.id, item.quantity)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded-l-md"
                          aria-label="Decrease quantity"
                        >
                          <FaMinus className="text-xs" />
                        </motion.button>
                        <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => incrementQuantity(item.product.id, item.quantity)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded-r-md"
                          aria-label="Increase quantity"
                        >
                          <FaPlus className="text-xs" />
                        </motion.button>
                      </div>
                      <p className="font-semibold text-green-600">
                        {item.product.price}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
        
        {/* Cart Footer */}
        {state.cart.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">UGX {totalPrice.toLocaleString()}</span>
            </div>
            <div className="space-y-2">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm"
                onClick={() => alert("Checkout functionality would be implemented here!")}
              >
                Proceed to Checkout
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-gray-700 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => clearCart()}
              >
                Clear Cart
              </motion.button>
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={closeModal}
                className="text-green-600 hover:text-green-700 inline-flex items-center text-sm"
              >
                <FaArrowLeft className="mr-1" /> 
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
