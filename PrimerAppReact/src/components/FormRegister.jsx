import '../styles/FormRegister.css'
import React from 'react'

function FormRegister() {
  return (
    <div className='MainContainer'>
      <div className='ContainerForm'>
        <h1>Registrate</h1>
        <br />
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Correo</label>
        <input type="text" />
        <label htmlFor="">Ciudad</label>
        <input type="text" />
        <label htmlFor="">Contraseña</label>
        <input type="text" />
        <button>Enviar</button>
        </div>
    </div>
  )
}

export default FormRegister;