import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../../context/CartContext";
import CartModal from "../CartModal/CartModal";
import HeaderLogo from "./HeaderLogo";
import DesktopNav from "./DesktopNav";
import DesktopActions from "./DesktopActions";
import MobileActions from "./MobileActions";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { state } = useContext(CartContext);
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cart animation effect when items update
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

  // Header style based on scroll state
  const headerClass = scrolled 
    ? "bg-gradient-to-r from-yellow-400/95 to-green-300/95 backdrop-blur-sm shadow-md py-2" 
    : "bg-gradient-to-r from-yellow-400/90 to-green-300/90 backdrop-blur-[2px] py-4";

  return (
    <>
      <motion.header className={`fixed top-0 w-full z-50 font-sans transition-all duration-300 ${headerClass}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8">
          <HeaderLogo toggleMenu={toggleMenu} />
          <DesktopNav />
          <DesktopActions 
            cartItemCount={cartItemCount} 
            isCartUpdated={isCartUpdated}
            openModal={openModal} 
            toggleSearch={toggleSearch}
          />
          <MobileActions 
            cartItemCount={cartItemCount} 
            isCartUpdated={isCartUpdated}
            openModal={openModal} 
            toggleSearch={toggleSearch}
            toggleMenu={toggleMenu}
          />
        </div>
        <AnimatePresence>
          {isSearchOpen && <SearchBar toggleSearch={toggleSearch} />}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && <CartModal closeModal={closeModal} />}
      </AnimatePresence>
    </>
  );
}
