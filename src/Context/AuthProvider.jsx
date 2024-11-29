import React, { useState } from 'react';
import { AuthContext } from './AuthCOntext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${apiUrl}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (error) {
        console.error('Error al analizar JSON:', error);
        throw new Error('Respuesta del servidor inválida');
      }

      if (response.ok) {
        setUser(data); // Guardar usuario en el contexto
        return data;
      } else {
        throw new Error(data.message || 'Correo o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en la autenticación:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null); // Limpiar el usuario
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
