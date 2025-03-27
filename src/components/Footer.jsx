import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLeaf, FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

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
    <footer className="bg-gray-50 pt-12 text-gray-600 font-sans">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-12 mb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
                <p className="text-green-100">Get the latest updates, offers and special announcements.</p>
              </div>
              <div className="w-full max-w-md">
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-medium px-6 py-3 rounded-r-lg flex items-center"
                  >
                    Subscribe <FaArrowRight className="ml-2" />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-green-700 mb-4">
              <FaLeaf className="text-2xl" />
              <span>Fresh <span className="text-green-500">Harvest</span></span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              We're dedicated to bringing you the freshest, highest-quality produce straight from local farms to your table. Supporting sustainable agriculture and healthy communities since 2010.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-500 mt-1" />
                <span>123 Harvest Lane, Farmington<br />Kampala, Uganda</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                <span>+256 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-500" />
                <span>hello@freshharvest.com</span>
              </div>
            </div>
          </div>
          
          {/* Footer Link Sections */}
          {footerLinkGroups.map((group, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg text-gray-800 mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex} 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      to={link.url}
                      className="inline-block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Pinterest"
              >
                <FaPinterest className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </motion.a>
            </div>
            <div className="text-gray-500 text-sm">
              © {currentYear} Fresh Harvest. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}