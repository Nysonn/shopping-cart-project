// ProductDetails.jsx
import React from "react";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import Ratings from "./Ratings";

export default function ProductDetails({ product, handleAddToCart, addedToCart }) {
  const priceValue = parseInt(product.price.replace(/\D/g, ""));
  const hasDiscount = product.id % 3 === 0;
  const discountPercentage = hasDiscount ? 15 : 0;
  const originalPrice = hasDiscount ? Math.round(priceValue * (100 / (100 - discountPercentage))) : null;

  return (
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
        <Ratings rating={product.rating} reviews={product.reviews} />
      </div>
      {/* Price */}
      <div className="mt-auto pt-2 flex items-center">
        {hasDiscount && (
          <span className="text-gray-400 text-sm line-through mr-2">
            UGX {originalPrice.toLocaleString()}
          </span>
        )}
        <span className="font-bold text-lg text-gray-800">{product.price}</span>
      </div>
      {/* Desktop Add to Cart Button */}
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
  );
}
