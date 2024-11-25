import React from 'react'
import './Item.css'
import { IoMdAddCircleOutline } from "react-icons/io";

const Item = ({ producto, addToCart }) => {
  return (
    <div className="product">
      <h2>{producto.name}</h2>
      <p>{producto.desc} - {producto.price}€</p>
      <button onClick={() => addToCart(producto)} className='icon-button'>
        <IoMdAddCircleOutline className='icon-photo'/>
      </button>
    </div>
  )
}

export default Item;