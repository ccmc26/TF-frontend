import React, { useContext } from 'react'
import CartItem from '../Components/CartItem/CartItem';
import { CartContext } from '../Context/CartContext';
import './CSS/Cart.css';

const Cart = () => {
  const { cartItems, itemCount, totalPrice} = useContext(CartContext)
  // console.log(cartItems);
  console.log(totalPrice);
  return (
    <div className="cart"> 
      <h2>CISTELLA DE  LA COMPRA</h2> 
      <p>Quantitat total de productes: {itemCount}</p> 
      <div className="cart-items"> 
        {cartItems.length === 0 ? ( 
          <p>La cistella està buida</p> 
          ) : ( 
          cartItems.map((item, index) => ( 
            <CartItem key={index} item={item} /> )) 
          )} 
          </div> 
        <div className="cart-summary"> 
          <p>Total: {totalPrice}</p> 
          <button className="checkout-button">Proceder al Pago</button> 
      </div> 
    </div>
    )
}

export default Cart;