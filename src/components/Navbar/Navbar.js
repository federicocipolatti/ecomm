import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Navbar.css';
import { CartWidget } from '../CartWidget/CartWidget';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img src="game.ico" alt="logo" height="50px"></img>
        <p>MENU</p> 
      </Button>
        <CartWidget/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
        <MenuItem onClick={handleClose}>Desconectarse</MenuItem>
      </Menu>
    </div>
    
  );
}
