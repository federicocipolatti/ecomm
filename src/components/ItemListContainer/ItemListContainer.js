import React from 'react';
import  './ItemListContainerStyle.css';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = props => {

    return <div className = "listContainer">
        <ItemList/>
    </div>
}