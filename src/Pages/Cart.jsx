import React, { useContext } from 'react'
import CartItem from '../Components/CartItem/CartItem';
import { CartContext } from '../Context/CartContext';
import './CSS/Cart.css';

const Cart = () => {
  const { cartItems, itemCount} = useContext(CartContext)
  console.log(cartItems);
  return (
    <div className="cart"> 
      <h2>Carrito de Compras</h2> 
      <p>Total de artículos: {itemCount}</p> 
      <div className="cart-items"> 
        {cartItems.length === 0 ? ( 
          <p>El carrito está vacío</p> 
          ) : ( 
          cartItems.map((item, index) => ( 
            <CartItem key={index} item={item} /> )) 
          )} 
          </div> 
        <div className="cart-summary"> 
          <p>Total: {}</p> 
          <button className="checkout-button">Proceder al Pago</button> 
      </div> 
    </div>
    )
}

export default Cart;