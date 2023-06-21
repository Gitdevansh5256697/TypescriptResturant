import React from 'react';
import {Routes,Route} from 'react-router-dom'
// import './App.css';
import About from './pages/About';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';

function App() {
  return (
  <>
  <Routes>
  <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
  </Routes>
  </>
  );
}

export default App;
