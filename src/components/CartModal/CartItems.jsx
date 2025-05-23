import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CartItem from "./CartItem";
import { FaShoppingBag, FaArrowLeft } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

export default function CartItems({ closeModal }) {
  const { state } = useContext(CartContext);

  return (
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
            <CartItem key={item.product.id} item={item} />
          ))
        )}
      </AnimatePresence>
    </div>
  );
}
