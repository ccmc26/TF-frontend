import React, { useContext } from 'react'
import './Item.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import { CartContext } from '../../Context/CartContext';

const Item = ({ producto }) => {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div className="product">
      <h2>{producto.name}</h2>
      <p>{producto.desc} - {producto.price}€</p>
      <button onClick={() => handleAddToCart(producto)} className='icon-button'>
        <IoMdAddCircleOutline className='icon-photo'/>
      </button>
    </div>
  )
}

export default Item;