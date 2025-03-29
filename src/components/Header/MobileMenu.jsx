import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLeaf, FaTimes, FaUser, FaHeart, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function MobileMenu({ toggleMenu }) {
  const mobileLinkStyle = "flex items-center w-full py-4 px-6 text-lg text-white font-medium hover:bg-green-500/40 transition-all duration-200 rounded-md";
  const mobileActiveLinkStyle = `${mobileLinkStyle} bg-green-500/60 font-bold shadow-sm`;

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "Contact", to: "/contact" },
    { name: "About", to: "/about" }
  ];

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        onClick={toggleMenu}
        aria-hidden="true"
      />
      
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-green-700 to-green-800 shadow-xl z-50 lg:hidden overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex items-center justify-between p-5 border-b border-green-500/30">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white"
            onClick={toggleMenu}
            aria-label="Fresh Harvest Home"
          >
            <FaLeaf className="text-xl text-yellow-300" />
            <span className="font-bold">Fresh Harvest</span>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="p-2 text-white hover:text-yellow-300 transition-colors rounded-full"
            aria-label="Close mobile menu"
          >
            <FaTimes className="text-xl" />
          </motion.button>
        </div>
        
        <div className="p-4 border-b border-green-500/30">
          <h2 className="text-yellow-300 font-bold text-lg mb-3 px-2">Menu</h2>
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.to}
                    className={({ isActive }) => isActive ? mobileActiveLinkStyle : mobileLinkStyle}
                    onClick={toggleMenu}
                  >
                    <span className="text-xl">{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="p-4 border-b border-green-500/30">
          <h2 className="text-yellow-300 font-bold text-lg mb-3 px-2">Account</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className={mobileLinkStyle}>
                <FaUser className="mr-3" />
                <span>My Account</span>
              </a>
            </li>
            <li>
              <a href="#" className={mobileLinkStyle}>
                <FaHeart className="mr-3" />
                <span>Wishlist</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div className="p-4">
          <h2 className="text-yellow-300 font-bold text-lg mb-3 px-2">Connect</h2>
          <div className="flex gap-4 px-2">
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
