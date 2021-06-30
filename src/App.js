import React from "react";
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer';
import { Router } from './components/Router/Router';
import { BrowserRouter } from 'react-router-dom';
import { ItemDetailContainer } from "./screens/ItemDetailContainer/ItemDetailContainer";

const App = () =>{
  return ( 
    <BrowserRouter>
      <Navbar/>
      <Router/>
    </BrowserRouter>
  )
}

export default App;