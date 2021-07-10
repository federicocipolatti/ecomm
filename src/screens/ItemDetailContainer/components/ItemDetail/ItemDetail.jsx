import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetailStyle.css';
import { Item } from '../../../ItemListContainer/components/Item/Item';

export const ItemDetail = ({item}) => {

    return (
        <div className='listContainer'>
            <div className='row'>
                {item.map(detail => (
                    <div className='col-md-4 item' key={detail.id}>
                        <Item detail={detail}/>
                    </div>   
                    ))
                }
            </div> 
        <ItemCount/>    
        </div>
    )
}