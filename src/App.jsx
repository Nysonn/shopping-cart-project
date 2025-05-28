import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import CartProvider from "./context/CartContext";
import HomePage from "./pages/Homepage/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Lazy load the page components
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));

const queryClient = new QueryClient();

export default function App() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">
            <Suspense fallback={<div className="flex justify-center items-center min-h-64">Loading...</div>}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}