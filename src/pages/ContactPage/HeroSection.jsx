import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-100 rounded-full blur-[120px] opacity-30"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-4 border border-green-200"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            We're Here To Help
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Let's Start a 
            <span className="relative inline-block mx-3">
              Conversation
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 124 12" fill="none">
                <path d="M1 8.5C20.6667 3.33333 59.7 -4.49999 123.5 8.5" stroke="#16a34a" strokeWidth="2"/>
              </svg>
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Have questions about our products or services? We're here to help and answer any questions you might have.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
