import React from 'react';
import './ItemDetailStyle.css'

export const ItemDetail = ({info}) => {

    return (
        <div className='listDetailContainer'>
            <div className='row rowDetail'>
                {info.map(item => (
                    <div className='cardDetail text-center bg-light border-dark'>
                    <img className='imgDetail' src = {item.img} alt='logo'></img>
                    <div className='card-bodyDetail'>
                      <h3 className='card-titleDetail'>{item.titulo}</h3>
                      <p className='card-subtitleDetail text-secondary'>{item.subtitulo}</p>
                      <button className='btnDetail btn-outline-dark rounded-0'>AGREGAR AL CARRITO</button>
                    </div>     
                  </div>   
                    ))
                }
            </div> 
        </div>
    )
}