import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Afegir.css'

function CreateProductForm() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [name, setName] = useState(''); 
    const [desc, setDesc] = useState(''); 
    const [idTipo, setIdTipo] = useState(''); 
    const [price, setPrice] = useState(''); 

    const [tipo, setTipo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${apiUrl}/api/tipos`)
          .then((response) => response.json())
          .then((data) => setTipo(data))
          .catch((error) => console.error('Error al cargar productos: '))
      },[apiUrl]);
    
    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/api/productos`, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json', }, 
                body: JSON.stringify({ name, desc, _idTipo: idTipo, price }), 
            }); 

            const data = await response.json(); 

            if (!response.ok) { 
                alert(data.message || 'Error en el registre');
                throw new Error('Error al afegir el producte'); 
            } 
            navigate('/menu');
            // console.log('Producte afegit:', data); 
        } catch (error) { 
            console.error('Error:', error); 
        } 
    }; 
return ( 
    <div className="add-product-form"> 
        <form onSubmit={handleSubmit}> 
            <div> 
                <label>Nom del Producte</label> 
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
            </div>
            <div> 
                <label>Descripció</label> 
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div> 
            <div> 
                <label>Tipus de Producte ID</label> 
                <select value={idTipo} onChange={(e) => setIdTipo(e.target.value)}> 
                    <option value="">Selecciona un tipus</option> 
                    {tipo.map(t => ( 
                        <option key={t._id} value={t._id}>{t.name}</option> 
                    ))} 
                </select>
            </div> 
            <div> 
                <label>Preu</label> 
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /> 
            </div> 
            <button type="submit">Afegir Producte</button> 
        </form> 
    </div> 
); };

export default CreateProductForm;