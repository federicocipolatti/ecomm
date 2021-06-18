import React from 'react';
import './ItemStyle.css'

export const Item = props => {
  console.log(props);

  return <div className='card text-center'>
    <img src = {props.img} alt='logo'></img>
    <div className='card-body'>
      <h3 className='card-title'>{props.titulo}</h3>
      <p className='card-text text-secondary'>{props.subtitulo}</p>
      <button className='btn btn-outline-primary rounded-0'>AÑADIR AL CARRITO</button>
    </div>
       
  </div>
}