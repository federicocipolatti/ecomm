import React from 'react';
import './ItemStyle.css';
import { useHistory } from 'react-router-dom';

export const Item = ({detailID}) => {

  const history = useHistory();

  return <div className='card text-center border-dark'>
    <img className='img' src = {detailID.img} alt='logo'></img>
    <div className='card-body'>
      <h3 className='card-title'>{detailID.titulo}</h3>
      <p className='card-subtitle text-secondary'>{detailID.subtitulo}</p>
      <p className='card-subtitle text-primary'>{detailID.precio}</p>
      <button className='btn btn-light btn-outline-dark rounded-0' onClick={()=> history.push(`/item/${detailID.id}`)}>DETALLES</button>
    </div>     
  </div>
}