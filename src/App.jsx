import React from "react";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import CartProvider from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <WelcomeSection />
        <ProductGrid />
      </main>
      <Footer />
    </CartProvider>
  );
}
