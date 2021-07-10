import React, { useState } from 'react';

export const ItemCount = props => {

  let [num, setNum] = useState(1);

  let handleIncrement = ()=> {
    if (num < props.stock){
      setNum(num+1);
    } 
  }

  let handleDecrement = ()=> {
    if (num > props.minimo){
      setNum(num-1);
    }
  }

  return (
    <div className='count'>
      {num}
      <div className='buttons'>
        <button className='btn btn-light btn-outline-dark rounded-0' onClick={handleDecrement}></button>
        <button className='btn btn-light btn-outline-dark rounded-0' onClick={handleIncrement}></button>
      </div>
    </div>
  )
}