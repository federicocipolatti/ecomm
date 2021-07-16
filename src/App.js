import React from "react";
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Router } from './components/Router/Router';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return ( 
    <BrowserRouter>
      <Navbar/>
      <Router/>
    </BrowserRouter>
  )
}

export default App;