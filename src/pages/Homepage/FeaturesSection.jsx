import React from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FeaturesSection({ features, stats, featuresRef }) {
  const navigate = useNavigate();
  const featuresInView = useInView(featuresRef, { once: true, threshold: 0.2 });

  return (
    <section ref={featuresRef} className="py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute -left-24 -top-24 w-64 h-64 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-3">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">The Fresh Harvest Difference</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're committed to providing the best organic produce with exceptional service.
            Here's what sets us apart from the rest.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8"
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ y: 30, opacity: 0 }}
              animate={featuresInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover="hover"
            >
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 h-full transform hover:-translate-y-1">
                <div className="relative mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-green-500 rounded-2xl flex items-center justify-center rotate-3"
                    variants={{
                      hover: { rotate: 0, scale: 1.05 }
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-70"
                    variants={{
                      hover: { scale: 1.5, opacity: 1 }
                    }}
                  ></motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-5">{feature.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.div 
                  className="flex items-center text-green-600 text-sm font-medium cursor-pointer mt-auto"
                  variants={{
                    hover: { x: 5 }
                  }}
                >
                  Learn more <FaArrowRight className="ml-2 text-xs" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats Bar */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl shadow-lg p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1 flex items-center justify-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">
                  {stat.value}
                </span>
                <span className="text-green-500 ml-1">{stat.unit}</span>
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => navigate('/about')}
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-green-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn About Our Commitment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
