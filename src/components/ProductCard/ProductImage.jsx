// ProductImage.jsx
import React, { useState } from "react";
import ProductBadges from "./ProductBadges";
import WishlistButton from "./WishlistButton";
import QuickAddOverlay from "./QuickAddOverlay";

export default function ProductImage({ product, isHovered, handleAddToCart, addedToCart }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative aspect-square overflow-hidden">
      {/* Badges */}
      <ProductBadges product={product} />
      {/* Wishlist Button */}
      <WishlistButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay with quick add button */}
      <QuickAddOverlay
        isHovered={isHovered}
        handleAddToCart={handleAddToCart}
        addedToCart={addedToCart}
      />
    </div>
  );
}
