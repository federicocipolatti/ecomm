import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListContainer } from '../../screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../../screens/ItemDetailContainer/ItemDetailContainer';
import { ItemListCategory } from '../../screens/ItemListCategory/ItemListCategory'

export const Router = () => {
    return <>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route path="/category/:categoryID">
                <ItemListCategory/>
            </Route>
            <Route path="/detail/detailID>">
                <ItemDetailContainer/>
            </Route>
        </Switch>
    </BrowserRouter>
    </>
}