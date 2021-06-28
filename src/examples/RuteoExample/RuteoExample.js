import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Primero } from '../../components/Router/components/Primero/Primero';
import { Segundo } from './Segundo/Segundo';
import { Tercero } from './Tercero/Tercero';
import { Navbar } from '.../components/Navbar/Navbar';

export const RuteoExample = () => {
    return <BrowserRouter>
    <Navbar/>
    <Link to='/tercero'>Ir al Tercero</Link>
    <Switch>
    <Route path='/primero'>
        <Primero/>
    </Route>
    <Route path='/segundo'>
        <Segundo/>
    </Route>
    <Route path='/tercero/:id'>
        <Tercero/>
    </Route>
    </Switch>
    </BrowserRouter>
}