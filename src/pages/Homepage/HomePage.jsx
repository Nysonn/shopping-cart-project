import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaTruck, FaBox, FaShieldAlt, FaAppleAlt, FaCarrot, FaSeedling, FaCalendarAlt } from "react-icons/fa";

// Imported components
import PromotionBanner from "../../components/PromotionBanner/PromotionBanner";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import FeaturedProductsSection from "./FeaturedProductsSection";
import CategoriesSection from "./CategoriesSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";

// Import images for hero slides
import heroImg from "../../assets/mix-fruits.jpg";
import berryImg from "../../assets/berry-pic.jpg";
import appleImg from "../../assets/grapes-pic.jpg";

// Product images
import carrotImg from '../../assets/carrot.jpg';
import bananaImg from '../../assets/banana-pic.jpg';
import grapesImg from '../../assets/grapes-pic.jpg';
import sweetMelonImg from '../../assets/sweet-melon.jpg';
import orangesImg from '../../assets/oranges-pic.jpg';
import watermelonImg from '../../assets/watermelon.jpg';
import HerbsImg from '../../assets/cucumber.jpg';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPromotion, setShowPromotion] = useState(true);
  const [email, setEmail] = useState("");
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const navigate = useNavigate();

  // Refs for intersection observer (used for animations)
  const categoryRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const newsletterRef = useRef(null);

  // Hero slides data
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

  // Categories data with icons and images
  const categories = [
    { 
      id: 1, 
      name: "Fresh Fruits", 
      image: "../../assets/sweet-melon.jpg", 
      link: "/products/fruits", 
      icon: <FaAppleAlt className="text-3xl text-green-600" /> 
    },
    { 
      id: 2, 
      name: "Vegetables", 
      image: "../../assets/carrot.jpg", 
      link: "/products/vegetables", 
      icon: <FaCarrot className="text-3xl text-green-600" /> 
    },
    { 
      id: 3, 
      name: "Organic Herbs", 
      image: "../../assets/cucumber.jpg", 
      link: "/products/herbs", 
      icon: <FaSeedling className="text-3xl text-green-600" /> 
    },
    { 
      id: 4, 
      name: "Seasonal Products", 
      image: "../../assets/grapes-pic.jpg", 
      link: "/products/seasonal", 
      icon: <FaCalendarAlt className="text-3xl text-green-600" /> 
    },
  ];

  // Testimonials data
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

  // All products array
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

  // Select a few random products for featured products
  const getRandomProducts = (count = 3) => {
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Helper functions for categories
  const getCategoryFeatures = (categoryId) => {
    switch (categoryId) {
      case 1:
        return ["Seasonal Selection", "Local Varieties", "Organic Options"];
      case 2:
        return ["Farm Fresh", "Pesticide-Free", "Local Harvest"];
      case 3:
        return ["Aromatic", "Culinary Uses", "Medicinal Properties"];
      case 4:
        return ["Limited Time", "Premium Quality", "Special Discounts"];
      default:
        return [];
    }
  };

  const getCategoryItemCount = (categoryId) => {
    const counts = {
      1: 24,
      2: 18,
      3: 12,
      4: 8,
    };
    return counts[categoryId] || 0;
  };

  // Features data
  const features = [
    {
      icon: <FaLeaf className="text-3xl text-green-600" />,
      title: "100% Organic",
      description:
        "All our products are certified organic, grown without synthetic pesticides or fertilizers.",
      benefits: [
        "Better for your health",
        "Environmental sustainability",
        "Superior taste and nutrition"
      ]
    },
    {
      icon: <FaTruck className="text-3xl text-green-600" />,
      title: "Fast Delivery",
      description:
        "Get your fresh produce delivered to your doorstep within 24 hours of harvesting.",
      benefits: [
        "Maximum freshness guaranteed",
        "Convenient doorstep delivery",
        "Flexible delivery scheduling"
      ]
    },
    {
      icon: <FaBox className="text-3xl text-green-600" />,
      title: "Eco Packaging",
      description:
        "Our products come in sustainable, biodegradable packaging to reduce environmental impact.",
      benefits: [
        "Compostable materials",
        "Reduced plastic waste",
        "Recyclable containers"
      ]
    },
    {
      icon: <FaShieldAlt className="text-3xl text-green-600" />,
      title: "Quality Guarantee",
      description:
        "Not satisfied? We offer a 100% money-back guarantee on all our products.",
      benefits: [
        "Rigorous quality control",
        "Freshness commitment",
        "Hassle-free returns"
      ]
    }
  ];

  // Stats data
  const stats = [
    { value: "10k", unit: "+", label: "Happy Customers" },
    { value: "500", unit: "+", label: "Products Available" },
    { value: "50", unit: "+", label: "Local Farmers" },
    { value: "98", unit: "%", label: "Satisfaction Rate" }
  ];

  useEffect(() => {
    setIsLoaded(true);
    setFeaturedProducts(getRandomProducts());
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-0"
    >
      {/* 1. Promotion Banner */}
      <PromotionBanner showPromotion={showPromotion} />

      {/* 2. Hero Carousel */}
      <HeroCarousel heroSlides={heroSlides} showPromotion={showPromotion} />

      {/* 3. Featured Products Section */}
      <FeaturedProductsSection featuredProducts={featuredProducts} />

      {/* 4. Categories Section */}
      <CategoriesSection 
        categories={categories} 
        getCategoryFeatures={getCategoryFeatures} 
        getCategoryItemCount={getCategoryItemCount} 
        categoryRef={categoryRef}
      />

      {/* 5. Features Section */}
      <FeaturesSection 
        features={features} 
        stats={stats} 
        featuresRef={featuresRef}
      />

      {/* 6. Testimonials Section */}
      <TestimonialsSection 
        testimonials={testimonials} 
        testimonialsRef={testimonialsRef}
      />

      {/* You can also include a Newsletter Section if needed using newsletterRef */}
    </motion.div>
  );
}
