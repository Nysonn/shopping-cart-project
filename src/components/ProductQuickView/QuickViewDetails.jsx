// QuickViewDetails.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaPlus, FaMinus, FaHeart, FaShare, FaShoppingCart, FaTruck, FaShieldAlt, FaExchangeAlt, FaCheck } from "react-icons/fa";
import QuantitySelector from "./QuantitySelector";
import RatingsDisplay from "./Ratings";
import ProductFeatures from "./ProductFeatures";

export default function QuickViewDetails({
  product,
  quantity,
  incrementQuantity,
  decrementQuantity,
  handleAddToCart,
  isInCart,
  isWishlisted,
  toggleWishlist,
}) {
  // Calculate discounted price (example logic)
  const basePrice = parseInt(product.price.replace("UGX ", "").replace(",", ""));
  const discountedPrice = Math.round(basePrice * 0.8);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>

      {/* Ratings */}
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= 4 ? (
            <FaStar key={star} className="text-amber-400" />
          ) : (
            <FaRegStar key={star} className="text-amber-400" />
          )
        )}
        <span className="text-sm text-gray-500 ml-2">(24 reviews)</span>
      </div>

      {/* Price */}
      <div className="mb-4">
        <span className="text-xl font-bold text-green-600">
          {product.price}
        </span>
        <span className="text-sm text-gray-500 ml-2 line-through">
          UGX {(basePrice * 1.2).toLocaleString()}
        </span>
        <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
          Save 20%
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        Our {product.name.toLowerCase()} are freshly harvested from local organic farms.
        Packed with essential nutrients and bursting with flavor, they're perfect for healthy meals.
      </p>

      {/* Quantity Selector & Action Buttons */}
      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex items-center gap-4">
          <QuantitySelector
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          {/* Wishlist Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleWishlist}
            className={`p-3 rounded-lg flex items-center justify-center ${
              isWishlisted
                ? "bg-red-50 text-red-500 border border-red-100"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <FaHeart className={isWishlisted ? "text-red-500" : ""} />
          </motion.button>

          {/* Share Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            aria-label="Share product"
          >
            <FaShare />
          </motion.button>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 text-white font-medium ${
            isInCart ? "bg-green-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          <FaShoppingCart />
          <span>{isInCart ? "Added to Cart" : "Add to Cart"}</span>
        </motion.button>
      </div>

      {/* Product Features */}
      <ProductFeatures />
    </div>
  );
}
