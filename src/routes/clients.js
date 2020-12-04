import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import {ActividadesPage} from './../pages/actividades' 
import Index from './../components/main/principal';
import DetallePage from './../pages/detallePage'
//import Registro from './../components/login/Cliente/registro/componente/registro'
import LoginGoogle from './../components/login/loginGoogle'
<<<<<<< HEAD
import {Lugar1} from './../components/informacion/informacion-compo/lugar1'
import Galeria from './../components/gallery/galeria'

=======
import LoginPage from '../pages/login'
>>>>>>> bffa29f86879581979b27b7d2f68a780d96adf1e
export const ClientsRoute = () => {

    return (
        
        <Router>
            <Switch>
                <Route exact path="/" component={Lugar1} />
                <Route exact path="/actividades" component={ActividadesPage}/>
                <Route path="/detalle" component={DetallePage}/>
<<<<<<< HEAD
                <Route exact path ="/login" component ={Login} />
                {/* <Route exact path ="/register" component ={Registro} /> 
                <Route exact path ="/LoginGoogle" component ={LoginGoogle} />  */}
                <Route path ="/galeria" component ={Galeria} />
                {/* <Route path ="/form" component ={Form} />  */}
=======
                <Route exact path ="/login" component ={LoginPage} />
                <Route exact path ="/Logingoogle" component ={LoginGoogle} /> 
                {/*<Route exact path ="/register" component ={Registro} /> 
                
                {/* <Route path ="/galeria" component ={Galeria} />
                <Route path ="/form" component ={Form} /> */}

>>>>>>> bffa29f86879581979b27b7d2f68a780d96adf1e
            </Switch>
        </Router>
    );
};