import React from 'react';
//import '.CardStyle.css'
import { CodeSource } from './CodeSource/CodeSource';
import { CardConEstado } from './Card/Card';

export const StateExample = props => {
    return <CardConEstado titulo="Hola" subtitulo="Chau">
        <CodeSource/>
    </CardConEstado>
}