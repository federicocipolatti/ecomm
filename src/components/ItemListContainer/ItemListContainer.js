import React from 'react';
import  './ItemListContainerStyle.css';

export const ItemListContainer = props => {
    const { titulo, children } =props;

    return <div className = "listContainer">
        <h2>{titulo}</h2>
        {children}
    </div>
}