import { useState, useEffect } from 'react';

export function useProducts() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  // Helper function to extract values from API objects
  const extractValue = (field) => {
    if (!field || typeof field !== 'object') return field;
    
    // Handle {String, Valid} structure
    if (field.String !== undefined) return field.String;
    
    // Handle {Int32, Valid} structure  
    if (field.Int32 !== undefined) return field.Int32;
    
    // Handle {Bool, Valid} structure (note: it's "Bool" not "Boolean")
    if (field.Bool !== undefined) return field.Bool;
    
    // Handle other potential structures
    if (field.Float64 !== undefined) return field.Float64;
    if (field.Boolean !== undefined) return field.Boolean;
    
    return field;
  };

  // Transform function to extract values from all API object fields
  const transformProduct = (product) => {
    const transformed = {};
    
    // Transform all fields in the product
    for (const [key, value] of Object.entries(product)) {
      transformed[key] = extractValue(value);
    }
    
    return transformed;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        
        // Replace with your actual API endpoint
        // Based on your console logs, it seems like you might be using a local server
        const response = await fetch('http://localhost:8080/api/products');
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error Response:', errorText);
          throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
        }
        
        const rawData = await response.json();
        console.log('Raw API Response:', rawData);
        
        // Check if the response is actually an array of products
        if (!Array.isArray(rawData)) {
          throw new Error('API response is not an array of products');
        }
        
        // Transform the data to extract String values
        const transformedData = rawData.map(transformProduct);
        console.log('Transformed Data:', transformedData);
        console.log('First product image URL:', transformedData[0]?.image_url);
        console.log('First product complete:', transformedData[0]);
        
        setData(transformedData);
      } catch (err) {
        console.error('Error fetching products:', err);
        setIsError(true);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    data,
    isLoading,
    isError,
    error,
  };
}