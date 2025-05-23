import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide from "./Slide";
import PaginationDots from "./PaginationDots";
import CarouselNavigation from "./CarouselNavigation";

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

  // Function to change slides in a given direction.
  const changeSlide = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    } else if (direction === "prev") {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }
  };

  // Auto-rotate slides every 7 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide("next");
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, heroSlides.length]);

  return (
    <section
      className={`relative h-[70vh] min-h-[500px] bg-gray-100 overflow-hidden ${!showPromotion ? "mt-0" : ""}`}
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
          <Slide slide={heroSlides[currentSlide]} />
        </motion.div>
      </AnimatePresence>

      <PaginationDots
        slides={heroSlides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />

      <CarouselNavigation changeSlide={changeSlide} />
    </section>
  );
}
