import React from 'react';
//import './CodeSourceStyles.css';

const data = [
    {txt:'Entrega 1'},
    {txt:'Entrega 2'},
    {txt:'Entrega 3'},
    {txt:'Entrega 4'}
];

const Entrega = ({titulo, i}) => {
    <React.Fragment key={i}>
        <h4>{titulo}</h4>
        <button>Volver</button>
    </React.Fragment>
}

export const CodeSource = () => {

    const listaDeEntregas= data.map((element, i) => <Entrega titulo={element.txt} i={i}/>)

    return <div className = "listContainer">
        {listaDeEntregas}
    </div>
}