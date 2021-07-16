import React from 'react';
import './ItemDetailItemStyle.css';
import { ItemCount } from '../components/ItemCount/ItemCount';

export const ItemDetailItem = ({item}) => {

  return <div className="card mb-3" styles={ "max-width: 540px;"}>
  <div className="row no-gutters">
    <div className="col-md-4">
        <img className='imgDetail' src = {item.img} alt='logo'></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className='tituloDetail card-title'>{item.titulo}</h3>
        <p className='subtituloDetail card-subtitle text-secondary'>{item.subtitulo}</p>
        <p className='precioDetail card-subtitle text-primary'>{item.precio}</p>
      </div>
    </div>
  </div>
    <ItemCount/>
    <button className='btnDetail btn-light btn-outline-dark rounded-0'>AÑADIR AL CARRITO</button>
</div>
}