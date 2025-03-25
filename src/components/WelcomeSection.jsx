import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import welcomeImg from '../assets/mix-fruits.jpg';
import { FaLeaf, FaShippingFast, FaRegClock, FaArrowRight } from 'react-icons/fa';

export default function WelcomeSection() {
  const features = [
    {
      icon: <FaLeaf />,
      text: "100% Organic",
      description: "Farm-fresh produce without pesticides"
    },
    {
      icon: <FaShippingFast />,
      text: "Fast Delivery",
      description: "Same-day delivery in select areas"
    },
    {
      icon: <FaRegClock />,
      text: "24/7 Service",
      description: "Customer support whenever you need it"
    }
  ];

  // Advanced animation controls with viewpoint detection
  const controls = useAnimation();
  const sectionRef = React.useRef(null);
  const inView = useInView(sectionRef, { once: false, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Shared animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-[60vh] md:min-h-[100vh] w-full overflow-hidden font-['Roboto',sans-serif]"
    >
      {/* Enhanced Background with Dynamic Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-green-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-10" />
        
        {/* Sophisticated vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none" />
        
        {/* Animated floating particles for organic feel */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-green-400/10 backdrop-blur-md"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24 min-h-[60vh] md:min-h-[100vh] flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="text-left space-y-6 md:space-y-8">
            <motion.div 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 bg-green-500/15 border border-green-500/20 rounded-full backdrop-blur-sm"
            >
              <span className="text-green-200 text-xs md:text-sm font-medium tracking-wider uppercase">
                Welcome to Fresh Harvest
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-['Roboto_Slab',serif] text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              <span className="block">Fresh & Organic</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
                Farm to Table Foods
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-lg text-gray-100/90 max-w-lg leading-relaxed font-light"
            >
              Discover nature's finest selection of organic produce, delivered fresh from local farms to your doorstep. Experience the difference in taste and quality that only truly fresh food can provide.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <a
                href="#products"
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg
                         overflow-hidden transition-all duration-300 
                         text-sm md:text-base font-medium
                         shadow-lg shadow-green-700/30
                         hover:shadow-xl hover:shadow-green-700/40
                         focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-900"
                aria-label="Browse our products"
              >
                <span className="relative z-10 inline-flex items-center">
                  Shop Now
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a
                href="/about"
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-white/5 text-white rounded-lg
                         overflow-hidden transition-all duration-300
                         text-sm md:text-base font-medium
                         backdrop-blur-md border border-white/10 hover:border-white/20
                         focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Learn more about Fresh Harvest"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-4/5 transition-all duration-300 ease-out" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Image and Decorative Elements */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Multi-layered decorative background */}
              <motion.div 
                className="absolute -inset-4 rounded-full overflow-hidden"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 3, 0], 
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-full h-full bg-gradient-to-tr from-green-500/10 via-emerald-400/15 to-green-300/5 blur-3xl" 
                />
              </motion.div>
              
              {/* Main Image with Frame */}
              <div className="relative p-1.5 md:p-2 bg-gradient-to-tr from-white/10 to-white/5 rounded-3xl overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0.95, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.5 } 
                  }}
                >
                  {/* Parallax effect with subtle zoom */}
                  <motion.div
                    animate={{ 
                      y: [-8, 0, -8],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{ 
                      duration: 15,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="h-full"
                  >
                    <img
                      src={welcomeImg}
                      alt="Fresh organic fruits and vegetables arrangement"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Refined gradient overlay with multiple layers */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-l from-green-900/30 to-transparent" />
                </motion.div>
              </div>

              {/* Enhanced floating badge with texture - REDUCED SIZE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.08,
                  rotate: -5,
                  transition: { duration: 0.3 } 
                }}
                className="absolute -top-4 -right-4 rounded-xl overflow-hidden"
              >
                <div className="relative p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl shadow-lg transform rotate-3"
                  style={{
                    boxShadow: "0 8px 20px -5px rgba(22, 163, 74, 0.4)"
                  }}
                >
                  {/* Subtle texture overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-30" />
                  
                  <div className="relative text-center">
                    <span className="text-base md:text-lg font-bold block">100%</span>
                    <span className="text-xs md:text-sm font-medium tracking-wider uppercase">Organic</span>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
