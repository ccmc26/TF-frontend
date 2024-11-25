import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';

const CartItem = ({ item }) => {
    const { handleRemoveFromCart } = useContext(CartContext);

    return (
        <div className="cart-item"> 
            <h3>{item.name}</h3> 
            <p>Precio: {item.price}€</p> 
            <button onClick={() => handleRemoveFromCart(item)}>Eliminar</button> 
        </div>
    )
}

export default CartItem;
