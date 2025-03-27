import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaLeaf, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaPinterest, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaArrowRight,
  FaHeart,
  FaCreditCard,
  FaLock
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinkGroups = [
    {
      title: "Shop",
      links: [
        { name: "All Products", url: "/products" },
        { name: "Fresh Fruits", url: "/products?category=fruits" },
        { name: "Vegetables", url: "/products?category=vegetables" },
        { name: "Organic Products", url: "/products?category=organic" },
        { name: "Special Offers", url: "/products?special=true" },
      ]
    },
    {
      title: "Customer Service",
      links: [
        { name: "My Account", url: "/account" },
        { name: "Track Your Order", url: "/orders/track" },
        { name: "Shipping Policy", url: "/shipping-policy" },
        { name: "Returns & Exchanges", url: "/returns" },
        { name: "FAQs", url: "/faqs" },
      ]
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", url: "/about" },
        { name: "Farm Locations", url: "/locations" },
        { name: "Sustainability", url: "/sustainability" },
        { name: "Careers", url: "/careers" },
        { name: "Contact Us", url: "/contact" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 font-sans">
      {/* Newsletter Subscription Bar */}
      <div className="bg-gradient-to-r from-green-700 to-yellow-600 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-xl">Join Our Newsletter</h3>
              <p className="text-white/80 text-sm">Get the latest updates on new products and upcoming sales</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60"
              />
              <button className="bg-white text-green-700 px-4 py-2 rounded-r-md font-medium hover:bg-green-50 transition-colors flex items-center gap-2">
                Subscribe <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-gray-700/50">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white mb-5">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <FaLeaf className="text-white" />
              </div>
              <span>Fresh <span className="text-green-400">Harvest</span></span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              We're dedicated to bringing you the freshest, highest-quality produce straight from local farms to your table. Supporting sustainable agriculture and healthy communities since 2010.
            </p>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-green-400" />
                </div>
                <span>123 Harvest Lane, Farmington<br />Kampala, Uganda</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-green-400" />
                </div>
                <span>+256 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-green-400" />
                </div>
                <span>hello@freshharvest.com</span>
              </div>
            </div>
          </div>
          
          {/* Footer Link Sections */}
          {footerLinkGroups.map((group, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg text-white mb-5 relative inline-block">
                {group.title}
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-gradient-to-r from-green-400 to-yellow-400"></span>
              </h4>
              <ul className="space-y-3 mt-5">
                {group.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex} 
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
          ))}
        </div>
        
        {/* Middle Section: Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-gray-700/50 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
              <FaLock className="text-green-400 text-xl" />
            </div>
            <h5 className="font-semibold text-white">Secure Payment</h5>
            <p className="text-gray-400 text-sm mt-1">All transactions are processed securely</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
              <FaLeaf className="text-green-400 text-xl" />
            </div>
            <h5 className="font-semibold text-white">100% Organic</h5>
            <p className="text-gray-400 text-sm mt-1">Certified organic produce, grown locally</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
              <FaCreditCard className="text-green-400 text-xl" />
            </div>
            <h5 className="font-semibold text-white">Flexible Payment</h5>
            <p className="text-gray-400 text-sm mt-1">Multiple payment options for your convenience</p>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
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
      </div>
    </footer>
  );
}