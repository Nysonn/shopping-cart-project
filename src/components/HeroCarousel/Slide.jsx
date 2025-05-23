import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Slide({ slide }) {
  return (
    <>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Slide Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 bg-green-600/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4"
            >
              {slide.subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-white/90 mb-8"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                to={slide.buttonLink}
                className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors shadow-xl"
              >
                {slide.buttonText}
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
