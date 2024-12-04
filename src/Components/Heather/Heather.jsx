import React from 'react'
import './Heather.css'

import { Link } from 'react-router-dom';


const Heather = () => {
  return (
    <div className="container">
       <div className="heather">
            <div className='header-contents'>
                <h2>Ordena el teu menjar preferit aci!!</h2>
                <p>Descobreix la nostra deliciosa selecció de plats! Preparats amb ingredients frescos i locals, el nostre menú està dissenyat per a delectar tots els paladars. Des de plats tradicionals fins a creacions innovadores, cada mos és una experiència culinària única. Fes clic i explora totes les opcions que tenim per a tu, i deixa't portar pels sabors autèntics. Bon profit!</p>
                <Link to='/menu'><button>Vore Menú</button></Link>
            </div>
        </div> 
    </div>
    
  )
}

export default Heather;
