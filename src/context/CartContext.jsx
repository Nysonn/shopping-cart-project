import React, { createContext, useReducer, useEffect } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext();

// Initial state with support for loading from localStorage
const initialState = {
  cart: [],
  isCartOpen: false,
  loading: false,
  error: null
};

export default function CartProvider({ children }) {
  // Initialize state from localStorage if available
  const loadedState = JSON.parse(localStorage.getItem('cart')) || initialState;
  const [state, dispatch] = useReducer(cartReducer, loadedState);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  // Provide a more streamlined API for common cart operations
  const cartUtils = {
    addItem: (product, quantity = 1) => {
      dispatch({ 
        type: "ADD_TO_CART", 
        payload: { product, quantity } 
      });
    },
    removeItem: (productId) => {
      dispatch({ 
        type: "REMOVE_FROM_CART", 
        payload: { id: productId } 
      });
    },
    updateQuantity: (productId, quantity) => {
      dispatch({ 
        type: "UPDATE_QUANTITY", 
        payload: { id: productId, quantity } 
      });
    },
    clearCart: () => {
      dispatch({ type: "CLEAR_CART" });
    },
    toggleCart: () => {
      dispatch({ type: "TOGGLE_CART" });
    }
  };

  return (
    <CartContext.Provider value={{ state, dispatch, ...cartUtils }}>
      {children}
    </CartContext.Provider>
  );
}
