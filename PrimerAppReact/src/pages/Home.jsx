import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavStore from '../components/NavStore';
import BookList from '../components/BookList';
function Home() {
  return (
    <div>
         <Header />
        <NavStore />
        <BookList />
        <Footer />
    </div>
  )
}

export default Home