import React from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CategoriesSection({ 
  categories, 
  getCategoryFeatures, 
  getCategoryItemCount, 
  categoryRef 
}) {
  const navigate = useNavigate();
  const categoryInView = useInView(categoryRef, { once: true, threshold: 0.2 });
  
  return (
    <section ref={categoryRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-3">
            Browse Categories
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Category</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of fresh, organic products organized by category.
          </p>
        </div>
        
        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group cursor-pointer"
              onClick={() => navigate(category.link)}
              initial={{ opacity: 0, y: 20 }}
              animate={categoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/90 to-green-500/90 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
                
                {/* Category Features List */}
                <ul className="mt-2 space-y-2 text-sm text-gray-600 flex-grow">
                  {getCategoryFeatures(category.id).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Bottom Stats */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-500">
                    {getCategoryItemCount(category.id)} Items
                  </span>
                  <motion.span 
                    className="text-green-600 text-sm font-medium flex items-center"
                    whileHover={{ x: 3 }}
                  >
                    Browse <FaArrowRight className="ml-1 text-xs" />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Category Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-xl p-6">
          {categories.map(category => (
            <div key={category.id} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                {category.icon}
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">
                  {getCategoryItemCount(category.id)}+
                </div>
                <div className="text-xs text-gray-500">{category.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
