import React from 'react';
import { Routes, Route } from "react-router-dom";
import Contact from '../Header/Contact'
import Product from './Product'
import Cart from './Cart'
import Home from './Home';

export default function Main() {
    return (
        <div className='main'>
        <Routes>
            <Route className='home' path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
        </div>
    )
}
