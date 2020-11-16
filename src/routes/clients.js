import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import {ActividadesPage }from './../pages/actividades' 
import Index from './../components/main/principal';
import DetallePage from './../pages/detallePage'

export const ClientsRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index}sx />
                <Route exact path="/actividades" component={ActividadesPage}/>
                <Route path="/Detalle/actividades:id" component={DetallePage}/>

            </Switch>
        </Router>
    );
};