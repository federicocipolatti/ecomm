import React, { useState } from 'react';
import './ItemCountStyle.css';

export const ItemCount = props => {

  let [num, setNum] = useState(1);

  let handleIncrement = ()=> {
    setNum(num+1);
  }

  let handleDecrement = ()=> {
    setNum(num-1);
  }

  return <>
    <div className='count'>
      <h3>{num}</h3>
    </div>
      <div className='buttons'>
        <button className='btn btn-light btn-outline-dark rounded-0' onClick={handleDecrement} disabled={num===0}>-1</button>
        <button className='btn btn-light btn-outline-dark rounded-0' onClick={handleIncrement} disabled={num>10}>+1</button>
      </div>
      <button className='btnDetail btn-light btn-outline-dark rounded-0'disabled={num===0}>AÑADIR AL CARRITO</button> 
    </> 
}