// ProductsPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter } from "react-icons/fa";

// Imported decomposed components
import HeroSection from "./HeroSection";
import CategoryPills from "./CategoryPills";
import DesktopFiltersPanel from "./DesktopFiltersPanel";
import MobileFiltersPanel from "./MobileFiltersPanel";
import ProductsGrid from "./ProductsGrid";
import ProductQuickView from "../../components/ProductQuickView/ProductQuickView";

// Import product images
import appleImg from "../../assets/apple-new.jpg";
import carrotImg from "../../assets/carrot.jpg";
import bananaImg from "../../assets/banana-pic.jpg";
import berryImg from "../../assets/berry-pic.jpg";
import grapesImg from "../../assets/grapes-pic.jpg";
import sweetMelonImg from "../../assets/sweet-melon.jpg";
import orangesImg from "../../assets/oranges-pic.jpg";
import watermelonImg from "../../assets/watermelon.jpg";
import eggplantImg from "../../assets/egg-plant.jpg";
import pineappleImg from "../../assets/pineapple.jpg";
import potatoImg from "../../assets/potato.jpg";
import cucumberImg from "../../assets/cucumber.jpg";
import onionImg from "../../assets/onion.jpg";
import cabbageImg from "../../assets/cabbage.jpg";
import lemonImg from "../../assets/lemon.jpg";

const products = [
  { id: 1, name: "Organic Apples", category: "Fruit", price: "UGX 1,000", image: appleImg, rating: 4.5, reviews: 24, isOrganic: true },
  { id: 2, name: "Fresh Carrots", category: "Vegetable", price: "UGX 2,000", image: carrotImg, rating: 4.3, reviews: 18, isOrganic: false },
  { id: 3, name: "Organic Bananas", category: "Fruit", price: "UGX 4,000", image: bananaImg, rating: 4.7, reviews: 32, isOrganic: true },
  { id: 4, name: "Mixed Berries", category: "Fruit", price: "UGX 3,000", image: berryImg, rating: 4.8, reviews: 42, isOrganic: true },
  { id: 5, name: "Purple Grapes", category: "Fruit", price: "UGX 1,000", image: grapesImg, rating: 4.1, reviews: 15, isOrganic: false },
  { id: 6, name: "Sweet Melon", category: "Fruit", price: "UGX 5,000", image: sweetMelonImg, rating: 4.6, reviews: 28, isOrganic: true },
  { id: 7, name: "Juicy Oranges", category: "Fruit", price: "UGX 2,000", image: orangesImg, rating: 4.4, reviews: 36, isOrganic: false },
  { id: 8, name: "Water Melon", category: "Fruit", price: "UGX 5,000", image: watermelonImg, rating: 4.9, reviews: 45, isOrganic: true },
  { id: 9, name: "Green Grapes", category: "Fruit", price: "UGX 2,000", image: grapesImg, rating: 4.2, reviews: 19, isOrganic: false },
  { id: 10, name: "Egg Plant", category: "Vegetable", price: "UGX 1,500", image: eggplantImg, rating: 3.2, reviews: 29, isOrganic: true },
  { id: 11, name: "Pineapple", category: "Fruit", price: "UGX 4,500", image: pineappleImg, rating: 4.2, reviews: 29, isOrganic: true },
  { id: 12, name: "Potato", category: "Vegetable", price: "UGX 2,500", image: potatoImg, rating: 3.2, reviews: 35, isOrganic: true },
  { id: 13, name: "Cucumber", category: "Vegetable", price: "UGX 1,500", image: cucumberImg, rating: 3.5, reviews: 29, isOrganic: true },
  { id: 14, name: "Onion", category: "Vegetable", price: "UGX 2,000", image: onionImg, rating: 3.2, reviews: 39, isOrganic: true },
  { id: 15, name: "Cabbage", category: "Vegetable", price: "UGX 3,500", image: cabbageImg, rating: 3.5, reviews: 20, isOrganic: true },
  { id: 16, name: "Lemon", category: "Fruit", price: "UGX 2,500", image: lemonImg, rating: 3.5, reviews: 19, isOrganic: false },
];

const categories = ["All", "Fruit", "Vegetable"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showOrganic, setShowOrganic] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(0);
  const filtersRef = useRef(null);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile filters on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target) &&
        !event.target.closest("[data-filter-toggle]")
      ) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filtersRef]);

  // Count applied filters
  useEffect(() => {
    let count = 0;
    if (selectedCategory !== "All") count++;
    if (showOrganic) count++;
    if (priceRange[0] > 0 || priceRange[1] < 10000) count++;
    if (sortBy !== "name") count++;
    setAppliedFilters(count);
  }, [selectedCategory, showOrganic, priceRange, sortBy]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesOrganic = !showOrganic || product.isOrganic;
      const productPrice = parseInt(product.price.replace(/\D/g, ""));
      const matchesPrice =
        productPrice >= priceRange[0] && productPrice <= priceRange[1];
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesOrganic && matchesPrice && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") {
        return (
          parseInt(a.price.replace(/\D/g, "")) -
          parseInt(b.price.replace(/\D/g, ""))
        );
      } else if (sortBy === "price-desc") {
        return (
          parseInt(b.price.replace(/\D/g, "")) -
          parseInt(a.price.replace(/\D/g, ""))
        );
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return a.name.localeCompare(b.name);
    });

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSortBy("name");
    setPriceRange([0, 10000]);
    setShowOrganic(false);
    setSearchQuery("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryPills
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <DesktopFiltersPanel
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              handlePriceChange={handlePriceChange}
              showOrganic={showOrganic}
              setShowOrganic={setShowOrganic}
              sortBy={sortBy}
              setSortBy={setSortBy}
              resetFilters={resetFilters}
            />
            <div className="flex-grow">
              {/* Mobile Filter Controls */}
              <div className="mb-6 flex items-center justify-between lg:hidden">
                <p className="text-gray-600">
                  Showing {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </p>
                <button
                  data-filter-toggle
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 shadow-sm"
                >
                  <FaFilter />
                  <span>Filters</span>
                  {appliedFilters > 0 && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {appliedFilters}
                    </span>
                  )}
                </button>
              </div>
              <AnimatePresence>
                {showFilters && (
                  <MobileFiltersPanel
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    priceRange={priceRange}
                    handlePriceChange={handlePriceChange}
                    showOrganic={showOrganic}
                    setShowOrganic={setShowOrganic}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    resetFilters={resetFilters}
                    setShowFilters={setShowFilters}
                    filtersRef={filtersRef}
                  />
                )}
              </AnimatePresence>
              <div className="hidden lg:flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm bg-white"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Best Rated</option>
                  </select>
                </div>
              </div>
              <ProductsGrid
                isLoading={isLoading}
                filteredProducts={filteredProducts}
                openQuickView={openQuickView}
                resetFilters={resetFilters}
              />
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {selectedProduct && (
          <ProductQuickView
            product={selectedProduct}
            closeQuickView={closeQuickView}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
