import React from 'react';
import '../styles/Cards.css';
import Biblioteca from '../img/20200610_3435_Lello.jpg';
import Libro from '../img/libro.jpg';

function Cards() {
  return (
    <div className='Container'>
        <div className='ContainerCards'>
            <div>
                <h1>MILESTONES</h1> <br />
                <p>Livraria Lello has been a bookstore very much of its times ever since 1906, carrying within it over a century of history and stories, imbued into its architectural surroundings and also into the bookish knowledge that shape the experiences of those who visit and those who read. In our Milestones, we take a look back at the most defining moments, introduce some of the most influential personalities and witnesses to the many odd stories that have cropped up along the successful route journeyed by Livraria Lello!</p>
                <a href="https://livrarialello.pt/en/milestones-2" className='link'>SINCE 1840</a> <br /> <br />
                <img src={Biblioteca} alt="Bibliioteca" />
            </div>
            <div>
                <h1>DREAMER’S COMMITMENTS</h1> <br />
                <p>Since 1906, our daily routine has been made up of dreams and achieving them. We are bold and work according to the same value. We are proud of what we do and, just like Pessoa, yearn to set off down new paths. We place the book at the centre of all our attentions and actions and perpetuate an attitude of absolute freedom to provide the foundations for a far broader intervention ranging across the entire field of culture. Aware not only of who we are, of our own DNA, but also of what we dream of becoming, we establish commitments to our community and to the wider world.</p>
                <a href="https://livrarialello.pt/en/dreamers-commitments" className='link'>FIND OUT MORE</a> <br /> <br />
                <img src={Libro} alt="Libro" />

            </div>
        </div>
    </div>
  )
}

export default Cards