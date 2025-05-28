import { useQuery } from "@tanstack/react-query";

async function fetchProducts() {
  const res = await fetch("http://localhost:8080/api/products");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

/**
 * useProducts
 * Fetches the product list from the backend.
 * - Returns { data, isLoading, isError, error }
 */
export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    // Additional options can be added here
    // refetchOnWindowFocus: false,
    // staleTime: 5 * 60 * 1000, // 5 minutes
  });
}