import React from 'react'
import '../styles/FormLogIn.css'
import { useState } from 'react';
function FormLogIn() {
  ////// Carga de los datos///////////////
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');

  const cargaContraseña =(event) => {
    setPassword(event.target.value);
  };
  const cargaUsuario =(event) => {
    setUsername(event.target.value);
  };

  const cargar = () => {
    console.log(username);
    console.log(password);
    
  };
  

  ///////////Renderizado////////////
  return (
    <div className='MainContainer'>
        <div className='ContainerForm'>
        <h1>Ingresa a tu Cuenta</h1>
        <label htmlFor="">Correo</label>
        <input type="text" 
        id='username'
        name='username'
        placeholder='Ingrese su nombre'
        value={username}
        onChange={cargaUsuario}
        required/>
        <label htmlFor="">Contraseña</label>
        <input type="text"
        id='password'
        name='password'
        placeholder='Ingrese su contraseña'
        value={password}
        onChange={cargaContraseña}
        required />
        <button onClick={cargar}>Ingresar</button>
       </div>
    </div>
  )
}

export default FormLogIn