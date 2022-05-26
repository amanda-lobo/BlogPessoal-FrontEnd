import React from 'react';
import { Grid } from '@material-ui/core';
import Home from './pages/Home/Home';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import './App.css';



function App() {
  return (
    <>
     <Navbar />
     <Home />
     <Footer />
    </>
  );
}

export default App;