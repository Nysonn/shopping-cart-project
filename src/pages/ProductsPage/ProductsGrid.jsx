// ProductsGrid.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../../components/ProductCard/ProductCard";
import { FaSearch } from "react-icons/fa";

export default function ProductsGrid({ isLoading, filteredProducts, openQuickView, resetFilters }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {isLoading ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <motion.div
              key={n}
              variants={itemVariants}
              className="animate-pulse"
            >
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  layout
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={() => openQuickView(product)}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <div className="bg-white p-8 rounded-xl shadow-sm max-w-md mx-auto">
                  <FaSearch className="text-4xl text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    No Products Found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any products matching your current filters or search terms.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
