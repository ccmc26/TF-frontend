import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CSS/LoginSignUp.css'; // Asegúrate de usar los estilos existentes

const ForgotPassword = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
        await fetch(`${apiUrl}/api/users/${email}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: newPassword }),
        });

        // console.log(email, newPassword); // para comprobar si se envia todo correctamente
        navigate('/login');
    } catch (error) {
        console.error('Error en l\'actualització de la contrasenya:', error); 
    }
};

return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>No m'enrecorde de la contrasenya</h1>
            <p className="loginsignup-login">
            Torna a la <span><Link className='link-text' to='/login'>Pàgina d'inici de sessió</Link></span>
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
                    placeholder='Nova contrasenya'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Actualitza la contrasenya</button>
            </form>
        </div>
    </div>
);};

export default ForgotPassword;
