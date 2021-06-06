import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
//import { Card } from './components/Card/Card';
//import { CodeSource } from './components/CodeSource/CodeSource';
//import { List } from './components/List/List';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
//import { CardWidget } from './components/CardWidget/CardWidget';

const App = props => {
  return <>
  <Navbar />
  <div className= "AppContainer">
    <ItemListContainer titulo="PROXIMAMENTE">
      <img src="game.ico"></img>
    </ItemListContainer>
  </div>
  </>
}

export default App;