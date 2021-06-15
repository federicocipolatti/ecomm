import React from 'react';
import { Item } from '../Item/Item'
import './ItemListStyle.css'



export const ItemList = props => {
    return <div className='itemList'>
        <Item/>
        <Item/>
        <Item/>
    </div>
}