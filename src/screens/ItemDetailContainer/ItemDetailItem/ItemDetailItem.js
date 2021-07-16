import React from 'react';
//import './ItemStyle.css';
import { useHistory } from 'react-router-dom';

export const ItemDetailItem = ({item}) => {

  const history = useHistory();

  return <div className='card text-center border-dark'>
    <img className='img' src = {item.img} alt='logo'></img>
    <div className='card-body'>
      <h3 className='card-title'>{item.titulo}</h3>
      <p className='card-subtitle text-secondary'>{item.subtitulo}</p>
      <p className='card-subtitle text-primary'>{item.precio}</p>
      <button className='btn btn-light btn-outline-dark rounded-0' onClick={()=> history.push(`/item/${item.id}`)}>DETALLES</button>
    </div>     
  </div>
}