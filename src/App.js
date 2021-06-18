import React from "react";
import './app.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
//import express from 'express';
//import cors from 'cors';
//import { Item } from './components/Item/Item'
//import { ItemList } from './components/ItemList/ItemList'

//import TaskRoutes from './routes/task.routes'

//const app = express();

//app.use(cors());
//app.set('port', process.env.PORT || 8080);

//app.get('/', (req, res) =>{
  //res.json({txt:'welcome to my aplication'})
//});

//app.use('/api/tasks', TaskRoutes);

const app = props =>{
  return <>
    <Navbar />
      <div className= "AppContainer">
        <ItemListContainer />
    </div>
  </>
}

export default app;