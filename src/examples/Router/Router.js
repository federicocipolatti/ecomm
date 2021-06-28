import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ItemListContainer } from '../../screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../../screens/ItemDetailContainer/ItemDetailContainer';
import { ItemListPar } from '../../screens/ItemListCategory/ItemListCategory'

export const Router = props => {
    return <>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route exact path="/category:categoryID">
                <ItemListPar/>
            </Route>
        </Switch>
    </BrowserRouter>
    </>
}