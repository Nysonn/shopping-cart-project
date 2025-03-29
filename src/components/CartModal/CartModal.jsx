import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartFooter from "./CartFooter";
import { CartContext } from "../../context/CartContext";

export default function CartModal({ closeModal }) {
  const { state } = useContext(CartContext);

  // Calculate total with quantity in mind
  const totalPrice = state.cart.reduce((total, item) => {
    const itemPrice = parseFloat(
      item.product.price.replace("UGX ", "").replace(",", "")
    );
    return total + itemPrice * item.quantity;
  }, 0);

  // Handle keyboard events for accessibility and body scroll lock
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [closeModal]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end items-stretch z-50"
      onClick={closeModal}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white w-full max-w-md h-full shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <CartHeader closeModal={closeModal} itemCount={state.cart.length} />
        <CartItems closeModal={closeModal} />
        {state.cart.length > 0 && (
          <CartFooter totalPrice={totalPrice} closeModal={closeModal} />
        )}
      </motion.div>
    </motion.div>
  );
}
