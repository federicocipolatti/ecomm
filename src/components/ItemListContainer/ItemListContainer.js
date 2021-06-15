import React, { useState } from 'react';
import  './ItemListContainerStyle.css';
import { ItemList } from '../ItemList/ItemList';

const myPromise = new Promise((resolve, reject) => {

    const data = [
      {
          titulo: 'Producto 1',
          subtitulo: 'blablabla',
          img: 'asdasd'
      },
  
      {
          titulo: 'Producto 2',
          subtitulo: 'blablabla',
          img: 'asdasd'
      },
  
      {
          titulo: 'Producto 2',
          subtitulo: 'blablabla',
          img: 'asdasd'
      }
  ];

    if(data.length > 0){
        resolve(data)
    }else{
        reject("Oops! Error al obtener el array")
    }

    setTimeout (() => {
        myPromise
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }, 2000);
})

export const ItemListContainer = props => { 

    const [productos, setProductos] = useState([]); 

    return <div className='listContainer'>
        <ItemList />
    </div>
}