import React from 'react';
import { CardDetail } from '../CardDetail/CardDetail.jsx'
import './ItemDetailStyle.css'

export const ItemDetail = ({productos}) => {

    return <>
        <div className='listContainer'>
            <div>
                {productos.map(item => (
                    <div key={item.id}>
                        <CardDetail titulo={item.titulo} 
                        subtitulo={item.subtitulo} 
                        img={item.img}
                        detalle={item.detalle}/>
                        
                    </div>   
                    ))
                }
            </div> 
        </div>
    </>
}