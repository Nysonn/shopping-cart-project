export const formatPrice = (price) => {
  if (typeof price === 'number') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }
  return price; // fallback if it's already a string
};

// Then in your components:
import { formatPrice } from '../utils/formatPrice';
const displayPrice = formatPrice(product.price);