import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes, FaLeaf, FaSearch, FaUser, FaInstagram, FaFacebook, FaTwitter, FaHeart } from "react-icons/fa";
import CartModal from "./CartModal";

export default function Header() {
  const { state, toggleCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartUpdated, setIsCartUpdated] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Get total cart quantity
  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  // Handle scroll event for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart animation effect
  useEffect(() => {
    if (cartItemCount > 0) {
      setIsCartUpdated(true);
      const timer = setTimeout(() => setIsCartUpdated(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartItemCount]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Revised styles with clean animations
  const activeStyle = "text-white font-bold";
  const inactiveStyle = "text-gray-800 hover:text-white transition-colors duration-200";
  
  // Mobile navigation styles
  const mobileLinkStyle = "flex items-center w-full py-4 px-6 text-lg text-white font-medium hover:bg-green-500/40 transition-all duration-200 rounded-md";
  const mobileActiveLinkStyle = `${mobileLinkStyle} bg-green-500/60 font-bold shadow-sm`;

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-50 font-sans transition-all duration-300 ${
          scrolled 
            ? 'bg-gradient-to-r from-yellow-400/95 to-green-300/95 backdrop-blur-sm shadow-md py-2' 
            : 'bg-gradient-to-r from-yellow-400/90 to-green-300/90 backdrop-blur-[2px] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8">
          {/* Enhanced Logo with Animation */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-bold text-green-800 hover:text-green-900 transition-colors duration-200"
            aria-label="Fresh Harvest Home"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaLeaf className="text-2xl" />
            </motion.div>
            <span>Fresh <span className="text-white drop-shadow-sm">Harvest</span></span>
          </Link>

          {/* Desktop Navigation with hover effects */}
          <nav className="hidden lg:flex gap-8 items-center" role="navigation">
            <motion.ul 
              className="flex gap-8 items-center text-base"
              variants={{
                visible: { 
                  transition: { staggerChildren: 0.1 } 
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <NavLink 
                  to="/" 
                  className={({isActive}) => isActive ? activeStyle : inactiveStyle}
                >
                  <span className="relative py-2">
                    Home
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </span>
                </NavLink>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <NavLink 
                  to="/products" 
                  className={({isActive}) => isActive ? activeStyle : inactiveStyle}
                >
                  <span className="relative py-2">
                    Products
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </span>
                </NavLink>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <NavLink 
                  to="/contact" 
                  className={({isActive}) => isActive ? activeStyle : inactiveStyle}
                >
                  <span className="relative py-2">
                    Contact
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </span>
                </NavLink>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <NavLink 
                  to="/about" 
                  className={({isActive}) => isActive ? activeStyle : inactiveStyle}
                >
                  <span className="relative py-2">
                    About Us
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </span>
                </NavLink>
              </motion.li>
            </motion.ul>
          </nav>

          {/* Enhanced Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Search products"
            >
              <FaSearch className="text-gray-800" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Wishlist"
            >
              <FaHeart className="text-gray-800" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="My Account"
            >
              <FaUser className="text-gray-800" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                cartItemCount > 0 ? 'bg-white/20' : 'hover:bg-white/20'
              } ${isCartUpdated ? 'animate-pulse' : ''}`}
              onClick={openModal}
              aria-label={`Shopping Cart with ${cartItemCount} items`}
            >
              <FaShoppingCart className="text-lg text-gray-800" />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span
                    key="cart-count"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex items-center gap-3 lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Search products"
            >
              <FaSearch className="text-xl text-gray-800" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                isCartUpdated ? 'animate-pulse' : ''
              }`}
              onClick={openModal}
              aria-label={`Shopping Cart with ${cartItemCount} items`}
            >
              <FaShoppingCart className="text-xl text-gray-800" />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span
                    key="cart-count"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl text-gray-800" />
              ) : (
                <FaBars className="text-xl text-gray-800" />
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Expandable Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/20 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-full px-5 py-3 pl-12 focus:ring-2 focus:ring-green-500 placeholder-gray-500"
                    autoFocus
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={toggleSearch}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu with improved transitions */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMenu}
              aria-hidden="true"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-green-700 to-green-800 shadow-xl z-50 lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex items-center justify-between p-5 border-b border-green-500/30">
                <Link 
                  to="/" 
                  className="flex items-center gap-2 text-white"
                  onClick={toggleMenu}
                  aria-label="Fresh Harvest Home"
                >
                  <FaLeaf className="text-xl text-yellow-300" />
                  <span className="font-bold">Fresh Harvest</span>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="p-2 text-white hover:text-yellow-300 transition-colors rounded-full"
                  aria-label="Close mobile menu"
                >
                  <FaTimes className="text-xl" />
                </motion.button>
              </div>
              
              <div className="p-4 border-b border-green-500/30">
                <h2 className="text-yellow-300 font-bold text-lg mb-3 px-2">Menu</h2>
                <nav aria-label="Mobile navigation">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <NavLink 
                        to="/" 
                        className={({isActive}) => 
                          isActive ? mobileActiveLinkStyle : mobileLinkStyle
                        }
                        onClick={toggleMenu}
                      >
                        <span className="text-xl">Home</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/products" 
                        className={({isActive}) => 
                          isActive ? mobileActiveLinkStyle : mobileLinkStyle
                        }
                        onClick={toggleMenu}
                      >
                        <span className="text-xl">Products</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/contact" 
                        className={({isActive}) => 
                          isActive ? mobileActiveLinkStyle : mobileLinkStyle
                        }
                        onClick={toggleMenu}
                      >
                        <span className="text-xl">Contact</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/about" 
                        className={({isActive}) => 
                          isActive ? mobileActiveLinkStyle : mobileLinkStyle
                        }
                        onClick={toggleMenu}
                      >
                        <span className="text-xl">About Us</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              
              <div className="p-4 border-b border-green-500/30">
                <h2 className="text-yellow-300 font-bold text-lg mb-3 px-2">Account</h2>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className={mobileLinkStyle}>
                      <FaUser className="mr-3" />
                      <span>My Account</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={mobileLinkStyle}>
                      <FaHeart className="mr-3" />
                      <span>Wishlist</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="p-4">
                <h2 className="text-yellow-300 font-bold text-lg mb-3 px-2">Connect</h2>
                <div className="flex gap-4 px-2">
                  <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                    <FaTwitter className="text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Modal */}
      <AnimatePresence>
        {showModal && <CartModal closeModal={closeModal} />}
      </AnimatePresence>
    </>
  );
}
