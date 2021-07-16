import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
//import './ItemDetailItemStyle.css';
import { ItemDetailItem } from '../../ItemDetailItem/ItemDetailItem';

export const ItemDetail = ({detail}) => {

    return (
        <div className='listContainer'>
            <div className='row'>
                {detail.map(item => (
                    <div>
                        <ItemDetailItem item={item} key={item.id}/>
                    </div>   
                    ))
                }
            </div>   
        </div>
    )
}