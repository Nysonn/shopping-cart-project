import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import WelcomeSection from "../components/WelcomeSection";
import ProductGrid from "../components/ProductGrid";
import { 
  FaArrowDown, FaLeaf, FaTruck, FaHandshake, FaShoppingBasket, 
  FaStar, FaRegStar, FaArrowRight, FaClock, FaPhoneAlt, FaFireAlt
} from "react-icons/fa";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });
  
  const controls = useAnimation();
  
  // Time-limited offer countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setIsLoaded(true);
    
    // Timer for limited-time offer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds < 0) {
          const newMinutes = prev.minutes - 1;
          if (newMinutes < 0) {
            const newHours = prev.hours - 1;
            return { hours: newHours, minutes: 59, seconds: 59 };
          }
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        return { ...prev, seconds: newSeconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Collect category tags from products (normally you'd get this from your API/data)
  const categories = [
    "All Products", "Fruits", "Vegetables", "Dairy", "Bakery", "Organic", "Sale Items"
  ];
  
  // Demo testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Loyal Customer",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      text: "Fresh Harvest has transformed my family's eating habits. The produce is always incredibly fresh and lasts much longer than what I'd buy at the supermarket.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Food Blogger",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "As someone who cooks daily, I can taste the difference in Fresh Harvest's organic produce. Their delivery is always on time and their customer service is exceptional.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Health Coach",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "I recommend Fresh Harvest to all my clients. The quality and variety of organic products have helped many achieve their health goals more easily.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen font-['Roboto',sans-serif] bg-white" ref={scrollRef}>
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-green-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Hero Section with Enhanced Welcome */}
      <WelcomeSection />

      {/* Trending Categories with Visual Navigation */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">Discover Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Browse By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of farm-fresh products, organized to help you find exactly what you need.
            </p>
          </motion.div>
          
          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === 0 
                    ? "bg-green-600 text-white shadow-md" 
                    : "bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:bg-green-50"
                }`}
              >
                {category}
              </motion.a>
            ))}
          </motion.div>
          
          {/* Visual category cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {name: "Fresh Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=80", color: "from-yellow-300/50"},
              {name: "Vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=500&q=80", color: "from-green-400/50"},
              {name: "Dairy Products", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=500&q=80", color: "from-blue-300/50"},
              {name: "Bakery Items", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80", color: "from-amber-300/50"}
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-36 md:h-52 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white font-semibold text-lg md:text-xl">{category.name}</h3>
                  <div className="flex items-center">
                    <span className="text-xs text-white/90 font-medium">Shop Now</span>
                    <FaArrowRight className="ml-1 text-xs text-white/90 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Limited-Time Offer Banner */}
      <section className="py-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <FaFireAlt className="text-yellow-300 text-2xl mr-3 animate-pulse" />
              <h3 className="text-xl md:text-2xl font-bold">Flash Sale: 15% OFF on All Organic Fruits</h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <FaClock className="text-yellow-200" />
                <div className="flex space-x-1">
                  <span className="bg-white text-amber-700 text-sm font-bold px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-white">:</span>
                  <span className="bg-white text-amber-700 text-sm font-bold px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-white">:</span>
                  <span className="bg-white text-amber-700 text-sm font-bold px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-700 px-4 py-2 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section - Enhanced */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The Fresh Harvest Difference</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to bringing you the finest quality organic produce while supporting sustainable farming practices and our local community.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              {
                icon: <FaLeaf className="text-4xl text-green-500" />,
                title: "100% Organic",
                description: "All our products are certified organic, ensuring the highest quality and nutritional value with no harmful pesticides or chemicals."
              },
              {
                icon: <FaTruck className="text-4xl text-green-500" />,
                title: "Fast Delivery",
                description: "Same-day delivery for orders placed before 2 PM, ensuring maximum freshness. Your produce goes from farm to table in record time."
              },
              {
                icon: <FaHandshake className="text-4xl text-green-500" />,
                title: "Local Partners",
                description: "Supporting local farmers and sustainable agriculture in our community. Every purchase helps support family farms and ethical practices."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section - Enhanced */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">Featured Collection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Best Sellers</h2>
              <p className="text-gray-600 max-w-xl">
              Discover our handpicked selection of fresh, seasonal produce delivered straight from local farms to your table.
            </p>
            </div>
            <motion.a
              href="/shop"
              whileHover={{ scale: 1.02 }}
              className="mt-4 md:mt-0 inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-300"
            >
              View All Products <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
          
          {/* Enhanced Product Grid with Quick Shop */}
            <ProductGrid />
          
          <div className="text-center mt-12">
            <motion.a
              href="/shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Browse All Products
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">Customer Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied customers about their experience with Fresh Harvest.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-green-100" />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    i < testimonial.rating ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-yellow-400" />
                    )
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
          </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="md:w-3/5">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">
                    Subscribe to our newsletter for weekly updates on fresh arrivals, special offers, seasonal recipes, and exclusive discounts.
            </p>
                  <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                      placeholder="Enter your email address"
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow"
                      aria-label="Email for newsletter"
                    />
                    <motion.button
                type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
              >
                Subscribe
                    </motion.button>
            </form>
                  <p className="text-gray-500 text-sm mt-3">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                  </p>
                </div>
                <div className="md:w-2/5 relative">
                  <div className="absolute -inset-4 bg-green-200/30 rounded-full blur-2xl" />
                  <img 
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80" 
                    alt="Organic vegetables" 
                    className="relative rounded-2xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Customer Support Floating Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors duration-300"
          aria-label="Customer Support"
        >
          <FaPhoneAlt />
        </motion.button>
      </motion.div>
    </div>
  );
} 