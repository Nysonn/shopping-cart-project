import React from "react";
import { FaLock, FaLeaf, FaCreditCard } from "react-icons/fa";

export default function BadgesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-gray-700/50 text-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
          <FaLock className="text-green-400 text-xl" />
        </div>
        <h5 className="font-semibold text-white">Secure Payment</h5>
        <p className="text-gray-400 text-sm mt-1">All transactions are processed securely</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
          <FaLeaf className="text-green-400 text-xl" />
        </div>
        <h5 className="font-semibold text-white">100% Organic</h5>
        <p className="text-gray-400 text-sm mt-1">Certified organic produce, grown locally</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
          <FaCreditCard className="text-green-400 text-xl" />
        </div>
        <h5 className="font-semibold text-white">Flexible Payment</h5>
        <p className="text-gray-400 text-sm mt-1">Multiple payment options for your convenience</p>
      </div>
    </div>
  );
}
