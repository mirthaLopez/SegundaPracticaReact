import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavStore from '../components/NavStore';
import BookList from '../components/BookList';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate= useNavigate();
  function CerrarSesion() {
    localStorage.removeItem("Autenticacion")
    navigate('/');
  };
  return (
    <div>
         <Header />
        <NavStore />
        <BookList />
        <button onClick={CerrarSesion}>Cerrar sesion</button>
        <Footer />
    </div>
  )
}

export default Home