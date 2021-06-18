import React from 'react';
import { Item } from '../Item/Item'
import './ItemListStyle.css'

export const ItemList = (productos) => {

    return <>
        <div className='container'>
            <div className='row'>
            {productos.map(Item => (
                <div className='col-md-4' key={productos.id}>
                    <Item 
                    titulo={productos.titulo} 
                    subtitulo={productos.subtitulo} 
                    img={productos.img}
                    />
                </div>   
                ))
            }
            </div> 
        </div>
    </>
}