import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const data = [1, 2, 3, 4, 5];

export const Tercero = () => {

    const history = useHistory();
    const {id} = useParams();

    return <>
    <h2>{`el id que recibi ${data[id]}`}</h2>
    <button onClick={e=> history.push('/segundo')}>Ir a Segundo!</button>
    </>
}