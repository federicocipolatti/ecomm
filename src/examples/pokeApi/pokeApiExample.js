import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const pokeApiExample = () => {

const [pokemons, setPokemons] = useState([]);

const getPokemons = () => {
    /* fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(data => setPokemons(data.results)) */
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => {
            setPokemons(response.data.results)
        })
        .catch(error => console.log(error))
   
}

useEffect(() =>{
    getPokemons();
}, []);

    return <>
        <ul>
            {/* {{pokemons.map((pokemons, i) => <li key={i}>{pokemons.name}</li>)}} */}
        </ul>
    </>
}