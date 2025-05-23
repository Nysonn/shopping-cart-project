// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";
import berryImg from "../../assets/berry-pic.jpg";

export default function HeroSection({ searchQuery, setSearchQuery }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${berryImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/90 backdrop-blur-sm"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20">
              <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
              Fresh from the Farm
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block">Discover Nature's</span>
            <span className="relative inline-block">
              <span className="relative z-10">Best Products</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full opacity-70 z-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
              ></motion.span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-white/90 text-lg md:text-xl text-center max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Browse our selection of fresh, organic fruits and vegetables. All our
            products are sourced from local farmers and delivered to you at their
            peak freshness.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="relative max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search for fresh products..."
              className="w-full pl-12 pr-16 py-4 rounded-full bg-white shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-700 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery("")}
              >
                <FaTimes />
              </button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Search
            </motion.button>
          </motion.div>

          {/* Quick Category Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <span className="text-white/80 text-sm">Popular:</span>
            {["Apples", "Bananas", "Berries", "Vegetables"].map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ y: -2, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 rounded-full text-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-colors"
                onClick={() => setSearchQuery(item)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill="#f9fafb"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,64C160,64,320,64,480,74.7C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
