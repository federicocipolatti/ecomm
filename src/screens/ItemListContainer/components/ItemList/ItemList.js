import React from 'react';
import { Item } from '../Item/Item'
import './ItemListStyle.css'

export const ItemList = ({productos}) => {

    return (
        <div className='listContainer'>
            <div className='row'>
                {productos.map(item => (
                    <div className='col-md-4 item' key={item.id}>
                        <Item titulo={item.titulo} 
                        subtitulo={item.subtitulo} 
                        img={item.img}
                        precio={item.precio}/>
                    </div>   
                    ))
                }
            </div> 
        </div>
    )
}