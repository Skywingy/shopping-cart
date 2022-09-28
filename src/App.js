import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import About from './components/Header/About';
import Product from './components/Main/Product';
import Cart from './components/Main/Cart';
import Home from './components/Main/Home';


export default function App() {
  return (
    <>
    <Header/>
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}
