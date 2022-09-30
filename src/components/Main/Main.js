import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../Header/About'
import Product from './Product'
import Cart from './Cart'
import Home from './Home';

export default function Main() {
    return (
        <div className='main'>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
        </div>
    )
}
