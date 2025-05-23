// OurValuesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaGlobe, FaUserFriends } from "react-icons/fa";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function OurValuesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">
            What We Stand For
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-gray-600">
            These principles guide everything we do, from sourcing to delivery.
          </p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-8 rounded-xl shadow transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
              <FaLeaf className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Freshness</h3>
            <p className="text-gray-600">
              We guarantee our produce reaches you at peak freshness.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-8 rounded-xl shadow transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
              <FaGlobe className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We support eco-friendly farming practices and reduce waste.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-8 rounded-xl shadow transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
              <FaUserFriends className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
            <p className="text-gray-600">
              We build strong bonds with local farmers and communities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
