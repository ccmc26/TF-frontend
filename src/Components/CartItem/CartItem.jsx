import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
    const { handleRemoveFromCart, handleAddToCart } = useContext(CartContext);

    return (
        <div className="cart-item"> 
            <h3>{item.product.name}</h3> 
            <p>Precio unidad: {item.product.price}€</p> 
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.product)}>Eliminar</button>
            <button onClick={() => handleAddToCart(item.product)}>Añadir</button>  
        </div>
    )
}

export default CartItem;
