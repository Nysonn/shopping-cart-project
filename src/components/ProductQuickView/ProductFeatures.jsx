// ProductFeatures.jsx
import React from "react";
import { FaTruck, FaShieldAlt, FaExchangeAlt } from "react-icons/fa";

export default function ProductFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
      <div className="flex items-center gap-2">
        <FaTruck className="text-green-500" />
        <span className="text-sm text-gray-600">Free delivery</span>
      </div>
      <div className="flex items-center gap-2">
        <FaShieldAlt className="text-green-500" />
        <span className="text-sm text-gray-600">Quality guaranteed</span>
      </div>
      <div className="flex items-center gap-2">
        <FaExchangeAlt className="text-green-500" />
        <span className="text-sm text-gray-600">Easy returns</span>
      </div>
    </div>
  );
}
