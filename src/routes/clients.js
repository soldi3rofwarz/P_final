import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import {ActividadesPage} from './../pages/actividades' 
import Index from './../components/main/principal';
import DetallePage from './../pages/detallePage'
import Login from './../components/login/Cliente/componente/login-cliente'
//import Registro from './../components/login/Cliente/registro/componente/registro'
import LoginGoogle from './../components/login/loginGoogle'


export const ClientsRoute = () => {

    return (
        
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/actividades" component={ActividadesPage}/>
                <Route path="/detalle" component={DetallePage}/>
                <Route exact path ="/login" component ={Login} />
                {/*<Route exact path ="/register" component ={Registro} /> 
                <Route exact path ="/LoginGoogle" component ={LoginGoogle} /> 
                {/* <Route path ="/galeria" component ={Galeria} />
                <Route path ="/form" component ={Form} /> */}

            </Switch>
        </Router>
    );
};