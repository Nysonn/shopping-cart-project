import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

export default function CartModal({ closeModal }) {
  const { state, dispatch } = useContext(CartContext);

  const totalPrice = state.cart.reduce((total, item) => total + parseFloat(item.price.replace("UGX ", "").replace(",", "")), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-96 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-yellow-400 to-green-300">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={closeModal} className="text-gray-800 font-bold hover:text-white">
            X
          </button>
        </div>
        <div className="p-4 space-y-4">
          {state.cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            state.cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
                <button
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
        {state.cart.length > 0 && (
          <div className="p-4 border-t">
            <p className="font-bold">Total: UGX {totalPrice.toLocaleString()}</p>
            <button
              className="w-full bg-green-500 text-white py-2 mt-2 rounded hover:bg-green-700"
              onClick={() => alert("Checkout functionality not implemented yet!")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
