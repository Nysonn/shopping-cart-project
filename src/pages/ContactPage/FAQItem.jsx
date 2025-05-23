import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function FAQItem({ question, answer }) {
  return (
    <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm overflow-hidden">
      <details className="group">
        <summary className="flex justify-between items-center p-6 text-lg font-medium cursor-pointer marker:content-none">
          {question}
          <span className="transition group-open:rotate-180">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gray-400">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="px-6 pb-6 text-gray-600">{answer}</div>
      </details>
    </motion.div>
  );
}
