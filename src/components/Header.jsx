import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes, FaLeaf, FaSearch, FaUser, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import CartModal from "./CartModal";

export default function Header() {
  const { state } = useContext(CartContext); // Access the cart state
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartUpdated, setIsCartUpdated] = useState(false);

  // Cart animation effect
  useEffect(() => {
    if (state.cart.length > 0) {
      setIsCartUpdated(true);
      const timer = setTimeout(() => setIsCartUpdated(false), 300);
      return () => clearTimeout(timer);
    }
  }, [state.cart.length]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Revised styles to remove any outline/ring
  const activeStyle = "text-white font-bold outline-none focus:outline-none focus:ring-0";
  const inactiveStyle = "text-gray-800 hover:text-white transition-colors duration-200 outline-none focus:outline-none focus:ring-0";
  
  // More visible mobile navigation styles with improved contrast
  const mobileLinkStyle = "flex items-center w-full py-4 px-6 text-lg text-white font-medium hover:bg-green-500/40 transition-all duration-200 rounded-md";
  const mobileActiveLinkStyle = `${mobileLinkStyle} bg-green-500/60 font-bold shadow-sm`;

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-yellow-400/90 to-green-300/90 backdrop-blur-sm shadow-lg z-50 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Enhanced Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-bold text-green-800 hover:text-green-900 transition-colors duration-200"
          aria-label="Fresh Harvest Home"
        >
          <FaLeaf className="text-2xl" />
          <span>Fresh <span className="text-white drop-shadow-sm">Harvest</span></span>
        </Link>

        {/* Desktop Navigation with enhanced accessibility and animations */}
        <nav className="hidden md:flex gap-8 items-center" role="navigation">
          <ul className="flex gap-8 items-center text-base">
            <li>
              <NavLink 
                to="/" 
                className={({isActive}) => isActive ? activeStyle : inactiveStyle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({isActive}) => isActive ? activeStyle : inactiveStyle}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({isActive}) => isActive ? activeStyle : inactiveStyle}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({isActive}) => isActive ? activeStyle : inactiveStyle}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <button
                className={`relative flex items-center p-2 rounded-full hover:bg-white/10 transition-all duration-200 ${
                  isCartUpdated ? 'animate-bounce' : ''
                }`}
                onClick={openModal}
                aria-label={`Shopping Cart with ${state.cart.length} items`}
              >
                <FaShoppingCart className="text-xl text-gray-800 hover:text-green-700" />
                {state.cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-fade-in">
                    {state.cart.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>

        {/* Fixed Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className={`relative flex items-center p-2 ${
              isCartUpdated ? 'animate-bounce' : ''
            }`}
            onClick={openModal}
            aria-label={`Shopping Cart with ${state.cart.length} items`}
          >
            <FaShoppingCart className="text-xl text-gray-800" />
            {state.cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-fade-in">
                {state.cart.length}
              </span>
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-green-700 transition-colors p-1 focus:outline-none"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Improved Mobile Menu Overlay with fade transition */}
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={toggleMenu}
          aria-hidden="true"
        />

        {/* Enhanced Mobile Menu Panel with priority on navigation */}
        <div 
          className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-green-700 to-green-800 shadow-xl transform transition-transform duration-300 ease-out md:hidden overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Menu Header with Logo and Close Button */}
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
            <button 
              onClick={toggleMenu}
              className="p-2 text-white hover:text-yellow-300 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
              aria-label="Close mobile menu"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          
          {/* Main Navigation - Prioritized with larger text and spacing */}
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
          
          {/* Search Bar moved after navigation for priority */}
          <div className="p-4 border-b border-green-500/30">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full py-3 pl-10 pr-4 rounded-full bg-green-600/30 text-white placeholder-green-100/70 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
                aria-label="Search products"
              />
              <FaSearch className="absolute left-3 top-[14px] text-green-100/70" />
            </div>
          </div>

          {/* Account Section */}
          <div className="p-4 border-t border-b border-green-500/20">
            <div className="flex items-center gap-3 p-4 bg-green-500/20 rounded-lg">
              <FaUser className="text-yellow-300 text-lg" />
              <div>
                <h3 className="text-white font-medium">My Account</h3>
                <div className="flex gap-2 mt-2">
                  <button className="px-3 py-1 text-sm bg-yellow-400 text-green-800 rounded-full font-medium hover:bg-yellow-300 transition-colors">
                    Sign In
                  </button>
                  <button className="px-3 py-1 text-sm bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links & Footer */}
          <div className="p-6 mt-auto">
            <p className="text-green-100/80 text-sm mb-3">Connect with us</p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Instagram">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Facebook">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Twitter">
                <FaTwitter className="text-xl" />
              </a>
            </div>
            <p className="text-green-100/50 text-xs mt-6">© 2023 Fresh Harvest. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Cart Modal with fade animation */}
      {showModal && (
        <div className="animate-fade-in">
          <CartModal closeModal={closeModal} />
        </div>
      )}
    </header>
  );
}
