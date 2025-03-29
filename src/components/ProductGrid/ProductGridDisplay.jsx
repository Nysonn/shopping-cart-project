// ProductGridDisplay.jsx
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGridDisplay({ products }) {
  return (
    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}
