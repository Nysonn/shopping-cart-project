// ProductBadges.jsx
import React from "react";
import { FaLeaf } from "react-icons/fa";

export default function ProductBadges({ product }) {
  // Demo discount logic: every 3rd product has a discount.
  const priceValue = parseInt(product.price.replace(/\D/g, ""));
  const hasDiscount = product.id % 3 === 0;
  const discountPercentage = hasDiscount ? 15 : 0;
  const originalPrice = hasDiscount ? Math.round(priceValue * (100 / (100 - discountPercentage))) : null;

  return (
    <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
      {product.isOrganic && (
        <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium py-1 px-2 rounded-full border border-green-100">
          <FaLeaf className="text-green-500" /> Organic
        </span>
      )}
      {hasDiscount && (
        <span className="bg-red-50 text-red-700 text-xs font-bold py-1 px-2 rounded-full border border-red-100">
          -{discountPercentage}%
        </span>
      )}
    </div>
  );
}
