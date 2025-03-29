// CTASection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission for Fresh, Sustainable Food
          </h2>
          <p className="text-green-100 mb-8">
            Experience the difference of truly fresh produce delivered right to your doorstep.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-yellow-50 transition-colors shadow-lg"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
