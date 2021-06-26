import React from 'react';
import './ItemStyle.css'

export const Item = props => {

  return <div className='card text-center bg-light border-dark'>
    <img className='img' src = {props.img} alt='logo'></img>
    <div className='card-body'>
      <h3 className='card-title'>{props.titulo}</h3>
      <p className='card-subtitle text-secondary'>{props.subtitulo}</p>
      <button className='btn btn-outline-dark rounded-0'>AÑADIR AL CARRITO</button>
    </div>
       
  </div>
}