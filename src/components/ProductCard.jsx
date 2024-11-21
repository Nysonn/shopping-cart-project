import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="border p-6 shadow-lg rounded-lg bg-gradient-to-b from-yellow-50 to-green-50 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-bold mt-4 text-green-700 text-center">{product.name}</h3>
      <p className="text-sm text-gray-600 text-center">{product.category}</p>
      <p className="text-green-600 font-bold text-center mt-2">{product.price}</p>
      <button
        onClick={addToCart}
        className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};
