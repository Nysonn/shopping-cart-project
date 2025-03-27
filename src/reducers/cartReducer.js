const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      // Check if item already exists in cart
      const existingItemIndex = state.cart.findIndex(
        item => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity
        };
        return { ...state, cart: updatedCart };
      } else {
        // Item doesn't exist, add new item
        return { 
          ...state, 
          cart: [...state.cart, { product, quantity }] 
        };
      }
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload.id)
      };

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        // If quantity is zero or negative, remove item
        return {
          ...state,
          cart: state.cart.filter(item => item.product.id !== id)
        };
      }
      // Otherwise update quantity
      return {
        ...state,
        cart: state.cart.map(item => 
          item.product.id === id 
            ? { ...item, quantity } 
            : item
        )
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };
      
    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };
      
    default:
      return state;
  }
};

export default cartReducer;
