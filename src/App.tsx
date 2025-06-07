import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { NavBar } from './Components/NavBar/NavBar';
import { arrForNav } from './Components/NavBar/navInfo';
import { Footer } from './Components/Footer/Footer';
import { Gallery } from './Components/Gallery/Gallery';
import { Signup } from './Components/Signup/Signup';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import PhotoGrid from './Components/PhotoGrid/PhotoGrid';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar theArr={arrForNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <PhotoGrid />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
