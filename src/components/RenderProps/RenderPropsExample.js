import React from 'react';
import {Card} from './Card/Card';
import {CodeSource} from './CodeSource/CodeSource';

const dataCard = {
    titulo: 'Curso React',
    subtitulo: 'Alumno Federico', 
    entregas: {
        entrega1: 'CRA',
        entrega2: 'Navbar'
    }
}

export const RenderPropsExample = props => {
    return <Card {...dataCard}
        render={data => <CodeSource {...data} />}>
    </Card>
}