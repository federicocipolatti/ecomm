import React from 'react';
//import './ItemStyle.css';
import { ItemCount } from '../components/ItemCount/ItemCount';

export const ItemDetailItem = ({item}) => {

  return <div className='card text-center border-dark'>
    <img className='img' src = {item.img} alt='logo'></img>
    <div className='card-body'>
      <h3 className='card-title'>{item.titulo}</h3>
      <p className='card-subtitle text-secondary'>{item.subtitulo}</p>
      <p className='card-subtitle text-primary'>{item.precio}</p>
    </div>    
    <ItemCount/>
  </div>
}