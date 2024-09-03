import Coronel from '../img/coronel.jpg';
import Orwell from '../img/1984.png'
import Jarra from '../img/jarra.jpg'
import Quijote from '../img/quijote.jpg'
import Chivo from '../img/Chivo.jpg'
import Rostro from '../img/rostro.jpeg'
import '../styles/BookList.css'
///////////Arreglo lista libros////////////
const ListaLibros= [
    {
        nombre:"1984",
        autor:"George Orwell",
        src: Orwell
    },
    {
        nombre:"El Coronel no tiene quiuen le escriba",
        autor:"Gabriel Gracia Marques",
        src: Coronel
    }, 
    {
        nombre:"A jarra branca",
        autor:"Gilda Nunes Barata e Anabela Dias",
        src: Jarra
    },
    {
        nombre:"Don Quijote de la Mancha",
        autor:"Miguel de Cervantes",
        src: Quijote
    },
    {
        nombre:"La Fiesta del Chivo",
        autor:"Mario Vargas LLosa",
        src: Chivo
    }, 
    {
        nombre:"El primer Caso de Unamuno",
        autor:"Luis Garcia Jambrina",
        src: Rostro
    }

]

///////////Funcion Mapeo Libros////////////////

import React from 'react'

function BookList() {
    const Libros = ListaLibros.map((libro,index) =>
        <div key={index}>
            <img  src={libro.src} alt="Portada" className='Portada'/>
            <h3>{libro.nombre}</h3>
            <p>{libro.autor}</p>
            {/*<button>Añadir al Carrito</button>*/}
        </div>
      );
  return (
    <div className='contenedorPrimario'>
    <div className='contenedorLibros'>{Libros}</div>
    </div>
  )
}

export default BookList
