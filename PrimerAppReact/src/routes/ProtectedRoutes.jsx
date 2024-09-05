import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes=({children}) => {
    const UsuarioAutenticado = localStorage.getItem('Autenticacion') === 'true';
    if (UsuarioAutenticado) {
        return children;
    }
  return <Navigate to="/Login" />
}

export default ProtectedRoutes