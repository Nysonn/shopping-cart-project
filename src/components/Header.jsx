import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import CartModal from "./CartModal";

export default function Header() {
  const { state } = useContext(CartContext); // Access the cart state
  const [showModal, setShowModal] = useState(false); // Manage modal visibility

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-yellow-400 to-green-300 shadow-md z-50 font-roboto">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-bold text-green-100">
          Fresh <span className="text-white">Harvest</span>
        </h1>
        <nav className="hidden md:flex gap-6 text-gray-800">
          <ul className="flex gap-6">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
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
        {/* Cart Icon */}
        <button
          className="relative text-gray-800 hover:text-white md:hidden flex items-center"
          onClick={openModal}
        >
          <FaShoppingCart className="text-xl" />
          {state.cart.length > 0 && (
            <span className="absolute top-0 right-0 left-3 p-1 bg-red-500 text-white rounded-full text-xs w-3 h-3 flex items-center justify-center">
              {state.cart.length}
            </span>
          )}
        </button>
      </div>
      {/* Modal */}
      {showModal && <CartModal closeModal={closeModal} />}
    </header>
  );
}
