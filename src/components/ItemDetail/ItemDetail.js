import React from 'react';
import { CardDetail } from '../CardDetail/CardDetail'

export const ItemDetail = ({productos}) => {

    return <>
        <div className='listContainer'>
            <div className='row'>
                {productos.map(item => (
                    <div className='col-md-4' key={item.id}>
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