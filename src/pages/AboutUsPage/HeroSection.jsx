// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">
            Our Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Fresh Harvest</h1>
          <p className="text-gray-600 text-lg mb-8">
            Learn more about our mission, values, and the people behind our products.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
