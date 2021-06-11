import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
//import { CardContador } from './components/Card/Card';
//import { CodeSource } from './components/CodeSource/CodeSource';
//import { List } from './components/List/List';
//import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
//import { CardWidget } from './components/CardWidget/CardWidget';
//import { RenderPropsExample } from './components/RenderProps/RenderPropsExample';
//import { StateExample } from './components/ComponentesConEstado/StateExample';
import { ItemCount } from './components/ItemCount/ItemCount';

const App = props => {
  return <>
  <Navbar />
  <div className= "AppContainer">
    <ItemCount/>
  </div>
  </>
}

export default App;