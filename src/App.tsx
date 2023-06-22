import React from 'react';
import {Routes,Route} from 'react-router-dom'
// import './App.css';
import About from './pages/About';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';
import SignUp from './auth/SignUp';
import Login from './auth/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    //Routes Are Here
  <>
  <ToastContainer theme='colored'></ToastContainer>
  <Routes>
  <Route path="/" element={<Home />} />
  {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login   />} />
          {/* <Route path="/login" element={<Login/>} /> */}
          
          <Route path="*" element={<Pagenotfound />} />
  </Routes>
  </>
  );
}

export default App;
