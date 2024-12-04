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
      <h2 className='h1t'>Explora el nostre menú</h2>
      <p className='pt'>Explora les nostres categories i troba el teu pròxim plat favorit.<br/>Des d'entrants deliciosos fins a postres irresistibles, la nostra varietat satisfà tots els gustos.</p>
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