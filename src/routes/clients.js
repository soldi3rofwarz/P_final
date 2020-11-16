import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import Login  from '../components/login/Cliente/Singup';

export const ClientsRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Login } />
            </Switch>
        </Router>
    );
};