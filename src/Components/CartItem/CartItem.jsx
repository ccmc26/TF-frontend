import React from 'react'

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item"> 
        <h3>{item.name}</h3> 
        <p>Precio: {item.price}€</p> 
        <button onClick={() => removeFromCart(item)}>Eliminar</button> 
    </div>
  )
}

export default CartItem;
