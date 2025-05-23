import React from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function FAQSection() {
  const faqs = [
    { 
      question: "What is your delivery area?", 
      answer: "We currently deliver to all areas within Kampala and neighboring districts. Enter your address at checkout to confirm if delivery is available in your area." 
    },
    { 
      question: "How do I track my order?", 
      answer: "Once your order is confirmed, you'll receive a tracking link via email and SMS that allows you to follow your delivery in real-time." 
    },
    { 
      question: "What happens if I'm not satisfied with the product quality?", 
      answer: "We have a 100% satisfaction guarantee. If you're not happy with any product, please contact us within 24 hours of delivery and we'll replace it or issue a refund." 
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants} 
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Got more questions? We're here to help! Check our most common questions or contact us directly.
          </p>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
