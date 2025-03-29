// ProductQuickView.jsx
import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../../context/CartContext";
import QuickViewImageGallery from "./QuickViewImageGallery";
import QuickViewDetails from "./QuickViewDetails";

export default function ProductQuickView({ product, closeQuickView }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem, state } = useContext(CartContext);

  // Check if product is already in cart
  const existingCartItem = state.cart.find(item => item.product.id === product.id);
  const isInCart = Boolean(existingCartItem);

  // Mock additional images (in real app, these come from product data)
  const productImages = [product.image];

  // Keyboard event listener for accessibility and body scroll lock
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeQuickView();
      }
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [closeQuickView]);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeQuickView}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-gray-700 hover:bg-gray-100 transition-colors shadow-md"
            onClick={closeQuickView}
            aria-label="Close quick view"
          >
            {/* Using an icon such as FaTimes */}
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <QuickViewImageGallery
              product={product}
              productImages={productImages}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            <QuickViewDetails
              product={product}
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              handleAddToCart={handleAddToCart}
              isInCart={isInCart}
              isWishlisted={isWishlisted}
              toggleWishlist={toggleWishlist}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
