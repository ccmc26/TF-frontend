import React from 'react'
import { useEffect, useState } from 'react'
import './Item.css'
import { IoMdAddCircleOutline } from "react-icons/io";

const Item = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        // Hacemos la solicitud para obtener los datos desde el backend
        fetch('http://localhost:8080/api/productos')
          .then((response) => response.json())
          .then((data) => setProductos(data)) // Guardamos los datos en el estado
          .catch((error) => console.error('Error al cargar productos:', error));
    }, []);
  return (
    <div className='item'>
        <h2 className='titol'> LLISTA PLATS </h2>
        <div className="product-list">
          {productos.map((producto) => (
            <div className="product" key={producto._id}>
              <h2>{producto.name}</h2>
              <p>{producto.desc} - {producto.price}€</p>
              <button className='icon-button'>
                <IoMdAddCircleOutline className='icon-photo'/>
              </button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Item;