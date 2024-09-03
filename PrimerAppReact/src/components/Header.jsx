import '../styles/Header.css'
import React from 'react'
import Logotipo from '../img/logo.svg';
import {Link} from "react-router-dom"; //// necesario para poder usar link to

function Header() {
  return (
   <header>
    <nav>
        <img src={Logotipo} alt="LogoStore" className='logo' />
        <Link to="/Home"> Home </Link>
        <Link to="/Register"> Register </Link>
        <Link to="/Login"> LogIn </Link>
        <Link to="/About"> About Us </Link>
    </nav>
   </header>
  )
}

export default Header