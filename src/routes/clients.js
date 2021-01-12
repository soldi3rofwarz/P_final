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
// import LoginGoogle from './../components/login/loginGoogle'
import LoginPage from '../pages/login'
import Info from './../components/informacion/informacion-compo/info'
import Galeria from './../components/gallery/galeria'
import AgregarActividades from '../components/Actividades/form-actividades'
import Datospage from './../pages/Graficospage'
import Mapa from './../components/mapa/mapa'
import Lugar1 from './../pages/page1'
import Lugar2 from './../pages/page2'
import Lugar3 from './../pages/page3'

export const ClientsRoute = () => {

    return (
        
        <Router>
            <Switch>
            <Route exact path="/" component={Index} />
                <Route exact path="/info" component={Info} />
                <Route exact path="/actividades" component={ActividadesPage}/>
                <Route path="/detalle" component={DetallePage}/>
                <Route path="/galeria" component={Galeria}/> 
                <Route exact path ="/login" component ={LoginPage} />
                <Route exact path ="/form" component ={AgregarActividades} />
                <Route exact path ="/datos" component ={Datospage} />
                <Route exact path ="/mapa" component ={Mapa} />
                <Route exact path ="/lugar1" component ={Lugar1} />
                <Route exact path ="/lugar2" component ={Lugar2} />
                <Route exact path ="/lugar3" component ={Lugar3} />
                {/* <Route exact path ="/Logingoogle" component ={LoginGoogle} />  */}
                {/*<Route exact path ="/register" component ={Registro} /> 
                
                {/* <Route path ="/galeria" component ={Galeria} />
                <Route path ="/form" component ={Form} /> */}

            </Switch>
        </Router>
    );
};