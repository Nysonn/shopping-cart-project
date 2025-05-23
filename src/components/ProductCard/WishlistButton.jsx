// WishlistButton.jsx
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function WishlistButton({ isFavorite, toggleFavorite }) {
  return (
    <button
      className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-300 ${
        isFavorite
          ? "bg-red-50 text-red-500"
          : "bg-white/70 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white"
      }`}
      onClick={toggleFavorite}
      aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isFavorite ? <FaHeart className="text-lg" /> : <FaRegHeart className="text-lg" />}
    </button>
  );
}
