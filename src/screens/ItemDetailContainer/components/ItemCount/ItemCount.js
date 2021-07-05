import React, { useState } from 'react';
import './ItemCountStyle.css';

const ShowMessage = props => {
  return <h4>{`¿Cuántos vas a llevar? ${props.stock}`}</h4>
}

const ButtonComponent = ({ changeStock, stock }) => {
  return <>
    <div className='itemCount'>
      <button className='botones btn-outline-dark rounded-0' onClick={() => changeStock(stock - 1)}> -1</button>
      <button className='botones btn-outline-dark rounded-0' onClick={() => changeStock(stock + 1)}> +1 </button>
    </div>
    <button disabled={stock<=0} type='submit' className='btnDetail btn-outline-dark rounded-0'>AGREGAR AL CARRITO</button>
  </>
}

const finalizarCompra = () => {
  return <button type='submit' className='btn-outline-dark rounded-0'>FINALIZAR COMPRA</button>
}

const StockContainer = ({ componente: ComponenteCustomizado }) => {
  const [stock, setStock] = useState(1);

  const handleStock = value => setStock(value);

  return <div>
    <ShowMessage stock={stock} />
    <ComponenteCustomizado stock={stock} changeStock={handleStock} />
  </div>
}

export const ItemCount = props => {

  const [button, setButton] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('cambio de boton');
  }

  const handleChange = e => {
    setButton(e.target.value)
  }

  return <form onSubmit={handleSubmit}>
    <StockContainer componente={ButtonComponent} onChange={handleChange} value={button}/>
  </form>
  
}