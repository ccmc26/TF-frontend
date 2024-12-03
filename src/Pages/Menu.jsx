import React, { useEffect, useState } from 'react'
import './CSS/Menu.css';
import Item from '../Components/Item/Item'

const Menu = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [productos, setProductos] = useState([]);
  const [tipos, setTipos] = useState([]);
  
  // fetch per a obtindre tots els tipos ASC
  useEffect(() => {
    // Hacemos la solicitud para obtener todos los tipos
    fetch(`${apiUrl}/api/tipos/tipos-con-productos`)
      .then((response) => response.json())
      .then((data) => setTipos(data)) // guarda dades
      .catch((error) => console.error('Error al cargar tipos:', error));
  }, [apiUrl]);
  
  // fem un fetch per a tindre tots els productes de manera ordenada ASC
  // utilitzem el useEffect per a controlar la asincronia i asegurar que
  // soles es fa quan una dependencia canvia
  useEffect(() => {
      // Hacemos la solicitud para obtener los datos desde el backend
      fetch(`${apiUrl}/api/productos/ordered`)
        .then((response) => response.json())
        .then((data) => setProductos(data)) // Guardamos los datos en el estado
        .catch((error) => console.error('Error al cargar productos:', error));
  },[tipos, apiUrl]);
  
  // fem un fetch per a tindre tots els tipus de productes


  return (
    <div> 
      <div className='item'> 
        <h2 className='titol'> LLISTA PLATS </h2> 
        <div className="product-list"> 
          {productos.map((producto) => ( 
            <Item key={producto._id} producto={producto} /> 
          ))} 
        </div> 
      </div> 
    </div>
  )
}

export default Menu;