import React, { useState } from 'react';
import { AuthContext } from './AuthCOntext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

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
        setUser(data.user); // Guardar usuario en el contexto
        setRole(data.user.role);
        // console.log(data.user.role);
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
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, role }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
