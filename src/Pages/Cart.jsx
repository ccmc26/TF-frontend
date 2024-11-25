import React from 'react'
import CartItem from '../Components/CartItem/CartItem';

const Cart = ({ cartItems, removeFromCart}) => {
  return (
    <div className="cart"> 
      <h2>Carrito de Compras</h2> 
      {cartItems.length === 0 ? ( 
        <p>El carrito está vacío</p> 
      ) : ( 
        cartItems.map((item, index) => ( 
          <CartItem key={index} item={item} removeFromCart={removeFromCart} /> 
        )) 
      )} 
    </div>
  )
}

export default Cart;