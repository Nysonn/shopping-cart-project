import React from "react";

export default function PaginationDots({ slides, currentSlide, setCurrentSlide }) {
  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSlide === index ? "bg-white" : "bg-white/40"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
