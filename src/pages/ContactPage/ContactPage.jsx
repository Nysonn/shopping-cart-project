import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ContactInfoCards from "./ContactInfoCards";
import ContactInfoSidebar from "./ContactInfoSidebar";
import ContactForm from "./ContactForm";
import FAQSection from "./FAQSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function ContactPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-green-50/50 to-white pb-16"
    >
      <HeroSection />
      <ContactInfoCards />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl border border-gray-100">
              <div className="flex flex-col lg:flex-row">
                <ContactInfoSidebar />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </motion.div>
  );
}
