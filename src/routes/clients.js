import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import {ActividadesPage} from './../pages/actividades';

export const ClientsRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ActividadesPage} />
            </Switch>
        </Router>
    );
};