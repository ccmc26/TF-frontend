import React, { useState } from 'react';
import { CartContext } from './CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0); // Estado del contador

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => { 
      // Copiar el array de items existentes 
      const updatedItems = [...prevItems]; 
      // Buscar el índice del producto existente 
      const existingProductIndex = updatedItems.findIndex(item => item.product._id === product._id); 
      if (existingProductIndex !== -1) { 
        // Si el producto ya existe en el array, incrementamos la cantidad 
        updatedItems[existingProductIndex].quantity += 1; 
      } else { 
        // Si el producto no existe, lo agregamos con cantidad 1 
        updatedItems.push({ product, quantity: 1 }); 
      } 
      return updatedItems; 
    }); 
    setItemCount(prevCount => prevCount + 1); // Incrementar el contador };
        

  };

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems]; 
      // Buscar el índice del producto existente 
      const existingProductIndex = updatedItems.findIndex(item => item.product._id === productToRemove._id); 
      if (existingProductIndex !== -1) { 
        if (updatedItems[existingProductIndex].quantity === 1) { 
          // Eliminar el producto si la cantidad es 1 
          updatedItems.splice(existingProductIndex, 1); 
        } else { 
          // Decrementar la cantidad si hay más de 1 
          updatedItems[existingProductIndex].quantity -= 1; 
        } 
      } return updatedItems;
    });

    setItemCount(prevCount => Math.max(prevCount - 1, 0)); // Asegurarse de que el contador sea positivo
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, handleRemoveFromCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
