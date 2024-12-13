import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthCOntext'; // Importar el hook del contexto
import './CSS/LoginSignUp.css';

const LoginSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Usar la función `login` del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llamar a la función `login` proporcionada por el contexto
      await login(email, password);
      navigate('/menu'); // Redirigir a la página principal después de iniciar sesión
    } catch (error) {
      alert(error.message); // Mostrar errores al usuario (si falla el login)
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Inicia sessió</h1>
        <p className="loginsignup-login">
          Ja tens un compte? <span><Link className='link-text' to='/register'>Registra't</Link></span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
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
          </div>
          <p style={{ marginTop: "20px", marginBottom: "-10px"}} className="loginsignup-login">
            No me'n recorde de la <span><Link className='link-text' to='/password'>contrasenya</Link></span>
          </p>
          <button type="submit">LogIn</button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUp;
