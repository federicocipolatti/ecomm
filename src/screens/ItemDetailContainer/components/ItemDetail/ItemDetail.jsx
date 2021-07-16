import React from 'react';
import '../ItemDetail/ItemDetailStyle.css';
import { ItemDetailItem } from '../ItemDetailItem/ItemDetailItem';

export const ItemDetail = ({detail}) => {

    return <>
           
        {detail.map(item => (
            <div className='Detail' key={item.id}>
                    <ItemDetailItem item={item}/>
            </div>   
            ))
        }
    </>   
    
}