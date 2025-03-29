// CategoryPills.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CategoryPills({ categories, activeCategory, setActiveCategory }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-4 flex flex-wrap gap-2"
    >
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-green-500 text-white"
              : "bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:bg-green-50"
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}
