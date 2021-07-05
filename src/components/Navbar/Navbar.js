import React from 'react';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {

  const par= "par";
  const impar= "impar";

  const history = useHistory();
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to={'/'}><img src='/img/game.ico' alt='logo' className='imgbar'/></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <button type="button" className="btn" onClick={()=> history.push(`/category/${par}`)}>Productos Pares</button>
      </li>
      <li className="nav-item">
        <button type="button" className="btn" onClick={()=> history.push(`/category/${impar}`)}>Productos Impares</button>
      </li>
    </ul>
  </div>
    <button type="button" className="btn cart"><img src="https://img.icons8.com/glyph-neue/64/000000/add-shopping-cart.png" alt='logo'/></button>
  </nav>
  )
}
