import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}
