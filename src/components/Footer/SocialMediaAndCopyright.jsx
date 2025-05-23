import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaHeart } from "react-icons/fa";

export default function SocialMediaAndCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all"
            aria-label="Facebook"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all"
            aria-label="Twitter"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all"
            aria-label="Instagram"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all"
            aria-label="Pinterest"
          >
            <FaPinterest />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all"
            aria-label="YouTube"
          >
            <FaYoutube />
          </motion.a>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <span>© {currentYear} Fresh Harvest. All rights reserved.</span>
          <span className="px-2">|</span>
          <span className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> in Uganda
          </span>
        </div>
      </div>
    </div>
  );
}
