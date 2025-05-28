import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter } from "react-icons/fa";

// New: import our custom hook
import { useProducts } from "../../hooks/useProducts.js";

import HeroSection from "./HeroSection";
import CategoryPills from "./CategoryPills";
import DesktopFiltersPanel from "./DesktopFiltersPanel";
import MobileFiltersPanel from "./MobileFiltersPanel";
import ProductsGrid from "./ProductsGrid";
import ProductQuickView from "../../components/ProductQuickView/ProductQuickView";

const categories = ["All", "Fruit", "Vegetable"];

export default function ProductsPage() {
  // Filters & UI state unchanged
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showOrganic, setShowOrganic] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(0);
  const filtersRef = useRef(null);

  // === REACT QUERY DATA FETCHING ===
  const {
    data: products = [],      // defaults to empty array until loaded
    isLoading,
    isError,
    error,
  } = useProducts();

  // Count applied filters
  useEffect(() => {
    let count = 0;
    if (selectedCategory !== "All") count++;
    if (showOrganic) count++;
    if (priceRange[0] > 0 || priceRange[1] < 10000) count++;
    if (sortBy !== "name") count++;
    setAppliedFilters(count);
  }, [selectedCategory, showOrganic, priceRange, sortBy]);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // === FILTER & SORT LOGIC ===
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesOrganic = !showOrganic || product.isOrganic;
      const productPrice = product.price; // now an integer from the API
      const matchesPrice =
        productPrice >= priceRange[0] && productPrice <= priceRange[1];
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesOrganic && matchesPrice && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") {
        return a.price - b.price;
      } else if (sortBy === "price-desc") {
        return b.price - a.price;
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return a.name.localeCompare(b.name);
    });

  // Handlers unchanged
  const handlePriceChange = (min, max) => setPriceRange([min, max]);
  const openQuickView = (product) => setSelectedProduct(product);
  const closeQuickView = () => setSelectedProduct(null);
  const resetFilters = () => {
    setSelectedCategory("All");
    setSortBy("name");
    setPriceRange([0, 10000]);
    setShowOrganic(false);
    setSearchQuery("");
  };

  // Early error state
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

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
                  {isLoading
                    ? "Loading..."
                    : `Showing ${filteredProducts.length} ${
                        filteredProducts.length === 1 ? "product" : "products"
                      }`}
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
                  {isLoading
                    ? "Loading..."
                    : `Showing ${filteredProducts.length} ${
                        filteredProducts.length === 1 ? "product" : "products"
                      }`}
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
