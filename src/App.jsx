import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import './App.css'
import Home from './assets/Components/pages/Home';
import About from './assets/Components/pages/About';
import Services from './assets/Components/pages/Services';
import Contact from './assets/Components/pages/Contact';
import Footer from './assets/Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;