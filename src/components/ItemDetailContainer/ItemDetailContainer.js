import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';

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
                    detalle: 'Detalle Prducto 1 bla bla bla bla'
                },
            
                {
                    id: '2',
                    titulo: 'Producto 2',
                    subtitulo: 'Hola soy el producto 2',
                    img: '/img/game.ico',
                    mostrar: false,
                    detalle: 'Detalle Prducto 1 bla bla bla bla'
                },
            
                {
                    id: '3',
                    titulo: 'Producto 3',
                    subtitulo: 'Hola soy el producto 3',
                    img: '/img/game.ico',
                    mostrar: false,
                    detalle: 'Detalle Prducto 1 bla bla bla bla'
                },

                {
                    id: '4',
                    titulo: 'Producto 4',
                    subtitulo: 'Hola soy el producto 4',
                    img: '/img/game.ico',
                    mostrar: false,
                    detalle: 'Detalle Prducto 1 bla bla bla bla'
                },

                {
                    id: '5',
                    titulo: 'Producto 5',
                    subtitulo: 'Hola soy el producto 5',
                    img: '/img/game.ico',
                    mostrar: false,
                    detalle: 'Detalle Prducto 1 bla bla bla bla'
                },

                {
                    id: '6',
                    titulo: 'Producto 6',
                    subtitulo: 'Hola soy el producto 6',
                    img: '/img/game.ico',
                    mostrar: false,
                    detalle: 'Detalle Prducto 1 bla bla bla bla'
                }
            ]
        ), 2000);
    })
}

export const ItemDetailContainer = () => { 

    const [productos, setProductos] = useState([]); 

    const cambioData = () => {
        promiseContainer().then(data => {
            const dataNew = data.filter(element => element.mostrar)
            setProductos(dataNew)
        })
    }

    useEffect(() => {
        cambioData();
    },[])

    return <div className="detailContainer">
        {productos.length === 0 ? (<h1>Cargando...</h1>) : (  
        <ItemDetail productos={productos}/>   
        )}
    </div>
}