import React, { useState, useEffect } from 'react';
import { ItemDetail } from './components/ItemDetail/ItemDetail.jsx';
const data = [
    {
        id: '1',
        titulo: 'Producto',
        subtitulo: 'Hola soy el producto',
        img: '/img/game.ico',
        mostrar: true,
        category: 'impar'
    }
];
  
const promise = new Promise((resolve, reject) => {
    resolve(data);
});

export const ItemDetailContainer = () => { 

    const [info, setInfo] = useState([]);

    useEffect(() => {
    promise
        .then(data =>{
            setInfo(data);
        })
    },[])

    return <>
        
        {info.length === 0 ? (<h1>Cargando...</h1>) : (  
        <ItemDetail info={info}/>   
        )}
         
    </>
       
}