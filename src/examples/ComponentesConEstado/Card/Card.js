import React, { useState, useEffect } from 'react';
//import './CardStyle.css';

export const CardConEstado = props => {

    const { titulo, subtitulo, children } = props;
    const [leida, setLeida] = useState(false);


    useEffect(
    () => console.log('Me ejecute'), [leida]
    );


    return <div className= "cardContainer">
        <h2>{titulo}</h2>
        <h4>{subtitulo}</h4>
        {children} 
        <button onClick={ e => setLeida(!leida)}>{leida ? 'Macar no leida' : 'Marcar leida'}</button>
        {leida && <h5>LEIDA</h5>} 
    </div>
}