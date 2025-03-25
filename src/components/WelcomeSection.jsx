import React from "react";
import { motion } from "framer-motion";
import welcomeImg from '../assets/mix-fruits.jpg';
import { FaLeaf, FaShippingFast, FaRegClock } from 'react-icons/fa';

export default function WelcomeSection() {
  const features = [
    {
      icon: <FaLeaf className="text-green-400" />,
      text: "100% Organic"
    },
    {
      icon: <FaShippingFast className="text-green-400" />,
      text: "Fast Delivery"
    },
    {
      icon: <FaRegClock className="text-green-400" />,
      text: "24/7 Service"
    }
  ];

  return (
    <section id="home" className="relative min-h-[60vh] md:min-h-[100vh] w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-green-800 opacity-95">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-12 md:pt-24 pb-6 md:pb-12 min-h-[60vh] md:min-h-[100vh] flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-3 md:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-3 py-1 md:px-4 md:py-2 bg-green-500/10 rounded-full"
            >
              <span className="text-green-300 text-xs md:text-base font-medium">
                Welcome to Fresh Harvest
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Fresh & Organic
              <span className="block mt-0.5 md:mt-2 text-green-400">
                Farm to Table Foods
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm md:text-lg text-gray-300 max-w-lg"
            >
              Discover nature's finest selection of organic produce, delivered fresh from local farms to your doorstep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-2 md:gap-4"
            >
              <a
                href="#products"
                className="px-4 md:px-8 py-2 md:py-4 bg-green-500 text-white rounded-lg
                         hover:bg-green-600 active:bg-green-700
                         transition-all duration-300 
                         text-sm md:text-base font-semibold
                         shadow-lg shadow-green-500/30
                         hover:shadow-xl hover:shadow-green-500/40
                         transform hover:-translate-y-0.5"
              >
                Shop Now
              </a>
              <a
                href="/about"
                className="px-4 md:px-8 py-2 md:py-4 bg-white/10 text-white rounded-lg
                         hover:bg-white/20 active:bg-white/30
                         transition-all duration-300
                         text-sm md:text-base font-semibold
                         backdrop-blur-sm"
              >
                Learn More
              </a>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-3 md:gap-6 mt-4 md:mt-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1 md:gap-2">
                  <span className="text-base md:text-xl">{feature.icon}</span>
                  <span className="text-white text-[10px] md:text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-3xl" />
              
              {/* Main Image */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30"
              >
                <img
                  src={welcomeImg}
                  alt="Fresh fruits and vegetables"
                  className="w-full h-full object-cover rounded-3xl"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-8 -right-8 bg-green-500 text-white p-4 rounded-2xl shadow-lg"
              >
                <span className="font-bold">100%</span>
                <br />
                Organic
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
