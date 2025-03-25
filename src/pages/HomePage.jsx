import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WelcomeSection from "../components/WelcomeSection";
import ProductGrid from "../components/ProductGrid";
import { FaArrowDown, FaLeaf, FaTruck, FaHandshake } from "react-icons/fa";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Welcome */}
      <WelcomeSection />
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <FaArrowDown className="animate-bounce text-2xl" />
      </motion.div>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FaLeaf className="text-4xl text-green-500" />,
                title: "100% Organic",
                description: "All our products are certified organic, ensuring the highest quality and nutritional value."
              },
              {
                icon: <FaTruck className="text-4xl text-green-500" />,
                title: "Fast Delivery",
                description: "Same-day delivery for orders placed before 2 PM, ensuring maximum freshness."
              },
              {
                icon: <FaHandshake className="text-4xl text-green-500" />,
                title: "Local Partners",
                description: "Supporting local farmers and sustainable agriculture in our community."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Featured Products</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover our handpicked selection of fresh, seasonal produce delivered straight from local farms to your table.
            </p>
            <ProductGrid />
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400/10 to-green-300/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for weekly updates on fresh arrivals, special offers, and seasonal recipes.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow max-w-md"
                aria-label="Email subscription"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 