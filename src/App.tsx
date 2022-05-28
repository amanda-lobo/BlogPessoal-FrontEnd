import React from 'react';
import { Grid } from '@material-ui/core';
import {  Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;