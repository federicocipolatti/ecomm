import React from 'react';
import './ItemStyle.css';
import { useHistory, useParams } from 'react-router-dom';

export const Item = props => {

  const detail= "detail";

  const {detailID} = useParams();

  const history = useHistory();


  return <div className='card text-center bg-light border-dark'>
    <img className='img' src = {props.img} alt='logo'></img>
    <div className='card-body'>
      <h3 className='card-title'>{props.titulo}</h3>
      <p className='card-subtitle text-secondary'>{props.subtitulo}</p>
      <button className='btn btn-outline-dark rounded-0' onClick={()=> history.push(`/detail/${detail}`)}>DETALLES</button>
    </div>     
  </div>
}