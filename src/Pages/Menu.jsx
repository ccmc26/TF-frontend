import React, { useEffect, useState } from 'react'
import './CSS/Menu.css';
import Item from '../Components/Item/Item'

const Menu = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [productos, setProductos] = useState([]);
  
  // fetch a la tabla transicio per fer-ho mes sencill
  // cada producto es un item en la corresponguent info
  useEffect(() => {
    fetch(`${apiUrl}/api/ptp`)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al cargar productos: '+ error))
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
          // console.log(tipoChanged);
          return ( 
            <div key={producto._id}> 
            {tipoChanged ? ( 
              <> 
                <h2 id={producto.tipoProductoId} >
                  {producto.nombreTipo.toUpperCase()}
                </h2> 
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