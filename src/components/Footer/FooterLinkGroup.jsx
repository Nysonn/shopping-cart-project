import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-lg text-white mb-5 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-gradient-to-r from-green-400 to-yellow-400"></span>
      </h4>
      <ul className="space-y-3 mt-5">
        {links.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              to={link.url}
              className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors gap-1.5"
            >
              <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
