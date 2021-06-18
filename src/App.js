import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";


const App = () =>{
  return <>
    <Navbar />
    <div className= "AppContainer">
      <ItemListContainer />
    </div>
  </>
}

export default App;