import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import CartModal from "./CartModal";

export default function Header() {
  const { state } = useContext(CartContext); // Access the cart state
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Active link style 
  const activeStyle = "text-white font-bold";
  
  // Mobile menu link style
  const mobileLinkStyle = "block w-full py-3 px-6 text-lg hover:bg-green-600 transition-colors duration-200";
  const mobileActiveLinkStyle = `${mobileLinkStyle} bg-green-600 text-white font-bold`;

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-yellow-400 to-green-300 shadow-md z-50 font-roboto">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-lg font-bold text-green-100 hover:text-white z-50">
          Fresh <span className="text-white">Harvest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-800">
          <ul className="flex gap-6">
            <li>
              <NavLink 
                to="/" 
                className={({isActive}) => isActive ? activeStyle : "hover:text-white"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({isActive}) => isActive ? activeStyle : "hover:text-white"}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({isActive}) => isActive ? activeStyle : "hover:text-white"}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({isActive}) => isActive ? activeStyle : "hover:text-white"}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <button
                className="relative flex items-center text-gray-800 hover:text-white"
                onClick={openModal}
              >
                <FaShoppingCart className="text-xl" />
                {state.cart.length > 0 && (
                  <span className="absolute top-0 right-0 left-3 p-1 bg-red-500 text-white rounded-full text-xs w-3 h-3 flex items-center justify-center">
                    {state.cart.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="relative text-gray-800 hover:text-white flex items-center"
            onClick={openModal}
          >
            <FaShoppingCart className="text-xl" />
            {state.cart.length > 0 && (
              <span className="absolute top-0 right-0 left-3 p-1 bg-red-500 text-white rounded-full text-xs w-3 h-3 flex items-center justify-center">
                {state.cart.length}
              </span>
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-white focus:outline-none z-50"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Menu Panel */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-green-500 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 pb-6">
            <nav className="text-white">
              <ul className="flex flex-col">
                <li>
                  <NavLink 
                    to="/" 
                    className={({isActive}) => 
                      isActive ? mobileActiveLinkStyle : mobileLinkStyle
                    }
                    onClick={toggleMenu}
                  >
                    Home
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
                    Products
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
                    Contact
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
                    About Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Cart Modal */}
      {showModal && <CartModal closeModal={closeModal} />}
    </header>
  );
}
