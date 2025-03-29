// QuickViewImageGallery.jsx
import React from "react";
import { motion } from "framer-motion";

export default function QuickViewImageGallery({ product, productImages, selectedImage, setSelectedImage }) {
  return (
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
      {productImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {productImages.map((image, index) => (
            <button
              key={index}
              className={`w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                selectedImage === index ? "border-green-500" : "border-transparent"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
