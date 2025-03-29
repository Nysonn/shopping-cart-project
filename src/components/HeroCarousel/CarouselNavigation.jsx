import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CarouselNavigation({ changeSlide }) {
  return (
    <>
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
    </>
  );
}
