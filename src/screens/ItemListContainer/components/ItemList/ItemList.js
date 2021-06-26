import React from 'react';
import { Item } from '../ItemListContainer/components/Item/Item'
import './ItemListStyle.css'

export const ItemList = ({productos}) => {

    return <>
        <div className='listContainer'>
            <div className='row'>
                {productos.map(item => (
                    <div className='col-md-4' key={item.id}>
                        <Item titulo={item.titulo} 
                        subtitulo={item.subtitulo} 
                        img={item.img}/>
                    </div>   
                    ))
                }
            </div> 
        </div>
    </>
}