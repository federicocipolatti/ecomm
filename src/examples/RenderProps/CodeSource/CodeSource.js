import React from 'react';
//import './CodeSourceStyles.css';

export const CodeSource = ({ entrega1, entrega2 }) => {
    return <div className = "listContainer">
        <h4>{entrega1}</h4>
        <button>Ver código</button>
        <h4>{entrega2}</h4>
        <button>Ver código</button>
    </div>
}