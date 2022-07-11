import React from 'react';
import './App.css';
import {   Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import BestSellers from './components/BestSellers';

function App() {
  return (
    <>
     <Navbar />
     <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        {/* <Route  path='/products' element={<Products />} /> */}
        {/* <Route  path='/products/:id' element={<Product />} /> */}
        {/* <Route  path='/cart' element={<Cart />} /> */}

      </Routes >
     <BestSellers />

    </>
  );
}

export default App;
