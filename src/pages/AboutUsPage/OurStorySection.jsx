// OurStorySection.jsx
import React from "react";
import { motion } from "framer-motion";
import welcomeImg from "../../assets/mix-fruits.jpg";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function OurStorySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-lg -z-10"></div>
              <img 
                src={welcomeImg} 
                alt="Fresh fruits and vegetables" 
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-lg -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:w-1/2">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">
              Our Story
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Passion for Fresh Food</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Fresh Harvest was founded in 2018 with a simple mission: to bring the freshest, most nutritious produce directly from local farms to your table. What began as a small market stall has grown into a thriving business, yet our core values remain unchanged.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              We believe that everyone deserves access to fresh, healthy food. That’s why we partner with local farmers who practice sustainable agriculture, ensuring our products are good for you and for the environment.
            </p>
            
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={containerVariants}>
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  {/* Icon for local sourcing */}
                  <span role="img" aria-label="seedling">🌱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Local Sourcing</h3>
                  <p className="text-gray-600 text-sm">Supporting local farms and communities</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <span role="img" aria-label="leaf">🍃</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Organic Practices</h3>
                  <p className="text-gray-600 text-sm">Chemical-free growing methods</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <span role="img" aria-label="recycle">♻️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Sustainable</h3>
                  <p className="text-gray-600 text-sm">Eco-friendly packaging and processes</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <span role="img" aria-label="community">🤝</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Community Focus</h3>
                  <p className="text-gray-600 text-sm">Giving back to our local community</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
