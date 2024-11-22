import React, { useState } from 'react'
import './CSS/LoginSignUp.css';

import { Link, useNavigate } from 'react-router-dom';
// import { GoPersonFill, GoPasskeyFill } from "react-icons/go";

const LoginSignUp = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que se recargue la página
  
    try {
      const response = await fetch(`${apiUrl}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Enviamos el email y contraseña al servidor
      });
  
      // Leemos la respuesta como texto
      const responseText = await response.text();
  
      // Intentamos convertir el texto a JSON
      let data;
      try {
        data = JSON.parse(responseText); // Convertimos a JSON
      } catch (error) {
        console.error("Error al analizar JSON:", error);
        alert("Hubo un problema al procesar la respuesta del servidor."); // Mostrar alerta si el JSON no es válido
        return; // Salimos de la función si la respuesta no es JSON válido
      }
  
      if (response.ok) {
        // Si el login es exitoso
        console.log('Usuario autenticado:', data); // Aquí puedes manejar los datos del usuario
        // setMenu("menu");
        navigate('/menu'); // Redirige a '/menu'
      } else {
        // Si hay un error (credenciales incorrectas)
        console.log(data.message || "Correo o contraseña incorrectos"); // Muestra el mensaje de error en consola
        alert(data.message || "Correo o contraseña incorrectos"); // Muestra el mensaje de error en alerta
      }
    } catch (error) {
      console.error("ERROR: " + error);
      alert("Hubo un problema con la conexión al servidor. Intenta nuevamente."); // Muestra el error en una alerta
    }
  };
      
    
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Inicia sessió</h1>
        <p className="loginsignup-login">Ja tens un compte? <span><Link className='link-text' to='/register'>Registra't</Link></span></p>
        <form onSubmit={handleSubmit}> {/* Se agrega el formulario con onSubmit */}
          <div className="loginsignup-fields">
            <input 
              type="email" 
              placeholder='Adreça electrònica' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
            />
            <input 
              type="password" 
              placeholder='Contrasenya' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
            />
          </div>
          <p style={{ marginTop: "20px" }} className="loginsignup-login">No me'n recorde de la <span><Link className='link-text' to='/password'>contrasenya</Link></span></p>
          <button type="submit">LogIn</button> {/* Botón para enviar el formulario */}
        </form>
      </div>
    </div>
  );
}

export default LoginSignUp;