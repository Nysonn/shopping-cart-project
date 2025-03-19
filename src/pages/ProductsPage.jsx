import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

// Import the same product images you're using in ProductGrid
import appleImg from '../assets/apples.jpg';
import carrotImg from '../assets/carrot.jpg';
import bananaImg from '../assets/banana-pic.jpg';
import berryImg from '../assets/berry-pic.jpg';
import grapesImg from '../assets/grapes-pic.jpg';
import sweetMelonImg from '../assets/sweet-melon.jpg';
import orangesImg from '../assets/oranges-pic.jpg';
import watermelonImg from '../assets/watermelon.jpg';

const products = [
  { id: 1, name: "Organic Apples", category: "Fruit", price: "UGX 1,000", image: appleImg },
  { id: 2, name: "Fresh Carrots", category: "Vegetable", price: "UGX 2,000", image: carrotImg },
  { id: 3, name: "Organic Bananas", category: "Fruit", price: "UGX 4,000", image: bananaImg },
  { id: 4, name: "Berry", category: "Fruit", price: "UGX 3,000", image: berryImg },
  { id: 5, name: "Grapes", category: "Fruit", price: "UGX 1,000", image: grapesImg },
  { id: 6, name: "Sweet Melon", category: "Fruit", price: "UGX 5,000", image: sweetMelonImg },
  { id: 7, name: "Oranges", category: "Fruit", price: "UGX 2,000", image: orangesImg },
  { id: 8, name: "Water Melon", category: "Fruit", price: "UGX 5,000", image: watermelonImg },
  { id: 9, name: "Grapes", category: "Fruit", price: "UGX 2,000", image: grapesImg }
];

const categories = ["All", "Fruit", "Vegetable"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700 mb-2">Our Fresh Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our selection of fresh, organic fruits and vegetables. 
          All our products are sourced from local farmers and delivered to you at their peak freshness.
        </p>
      </div>
      
      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-green-100 rounded-lg p-1">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "text-green-700 hover:bg-green-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 