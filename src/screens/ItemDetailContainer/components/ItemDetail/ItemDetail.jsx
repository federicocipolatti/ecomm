import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetailStyle.css';
import { Item } from '../../../ItemListContainer/components/Item/Item';

export const ItemDetail = ({detail}) => {

    return (
        <div className='listContainer'>
            <div className='row'>
                {detail.map(detailID => (
                    <div className='col-md-4 item' key={detailID.id}>
                        <Item detail={detailID}/>
                    </div>   
                    ))
                }
            </div> 
        <ItemCount/>    
        </div>
    )
}