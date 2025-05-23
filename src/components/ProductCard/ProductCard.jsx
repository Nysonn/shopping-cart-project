// ProductCard.jsx
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../../context/CartContext";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import MobileQuickAddButton from "./MobileQuickAddButton";

export default function ProductCard({ product }) {
  const { state, addItem } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Handler for adding the product to the cart.
  const handleAddToCart = (e, qty) => {
    e.stopPropagation();
    setAddedToCart(true);
    // Reset the "Added" state after 2 seconds.
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
    addItem(product, qty);
    // Reset quantity after adding.
    setQuantity(1);
  };

  return (
    <motion.div
      className="group relative rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      layout
    >
      <ProductImage
        product={product}
        isHovered={isHovered}
        handleAddToCart={(e) => handleAddToCart(e, quantity)}
        addedToCart={addedToCart}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <ProductDetails
        product={product}
        handleAddToCart={(e) => handleAddToCart(e, quantity)}
        addedToCart={addedToCart}
      />
      <MobileQuickAddButton
        isHovered={isHovered}
        addedToCart={addedToCart}
        handleAddToCart={(e) => handleAddToCart(e, quantity)}
      />
    </motion.div>
  );
}
