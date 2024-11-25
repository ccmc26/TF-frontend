import React, { useContext } from 'react'
import CartItem from '../Components/CartItem/CartItem';
import { CartContext } from '../Context/CartContext';

const Cart = () => {
  const { cartItems, handleRemoveFromCart } = useContext(CartContext)
  
  return (
    <div className="cart"> 
      <h2>Carrito de Compras</h2> 
      {cartItems.length === 0 ? ( 
        <p>El carrito está vacío</p> 
      ) : ( 
        cartItems.map((item, index) => ( 
          <CartItem key={index} item={item} handleRemoveFromCart={handleRemoveFromCart} /> 
        )) 
      )} 
    </div>
  )
}

export default Cart;