import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetailStyle.css';

export const ItemDetail = ({info}) => {

    return (
        <div className='listDetailContainer'>
            <div className='flex-row rowDetail'>
                {info.map(item => (
                    <div className='cardDetail text-center border-dark'>
                    <img className='imgDetail' src = {item.img} alt='logo'></img>
                    <div className='card-bodyDetail'>
                        <h3 className='card-titleDetail'>{item.titulo}</h3>
                        <p className='card-subtitleDetail text-secondary'>{item.subtitulo}</p>
                        <p className='card-subtitleDetail text-primary'>{item.precio}</p>
                        <ItemCount/>  
                    </div>     
                  </div>   
                    ))
                }
            </div> 
        </div>
    )
}