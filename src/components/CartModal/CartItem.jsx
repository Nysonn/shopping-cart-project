import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { removeItem, updateQuantity } = useContext(CartContext);

  // Increment quantity
  const incrementQuantity = (id, currentQty) => {
    updateQuantity(id, currentQty + 1);
  };

  // Decrement quantity, or remove item if quantity is 1
  const decrementQuantity = (id, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    } else {
      removeItem(id);
    }
  };

  return (
    <motion.div
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
          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-200 rounded-md">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                decrementQuantity(item.product.id, item.quantity)
              }
              className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded-l-md"
              aria-label="Decrease quantity"
            >
              <FaMinus className="text-xs" />
            </motion.button>
            <span className="px-3 py-1 text-sm font-medium">
              {item.quantity}
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                incrementQuantity(item.product.id, item.quantity)
              }
              className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded-r-md"
              aria-label="Increase quantity"
            >
              <FaPlus className="text-xs" />
            </motion.button>
          </div>
          <p className="font-semibold text-green-600">{item.product.price}</p>
        </div>
      </div>
    </motion.div>
  );
}
