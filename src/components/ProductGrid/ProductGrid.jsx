// ProductGrid.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchAndFilterBar from "./SearchAndFilterBar";
import CategoryPills from "./CategoryPills";
import ProductGridDisplay from "./ProductGridDisplay";
import NoProductsFound from "./NoProductsFound";

// Import images
import appleImg from '../assets/apple-new.jpg';
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
  { id: 4, name: "Mixed Berries", category: "Fruit", price: "UGX 3,000", image: berryImg },
  { id: 5, name: "Purple Grapes", category: "Fruit", price: "UGX 1,000", image: grapesImg },
  { id: 6, name: "Sweet Melon", category: "Fruit", price: "UGX 5,000", image: sweetMelonImg },
  { id: 7, name: "Juicy Oranges", category: "Fruit", price: "UGX 2,000", image: orangesImg },
  { id: 8, name: "Water Melon", category: "Fruit", price: "UGX 5,000", image: watermelonImg },
  { id: 9, name: "Green Grapes", category: "Fruit", price: "UGX 2,000", image: grapesImg }
];

// Get all unique categories
const categories = ["All", ...new Set(products.map(product => product.category))];

export default function ProductGrid() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  // Filter and sort products based on activeCategory, searchTerm, and sortBy
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter(product => product.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.category.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => {
          const aPrice = parseFloat(a.price.replace("UGX ", "").replace(",", ""));
          const bPrice = parseFloat(b.price.replace("UGX ", "").replace(",", ""));
          return aPrice - bPrice;
        });
        break;
      case "price-desc":
        result.sort((a, b) => {
          const aPrice = parseFloat(a.price.replace("UGX ", "").replace(",", ""));
          const bPrice = parseFloat(b.price.replace("UGX ", "").replace(",", ""));
          return bPrice - aPrice;
        });
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [activeCategory, searchTerm, sortBy]);

  // Clear filters
  const clearFilters = () => {
    setActiveCategory("All");
    setSearchTerm("");
    setSortBy("default");
  };

  return (
    <section id="products" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Fresh From Our Farm
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide selection of fresh, locally-sourced produce. We take pride in bringing you the best quality fruits and vegetables.
          </p>
        </motion.div>

        <SearchAndFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          activeCategory={activeCategory}
          clearFilters={clearFilters}
        />

        <AnimatePresence>
          {showFilters && (
            <CategoryPills
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {filteredProducts.length === 0 ? (
            <NoProductsFound clearFilters={clearFilters} />
          ) : (
            <ProductGridDisplay products={filteredProducts} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
