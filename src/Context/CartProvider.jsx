import React, { useState } from 'react';
import { CartContext } from './CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); 

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems((prevItems) => 
      prevItems.filter((product) => product !== productToRemove));
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, handleRemoveFromCart }}> 
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;