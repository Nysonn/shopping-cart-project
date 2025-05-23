import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function CompanyInfo() {
  return (
    <div className="lg:col-span-2">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white mb-5">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
          <FaLeaf className="text-white" />
        </div>
        <span>
          Fresh <span className="text-green-400">Harvest</span>
        </span>
      </Link>
      <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
        We're dedicated to bringing you the freshest, highest-quality produce straight from local farms to your table. Supporting sustainable agriculture and healthy communities since 2010.
      </p>
      <div className="space-y-4 text-gray-400">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <FaMapMarkerAlt className="text-green-400" />
          </div>
          <span>
            123 Harvest Lane, Farmington<br />Kampala, Uganda
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
            <FaPhoneAlt className="text-green-400" />
          </div>
          <span>+256 123 456 789</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
            <FaEnvelope className="text-green-400" />
          </div>
          <span>hello@freshharvest.com</span>
        </div>
      </div>
    </div>
  );
}
