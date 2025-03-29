// OurImpactSection.jsx
import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export default function OurImpactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">
            Making A Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-gray-600">
            We’re proud of the positive change we’re creating in our community and environment.
          </p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div variants={itemVariants} className="p-6">
            <p className="text-4xl font-bold text-green-600 mb-2">50+</p>
            <p className="text-xl font-medium text-gray-800 mb-3">Local Farmers</p>
            <p className="text-gray-600">Partnered with our network</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="p-6">
            <p className="text-4xl font-bold text-green-600 mb-2">10,000+</p>
            <p className="text-xl font-medium text-gray-800 mb-3">Happy Customers</p>
            <p className="text-gray-600">Enjoying fresh produce weekly</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="p-6">
            <p className="text-4xl font-bold text-green-600 mb-2">30%</p>
            <p className="text-xl font-medium text-gray-800 mb-3">Waste Reduction</p>
            <p className="text-gray-600">In our sustainable supply chain</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
