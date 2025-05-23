import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function FeaturedProductsSection({ featuredProducts }) {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium organic products. Fresh from the farm to your table.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button 
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-green-400 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
        >
          View All Products
        </button>
      </div>
    </section>
  );
}
