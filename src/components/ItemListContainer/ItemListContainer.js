import React, { useState, useEffect } from 'react';
import  './ItemListContainerStyle.css';
import { ItemList } from '../ItemList/ItemList';

const promiseContainer = props => {

    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(
            [
                {
                    id: '1',
                    titulo: 'Producto 1',
                    subtitulo: 'blablabla',
                    img: 'asdasd',
                    mostrar: true
                },
            
                {
                    id: '2',
                    titulo: 'Producto 2',
                    subtitulo: 'blablabla',
                    img: 'asdasd',
                    mostrar: true
                },
            
                {
                    id: '3',
                    titulo: 'Producto 3',
                    subtitulo: 'blablabla',
                    img: 'asdasd',
                    mostrar: true
                },

                {
                    id: '4',
                    titulo: 'Producto 4',
                    subtitulo: 'blablabla',
                    img: 'asdasd',
                    mostrar: false
                },

                {
                    id: '5',
                    titulo: 'Producto 5',
                    subtitulo: 'blablabla',
                    img: 'asdasd',
                    mostrar: false
                }
            ]
        ), 2000);
    })
}

export const ItemListContainer = () => { 

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

    return <>
        {productos.lenght === 0 ? (<h1>Cargando...</h1>) : (  
            <ItemList productos={productos}/>   
        )}
    </>
}