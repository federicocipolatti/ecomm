import React, { useState, useEffect } from 'react';
import { ItemDetail } from './components/ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';

const promiseContainer = () => {

    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(
            [
                {
                    id: '1',
                    titulo: 'Producto 1',
                    subtitulo: 'Hola soy el producto 1',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'impar',
                    precio: '$1000,00'
                },
            
                {
                    id: '2',
                    titulo: 'Producto 2',
                    subtitulo: 'Hola soy el producto 2',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'par',
                    precio: '$1200,00'
                },
            
                {
                    id: '3',
                    titulo: 'Producto 3',
                    subtitulo: 'Hola soy el producto 3',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'impar',
                    precio: '$1500,00'
                },

                {
                    id: '4',
                    titulo: 'Producto 4',
                    subtitulo: 'Hola soy el producto 4',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'par',
                    precio: '$2000,00'
                },

                {
                    id: '5',
                    titulo: 'Producto 5',
                    subtitulo: 'Hola soy el producto 5',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'impar',
                    precio: '$2400,00'
                },

                {
                    id: '6',
                    titulo: 'Producto 6',
                    subtitulo: 'Hola soy el producto 6',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'par',
                    precio: '$3500,00'
                }
            ]
        ), 2000);
    })
}


export const ItemDetailContainer = () => { 

    const [detail, setDetail] = useState([]); 
    const {itemID} = useParams();

    const cambioData = () => {
        promiseContainer().then(data => {
            const dataNew = data.filter(element => element.id === itemID);
            setDetail(dataNew);
        });
    }

    useEffect(() => {
        cambioData();
    },[itemID])

    return <>   
        <ItemDetail detail={detail}/>         
    </>
       
}