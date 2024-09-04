import '../styles/FormRegister.css'
import React from 'react'
import { useState,useEffect } from 'react';
import postUsuario from '../services/postUsers';
import GetUsers from '../services/getUsers';


function FormRegister() {
  ////// Carga de los datos///////////////
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const [correo, setMail]= useState('');
  const [city, setCity]= useState('');

  //// Seteo de datos////////////////
  const cargaContraseña = (event) => {
    setPassword(event.target.value);
  };
  const cargaUsername = (event) => {
    setUsername(event.target.value);
  };
  const cargaCorreo = (event) => {
    setMail(event.target.value);
  };
  
  const cargaCity = (event) => {
    setCity(event.target.value);
  };

  //// GET USERS PARA VALIDAR CORREO NO REPETIDO/////////
   //// Carga Datos Server hook///////////////
   const [dataUser, setDataUser]= useState([]);
   ////// LLamado al server, get fecth//////////
   useEffect(() => {
     const fetchUsers = async () => {
       const data = await GetUsers();
      setDataUser(data) /// obtengo dato del server mediante el hook
     };
     fetchUsers();
   }, []);   
  /////// Funcion post///////////
  const cargar = async () => { 
  const correoValido= dataUser.filter(usuario=> usuario.correo === correo)
  if (correoValido.length === 0) {
    const usuario={
      nombre:username,
      correo:correo,
      ciudad:city,
      contrasena: password
    }
    console.log(usuario);
    postUsuario(usuario);
  }     
  }
  ///////////Renderizacion de datos////////
  return (
    <div className='MainContainer'>
      <div className='ContainerForm'>
        <h1>Registrate</h1>
        <br />
        <label htmlFor="">Nombre</label>
        <input type="text" 
         id='username'
         name='username'
         placeholder='Ingrese su nombre'
         value={username}
         onChange={cargaUsername}
         required />
        <label htmlFor="">Correo</label>
        <input type="text" 
         id='correo'
         name='correo'
         placeholder='Ingrese su correo'
         value={correo}
         onChange={cargaCorreo}
         required/>
        <label htmlFor="">Ciudad</label>
        <input type="text" 
         id='city'
         name='city'
         placeholder='Ingrese su ciudad'
         value={city}
         onChange={cargaCity}
         required />
        <label htmlFor="">Contraseña</label>
        <input type="text"
        id='password'
        name='password'
        placeholder='Ingrese su contraseña'
        value={password}
        onChange={cargaContraseña}
        required />
        <button onClick={cargar}>Registrarse</button>
        </div>
    </div>
  )
}

export default FormRegister;