import React from 'react'
import './Item.css'
import { IoMdAddCircleOutline } from "react-icons/io";

const Item = ({ producto }) => {
  return (
    <div className="product">
      <h2>{producto.name}</h2>
      <p>{producto.desc} - {producto.price}€</p>
      <button className='icon-button'>
        <IoMdAddCircleOutline className='icon-photo'/>
      </button>
    </div>
  )
}

export default Item;