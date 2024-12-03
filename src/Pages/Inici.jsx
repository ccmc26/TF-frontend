import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Heather from '../Components/Heather/Heather'

import './CSS/Inici.css'
import { Link } from 'react-router-dom';


const Inici = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/tipos`)
      .then((response) => response.json())
      .then((data) => setTipos(data))
      .catch((error) => console.error('Error al cargar productos: '))
  },[apiUrl]);

  return (
    <div>
      <Hero/>
      <Heather/>
      <div className='menjars'>
      {tipos.map((tipo) => {
        return (
          <div className="circle" key={tipo._id}>
              <Link className='text' to={`/menu#${tipo._id}`}>
                {tipo.name.toUpperCase()}
              </Link>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default Inici;