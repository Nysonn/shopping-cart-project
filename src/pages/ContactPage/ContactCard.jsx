import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function ContactCard({ icon, title, details }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
      {details.map((detail, i) => (
        <p key={i} className="text-gray-600 leading-relaxed">{detail}</p>
      ))}
    </motion.div>
  );
}
