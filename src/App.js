import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";


const App = () =>{
  return <>
    <Navbar />
    <div className= "AppContainer">
      <ItemDetailContainer />
    </div>
  </>
}

export default App;