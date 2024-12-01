import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthCOntext';
import './CSS/LoginSignUp.css'; // Asegúrate de importar los estilos CSS

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surnames, setSurnames] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, name, surnames }),
      });

      const data = await response.json();

      if (response.ok) {
        // Iniciar sesión automáticamente después del registro
        await login(email, password);
        navigate('/menu'); // Redirigir al dashboard u otra ruta
      } else {
        alert(data.message || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Hubo un problema con la conexión al servidor. Intenta nuevamente.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Registra't</h1>
        <p className="loginsignup-login">
          Ja tens un compte? <span><Link className='link-text' to='/login'>Inicia sessió</Link></span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder="Nom d\'usuari"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder='Adreça electrònica'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Contrasenya'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder='Nom'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder='Cognoms'
              value={surnames}
              onChange={(e) => setSurnames(e.target.value)}
            />
          </div>
          <button type="submit">Registra't</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
