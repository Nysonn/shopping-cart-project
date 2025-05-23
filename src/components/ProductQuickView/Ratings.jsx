// Ratings.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Ratings({ rating, reviews }) {
  return (
    <>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-xs ${
              i < Math.floor(rating)
                ? "text-yellow-400"
                : i < rating
                ? "text-gradient-star" // Special styling for half stars
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500">({reviews})</span>
    </>
  );
}
