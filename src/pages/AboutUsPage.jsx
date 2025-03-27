import React from "react";
import { motion } from "framer-motion";
import welcomeImg from '../assets/mix-fruits.jpg';
import { FaLeaf, FaRecycle, FaHandsHelping, FaSeedling, FaUserFriends, FaChartLine, FaGlobe } from "react-icons/fa";

export default function AboutUsPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Team members data
  const teamMembers = [
    { name: "Sarah Mugisha", role: "Founder & CEO", quote: "Bringing fresh food to every table is our mission." },
    { name: "Daniel Okello", role: "Head of Operations", quote: "Quality and consistency are our top priorities." },
    { name: "Rebecca Aceng", role: "Chief Sourcing Officer", quote: "We partner with the best local farmers." },
    { name: "Joseph Mukasa", role: "Customer Relations Manager", quote: "Your satisfaction is our success." }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">Our Journey</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Fresh Harvest</h1>
            <p className="text-gray-600 text-lg mb-8">
              Learn more about our mission, values, and the people behind our products.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              variants={itemVariants}
              className="md:w-1/2"
            >
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
            
            <motion.div 
              variants={itemVariants}
              className="md:w-1/2"
            >
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">Our Story</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Passion for Fresh Food</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Fresh Harvest was founded in 2018 with a simple mission: to bring the freshest, most nutritious produce directly from local farms to your table. 
                What began as a small market stall has grown into a thriving business, but our core values remain unchanged.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                We believe that everyone deserves access to fresh, healthy food. That's why we partner with local farmers who practice sustainable agriculture, 
                ensuring that our products are not only good for you but also good for the environment.
              </p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <FaSeedling />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Local Sourcing</h3>
                    <p className="text-gray-600 text-sm">Supporting local farms and communities</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <FaLeaf />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Organic Practices</h3>
                    <p className="text-gray-600 text-sm">Chemical-free growing methods</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <FaRecycle />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Sustainable</h3>
                    <p className="text-gray-600 text-sm">Eco-friendly packaging and processes</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <FaHandsHelping />
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

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do, from sourcing to delivery.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <FaLeaf className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Freshness</h3>
              <p className="text-gray-600">
                We guarantee that our produce reaches you at peak freshness, often harvested within 24 hours of delivery.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <FaGlobe className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We support eco-friendly farming practices and work to reduce food waste throughout our supply chain.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <FaUserFriends className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                By supporting local farmers, we help build stronger communities and economies in the regions we serve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">Making A Difference</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-gray-600">
              We're proud of the positive change we're creating in our community and environment.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div 
              variants={itemVariants}
              className="p-6"
            >
              <p className="text-4xl font-bold text-green-600 mb-2">50+</p>
              <p className="text-xl font-medium text-gray-800 mb-3">Local Farmers</p>
              <p className="text-gray-600">Partnered with our network</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="p-6"
            >
              <p className="text-4xl font-bold text-green-600 mb-2">10,000+</p>
              <p className="text-xl font-medium text-gray-800 mb-3">Happy Customers</p>
              <p className="text-gray-600">Enjoying fresh produce weekly</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="p-6"
            >
              <p className="text-4xl font-bold text-green-600 mb-2">30%</p>
              <p className="text-xl font-medium text-gray-800 mb-3">Waste Reduction</p>
              <p className="text-gray-600">In our sustainable supply chain</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">The People Behind Fresh Harvest</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our passionate team is dedicated to bringing you the best quality produce.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {teamMembers.map((person, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-green-200 to-green-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">{person.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{person.name}</h3>
                <p className="text-green-600 font-medium mb-3">{person.role}</p>
                <p className="text-gray-600 italic text-sm">"{person.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission for Fresh, Sustainable Food</h2>
            <p className="text-green-100 mb-8">
              Experience the difference of truly fresh produce delivered right to your doorstep.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-yellow-50 transition-colors shadow-lg"
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
} 