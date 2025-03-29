// CategoryPills.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CategoryPills({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <section className="py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
