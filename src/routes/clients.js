import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import Index from './../components/main/principal';

export const ClientsRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
            </Switch>
        </Router>
    );
};