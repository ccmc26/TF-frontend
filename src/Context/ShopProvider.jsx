import React, { useState, useEffect } from 'react';
import { ShopContext } from './ShopContext';

const ShopProvider = ({ children, newItem }) => {
  // variable de estado y su funcion para actualizarla 
  // inicializada con un objeto que contiene una lista vacia
  const [shopData, setShopData] = useState({ items: []});

  // efecto que se ejecutara cada vez que newItem cambie
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`http://localhost:8080/api/productos/${newItem}`);
        if(!response.ok){
          throw new Error('Error en la peticion');
        }
        const data = await response.json();
        setShopData({items: data});
      }catch(error){
        console.error("ERROR: " + error);
      }
    };
    fetchData();
  }, [newItem]);
  return (
    <ShopContext.Provider value={{ shopData, setShopData }}> 
      {children} 
    </ShopContext.Provider>
  )
}

export default ShopProvider;