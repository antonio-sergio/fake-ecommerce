import React from 'react';
import './App.css';
import {   Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/NavBar';
import Home from './components/Home';
import Products from './pages/Products';
import Product from './components/Product';
import Women from './pages/Women';
import Men from './pages/Men';

function App() {
  return (
    <>
     <Navbar />
     <Routes >
        <Route path="/" element={<Home />} />
        <Route  path="/womensclothing" element={<Women />} />
        <Route path="/products" element={<Products />}/>
        <Route  path='/products/:id' element={<Product />} />
        <Route  path="/mensclothing" element={<Men />} />
        
        {/* <Route  path='/cart' element={<Cart />} /> */}

      </Routes >
     

    </>
  );
}

export default App;
