import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

export default function HeaderLogo({ toggleMenu }) {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 text-xl font-bold text-green-800 hover:text-green-900 transition-colors duration-200"
      aria-label="Fresh Harvest Home"
      onClick={toggleMenu}
    >
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
        <FaLeaf className="text-2xl" />
      </motion.div>
      <span>
        Fresh <span className="text-white drop-shadow-sm">Harvest</span>
      </span>
    </Link>
  );
}
