import React from 'react';
import './ItemStyle.css';
import { useHistory } from 'react-router-dom';

export const Item = props => {

  const history = useHistory();

  return <div className='card text-center border-dark'>
    <img className='img' src = {props.img} alt='logo'></img>
    <div className='card-body'>
      <h3 className='card-title'>{props.titulo}</h3>
      <p className='card-subtitle text-secondary'>{props.subtitulo}</p>
      <p className='card-subtitle text-primary'>{props.precio}</p>
      <button className='btn btn-light btn-outline-dark rounded-0' onClick={()=> history.push(`/detail`)}>DETALLES</button>
    </div>     
  </div>
}