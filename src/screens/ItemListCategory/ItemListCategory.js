import React, { useState, useEffect } from 'react';
import  './ItemListCategory.css';
import { ItemList } from '../ItemListContainer/components/ItemList/ItemList';
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
                    category: 'impar'
                },
            
                {
                    id: '2',
                    titulo: 'Producto 2',
                    subtitulo: 'Hola soy el producto 2',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'par'
                },
            
                {
                    id: '3',
                    titulo: 'Producto 3',
                    subtitulo: 'Hola soy el producto 3',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'impar'
                },

                {
                    id: '4',
                    titulo: 'Producto 4',
                    subtitulo: 'Hola soy el producto 4',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'par'
                },

                {
                    id: '5',
                    titulo: 'Producto 5',
                    subtitulo: 'Hola soy el producto 5',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'impar'
                },

                {
                    id: '6',
                    titulo: 'Producto 6',
                    subtitulo: 'Hola soy el producto 6',
                    img: '/img/game.ico',
                    mostrar: true,
                    category: 'par'
                }
            ]
        ), 2000);
    })
}

export const ItemListCategory = () => { 

    const [productos, setProductos] = useState([]); 
    const {categoryID} = useParams();

    const cambioData = () => {
        promiseContainer().then(data => {
            const dataNew = data.filter(element => element.category === categoryID);
            setProductos(dataNew);
        });
    }

    useEffect(() => {
        cambioData();
    },[categoryID])

    return <>
   
        {productos.length === 0 ? (<h1>Cargando Productos</h1>) : (  
        <ItemList productos={productos}/>   
        )}

    </>
}