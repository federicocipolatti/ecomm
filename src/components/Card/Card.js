import React from 'react';
//import './CardStyle.css';

export const Card = props => {
    const {titulo, subtitulo, children} =props;

    return <div className= "cardContainer">
        <h2>{titulo}</h2>
        <h4>{subtitulo}</h4>
        {children}
    </div>
}