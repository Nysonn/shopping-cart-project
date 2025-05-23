import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function NewsletterSubscription() {
  return (
    <div className="bg-gradient-to-r from-green-700 to-yellow-600 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-xl">Join Our Newsletter</h3>
            <p className="text-white/80 text-sm">
              Get the latest updates on new products and upcoming sales
            </p>
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
  );
}
