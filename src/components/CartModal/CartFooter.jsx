import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

export default function CartFooter({ totalPrice, closeModal }) {
  const { clearCart } = useContext(CartContext);

  return (
    <div className="border-t p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-semibold">
          UGX {totalPrice.toLocaleString()}
        </span>
      </div>
      <div className="space-y-2">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm"
          onClick={() =>
            alert("Checkout functionality would be implemented here!")
          }
        >
          Proceed to Checkout
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white text-gray-700 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          onClick={clearCart}
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
  );
}
