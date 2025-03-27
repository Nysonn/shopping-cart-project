import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaTruck, FaBox, FaShieldAlt, FaStar, FaAppleAlt, FaCarrot, FaSeedling, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

import PromotionBanner from "../components/PromotionBanner";
import HeroCarousel from "../components/HeroCarousel";
import ProductGrid from "../components/ProductGrid";
import ProductCard from "../components/ProductCard";

// Import images for the hero slides
import heroImg from "../assets/mix-fruits.jpg";
import berryImg from "../assets/berry-pic.jpg";
import appleImg from "../assets/grapes-pic.jpg";

// Import these products from ProductGrid
import carrotImg from '../assets/carrot.jpg';
import bananaImg from '../assets/banana-pic.jpg';
import grapesImg from '../assets/grapes-pic.jpg';
import sweetMelonImg from '../assets/sweet-melon.jpg';
import orangesImg from '../assets/oranges-pic.jpg';
import watermelonImg from '../assets/watermelon.jpg';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPromotion, setShowPromotion] = useState(true);
  const [email, setEmail] = useState("");

  const categoryRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const newsletterRef = useRef(null);
  
  const categoryInView = useInView(categoryRef, { once: true, threshold: 0.2 });
  const featuresInView = useInView(featuresRef, { once: true, threshold: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.2 });
  const newsletterInView = useInView(newsletterRef, { once: true, threshold: 0.2 });

  const navigate = useNavigate();
  const controls = useAnimation();

  // Example hero slides
  const heroSlides = [
    {
      title: "Fresh Organic Produce",
      subtitle: "Farm to Table Quality",
      description:
        "Experience the freshest, locally-sourced organic fruits and vegetables delivered straight to your door.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      image: heroImg,
    },
    {
      title: "Summer Fruits Sale",
      subtitle: "Up to a 30% Discount",
      description:
        "Enjoy our fresh, juicy seasonal fruits at special prices. Perfect for summer refreshments!",
      buttonText: "View Offers",
      buttonLink: "/products",
      image: berryImg,
    },
    {
      title: "Eat Healthy, Live Better",
      subtitle: "Premium Organic Selection",
      description:
        "Our organic produce is carefully selected to ensure you get the best quality for your health and well-being.",
      buttonText: "Learn More",
      buttonLink: "/about",
      image: appleImg,
    },
  ];

  // Featured categories with icons added
  const categories = [
    { 
      id: 1, 
      name: "Fresh Fruits", 
      image: "../assets/sweet-melon.jpg", 
      link: "/products/fruits", 
      icon: <FaAppleAlt className="text-3xl text-green-600" /> 
    },
    { 
      id: 2, 
      name: "Vegetables", 
      image: "../assets/carrot.jpg", 
      link: "/products/vegetables", 
      icon: <FaCarrot className="text-3xl text-green-600" /> 
    },
    { 
      id: 3, 
      name: "Organic Herbs", 
      image: "/herbs.jpg", 
      link: "/products/herbs", 
      icon: <FaSeedling className="text-3xl text-green-600" /> 
    },
    { 
      id: 4, 
      name: "Seasonal Products", 
      image: "/seasonal.jpg", 
      link: "/products/seasonal", 
      icon: <FaCalendarAlt className="text-3xl text-green-600" /> 
    },
  ];

  // Customer testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Health Coach",
      avatar: "/avatar1.jpg",
      text: "Fresh Harvest has transformed my meal prep routine. The quality of their organic produce is unmatched!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Home Chef",
      avatar: "/avatar2.jpg",
      text: "As someone who cooks daily, having access to these premium ingredients has elevated my dishes to restaurant quality.",
      rating: 5,
    },
    {
      id: 3,
      name: "Olivia Martinez",
      role: "Nutrition Expert",
      avatar: "/avatar3.jpg",
      text: "I recommend Fresh Harvest to all my clients. Their commitment to organic, sustainable farming practices is impressive.",
      rating: 4,
    },
  ];

  // Add this array of product data
  const allProducts = [
    { id: 1, name: "Organic Apples", category: "Fruit", price: "UGX 1,000", image: appleImg },
    { id: 2, name: "Fresh Carrots", category: "Vegetable", price: "UGX 2,000", image: carrotImg },
    { id: 3, name: "Organic Bananas", category: "Fruit", price: "UGX 4,000", image: bananaImg },
    { id: 4, name: "Mixed Berries", category: "Fruit", price: "UGX 3,000", image: berryImg },
    { id: 5, name: "Purple Grapes", category: "Fruit", price: "UGX 1,000", image: grapesImg },
    { id: 6, name: "Sweet Melon", category: "Fruit", price: "UGX 5,000", image: sweetMelonImg },
    { id: 7, name: "Juicy Oranges", category: "Fruit", price: "UGX 2,000", image: orangesImg },
    { id: 8, name: "Water Melon", category: "Fruit", price: "UGX 5,000", image: watermelonImg },
  ];
  
  // Add this function to select 3 random products
  const getRandomProducts = (count = 3) => {
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  // Add this state for featured products
  const [featuredProducts, setFeaturedProducts] = useState([]);
  
  // Update useEffect to include random product selection
  useEffect(() => {
    setIsLoaded(true);
    setFeaturedProducts(getRandomProducts());
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Implement newsletter subscription logic
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  // Add these helper functions inside the HomePage component
  const getCategoryFeatures = (categoryId) => {
    switch (categoryId) {
      case 1: // Fruits
        return ["Seasonal Selection", "Local Varieties", "Organic Options"];
      case 2: // Vegetables
        return ["Farm Fresh", "Pesticide-Free", "Local Harvest"];
      case 3: // Herbs
        return ["Aromatic", "Culinary Uses", "Medicinal Properties"];
      case 4: // Seasonal
        return ["Limited Time", "Premium Quality", "Special Discounts"];
      default:
        return [];
    }
  };

  const getCategoryItemCount = (categoryId) => {
    // Simulated item counts for each category
    const counts = {
      1: 24, // Fruits
      2: 18, // Vegetables
      3: 12, // Herbs
      4: 8,  // Seasonal
    };
    return counts[categoryId] || 0;
  };

  // Add these data arrays right after your other state definitions (around line 133, before the getCategoryFeatures function)

  // Features data with expanded content
  const features = [
    {
      icon: <FaLeaf className="text-2xl text-green-600" />,
      title: "100% Organic",
      description: "All our products are certified organic, grown without synthetic pesticides or fertilizers.",
      benefits: [
        "Better for your health",
        "Environmental sustainability",
        "Superior taste and nutrition"
      ]
    },
    {
      icon: <FaTruck className="text-2xl text-green-600" />,
      title: "Fast Delivery",
      description: "Get your fresh produce delivered to your doorstep within 24 hours of harvesting.",
      benefits: [
        "Maximum freshness guaranteed",
        "Convenient doorstep delivery",
        "Flexible delivery scheduling"
      ]
    },
    {
      icon: <FaBox className="text-2xl text-green-600" />,
      title: "Eco Packaging",
      description: "Our products come in sustainable, biodegradable packaging to reduce environmental impact.",
      benefits: [
        "Compostable materials",
        "Reduced plastic waste",
        "Recyclable containers"
      ]
    },
    {
      icon: <FaShieldAlt className="text-2xl text-green-600" />,
      title: "Quality Guarantee",
      description: "Not satisfied? We offer a 100% money-back guarantee on all our products.",
      benefits: [
        "Rigorous quality control",
        "Freshness commitment",
        "Hassle-free returns"
      ]
    }
  ];

  // Stats for the stats bar
  const stats = [
    { value: "10k", unit: "+", label: "Happy Customers" },
    { value: "500", unit: "+", label: "Products Available" },
    { value: "50", unit: "+", label: "Local Farmers" },
    { value: "98", unit: "%", label: "Satisfaction Rate" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-0"
    >
      {/* 1. Promotion Banner */}
      <PromotionBanner
        showPromotion={showPromotion}
      />

      {/* 2. Hero Carousel */}
      <HeroCarousel heroSlides={heroSlides} showPromotion={showPromotion} />

      {/* 3. Product Grid (renamed to Featured Products) */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium organic products. Fresh from the farm to your table.
          </p>
        </div>
        
        {/* Replace ProductGrid with random featured products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-green-400 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
          >
            View All Products
          </button>
        </div>
      </section>

      {/* 4. Featured Categories */}
      <section 
        ref={categoryRef}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-3">Browse Categories</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Category</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of fresh, organic products organized by category
            </p>
          </div>
          
          {/* Category Grid with Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="group cursor-pointer"
                onClick={() => navigate(category.link)}
                initial={{ opacity: 0, y: 20 }}
                animate={categoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/90 to-green-500/90 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                      <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center">
                        {category.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  {/* Category Features List */}
                  <ul className="mt-2 space-y-2 text-sm text-gray-600 flex-grow">
                    {getCategoryFeatures(category.id).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Bottom Stats */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-500">
                      {getCategoryItemCount(category.id)} Items
                    </span>
                    <motion.span 
                      className="text-green-600 text-sm font-medium flex items-center"
                      whileHover={{ x: 3 }}
                    >
                      Browse <FaArrowRight className="ml-1 text-xs" />
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Category Statistics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-xl p-6">
            {categories.map(category => (
              <div key={category.id} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800">{getCategoryItemCount(category.id)}+</div>
                  <div className="text-xs text-gray-500">{category.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Features/Benefits Section */}
      <section 
        ref={featuresRef}
        className="py-20 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white z-0"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute -left-24 -top-24 w-64 h-64 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-3">Why Choose Us</span>
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
                {/* Feature Card */}
                <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 h-full transform hover:-translate-y-1">
                  {/* Icon with accents */}
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
                    
                    {/* Accent dot */}
                    <motion.div 
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-70"
                      variants={{
                        hover: { scale: 1.5, opacity: 1 }
                      }}
                    ></motion.div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 mb-5">{feature.description}</p>
                  
                  {/* Benefits list */}
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-2">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn more link */}
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
          
          {/* Stats bar */}
          <motion.div 
            className="mt-20 bg-white rounded-2xl shadow-lg p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1 flex items-center justify-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">{stat.value}</span>
                  <span className="text-green-500 ml-1">{stat.unit}</span>
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          
          {/* CTA button */}
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

      {/* 6. Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-16 bg-green-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={testimonialsInView ? { opacity: 1 } : {}}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mb-4 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaStar className="text-xl text-yellow-500" />
                  </div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} mx-0.5`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic text-center">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
