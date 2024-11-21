import React from "react";
import ProductCard from "./ProductCard";

import appleImg from '../assets/apples.jpg';
import carrotImg from '../assets/carrot.jpg';
import bananaImg from '../assets/banana-pic.jpg';
import berryImg from '../assets/berry-pic.jpg';
import grapesImg from '../assets/grapes-pic.jpg';
import sweetMelonImg from '../assets/sweet-melon.jpg';
import orangesImg from '../assets/oranges-pic.jpg';
import watermelonImg from '../assets/watermelon.jpg';

const products = [
  { id: 1, name: "Organic Apples", category: "Fruit", price: "UGX 1,000", image:appleImg },
  { id: 2, name: "Fresh Carrots", category: "Vegetable", price: "UGX 2,000", image:carrotImg },
  { id: 3, name: "Organic Bananas", category: "Fruit", price: "UGX 4,000", image: bananaImg },
  { id: 4, name: "Berry", category: "Fruit", price: "UGX 3,000", image: berryImg },
  { id: 5, name: "Grapes", category: "Fruit", price: "UGX 1,000", image: grapesImg },
  { id: 6, name: "Sweet Melon", category: "Fruit", price: "UGX 5,000", image: sweetMelonImg },
  { id: 7, name: "Oranges", category: "Fruit", price: "UGX 2,000", image: orangesImg },
  { id: 8, name: "Water Melon", category: "Fruit", price: "UGX 5,000", image: watermelonImg },
  { id: 9, name: "Grapes", category: "Fruit", price: "UGX 2,000", image: grapesImg }
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-16">
      <h2 className="text-2xl font-bold text-center">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
