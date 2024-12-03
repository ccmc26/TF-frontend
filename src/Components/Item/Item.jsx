import React, { useContext } from 'react'
import './Item.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import { CartContext } from '../../Context/CartContext';

const Item = ({ producto }) => {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div className="product">
      <h2>{producto.nombreProducto} \ {producto.precioProducto}€</h2>
      <p>{producto.descProducto} </p>
      <button onClick={() => handleAddToCart(producto)} className='icon-button'>
        <IoMdAddCircleOutline className='icon-photo'/>
      </button>
    </div>
  )
}

export default Item;