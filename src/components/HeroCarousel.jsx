import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * heroSlides prop: an array of objects with keys:
 *   - title
 *   - subtitle
 *   - description
 *   - buttonText
 *   - buttonLink
 *   - image
 *
 * showPromotion prop: a boolean that indicates whether
 * the promotion banner is currently shown (to conditionally
 * add margin at the top).
 */
export default function HeroCarousel({ heroSlides, showPromotion }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }
  };

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide("next");
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section
      className={`relative h-[70vh] min-h-[500px] bg-gray-100 overflow-hidden ${
        !showPromotion ? "mt-0" : ""
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 h-full w-full"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${heroSlides[currentSlide].image})`,
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
                  {heroSlides[currentSlide].subtitle}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg text-white/90 mb-8"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link
                    to={heroSlides[currentSlide].buttonLink}
                    className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors shadow-xl"
                  >
                    {heroSlides[currentSlide].buttonText}
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots/Pagination */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/40"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center"
        onClick={() => changeSlide("prev")}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center"
        onClick={() => changeSlide("next")}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>
    </section>
  );
}
