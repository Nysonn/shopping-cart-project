import React from "react";
import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function ContactInfoCards() {
  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-xl" />, 
      title: "Our Location", 
      details: ["123 Harvest Street", "Kampala, Uganda"]
    },
    { 
      icon: <FaPhoneAlt className="text-xl" />, 
      title: "Phone Number", 
      details: ["+256 123 456 789", "+256 987 654 321"]
    },
    { 
      icon: <FaEnvelope className="text-xl" />, 
      title: "Email Address", 
      details: ["info@freshharvest.com", "support@freshharvest.com"]
    },
    { 
      icon: <FaClock className="text-xl" />, 
      title: "Business Hours", 
      details: ["Monday - Saturday: 8am - 6pm", "Sunday: Closed"]
    }
  ];
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <ContactCard key={index} icon={item.icon} title={item.title} details={item.details} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
