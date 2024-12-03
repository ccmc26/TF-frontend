import React, { useEffect, useState } from 'react'
import './CSS/Menu.css';
import Item from '../Components/Item/Item'

const Menu = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [productos, setProductos] = useState([]);
  
  // fem un fetch per a tindre tots els productes de manera ordenada ASC
  // utilitzem el useEffect per a controlar la asincronia i asegurar que
  // soles es fa quan una dependencia canvia
  
  useEffect(() => {
    fetch(`${apiUrl}/api/ptp`)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al cargar productos: '))
  },[apiUrl]);

  let lastTipo = "lolololo";

  return (
    <div> 
      <div className='item'> 
        <h1 className='titol'> LLISTA PLATS </h1> 
        <div className="product-list"> 
        {productos.map((producto) => { 
          const tipoChanged = producto.nombreTipo !== lastTipo; 
          lastTipo = producto.nombreTipo; 
          console.log(tipoChanged);
          return ( 
            <div key={producto._id}> 
            {tipoChanged ? ( 
              <> 
                <h2>{producto.nombreTipo.toUpperCase()}</h2> 
                <Item producto={producto} /> 
              </> 
            ) : ( 
              <Item producto={producto} /> 
            )} 
          </div> ); 
        })}
        </div> 
      </div> 
    </div>
  )
}

export default Menu;