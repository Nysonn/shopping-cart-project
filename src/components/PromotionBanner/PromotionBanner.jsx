import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PromotionBanner({ showPromotion, setShowPromotion }) {
  return (
    <AnimatePresence>
      {showPromotion && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-green-600 text-white py-2 relative mt-0"
        >
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm md:text-base">
              <span className="font-bold">Free delivery</span> on all orders over UGX 20,000! Shop now and save.
            </p>
            <button
              onClick={() => setShowPromotion(false)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="Close promotion"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}