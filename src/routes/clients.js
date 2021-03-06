import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import {ActividadesPage} from './../pages/actividades' 
import DetallePage from './../pages/detallePage'
//import Registro from './../components/login/Cliente/registro/componente/registro'
import {GooglePage} from './../pages/google'
import LoginPage from '../pages/login'
import Info from './../components/informacion/informacion-compo/info'
import {GalleryPage} from './../pages/galeria'
import Form from '../pages/form'
import Datospage from './../pages/Graficospage'
import MapView from './../components/mapa/leaflet/mapview'
import Lugar1 from './../pages/page1'
import Lugar2 from './../pages/page2'
import Lugar3 from './../pages/page3'
import Lugar4 from './../pages/page4'
import Lugar5 from './../pages/page5'
import Lugar6 from './../pages/page6'
import LandingPage from './../pages/landing'


export const ClientsRoute = () => {

    return (
        
        <Router>
            <Switch>
            <Route exact path="/" component={LandingPage} />
                <Route exact path="/info" component={Info} />
                <Route exact path="/actividades" component={ActividadesPage}/>
                <Route path="/detalle/:actividadId" component={DetallePage}/>
                <Route path="/galeria" component={GalleryPage}/>
                <Route exact path ="/login" component ={LoginPage} />
                <Route exact path ="/form" component ={Form} />
                <Route exact path ="/form/:actividadId" component ={Form} />
                <Route exact path ="/datos" component ={Datospage} />s
                <Route exact path ="/mapa" component ={MapView} />
                <Route exact path ="/lugar1" component ={Lugar1} />
                <Route exact path ="/lugar2" component ={Lugar2} />
                <Route exact path ="/lugar3" component ={Lugar3} />
                <Route exact path ="/lugar4" component ={Lugar4} />
                <Route exact path ="/lugar5" component ={Lugar5} />
                <Route exact path ="/lugar6" component ={Lugar6} />
                <Route exact path ="/loginGoogle" component ={GooglePage} />  
                {/*<Route exact path ="/register" component ={Registro} /> 
                
                {/* <Route path ="/galeria" component ={Galeria} />
                <Route path ="/form" component ={Form} /> */}

            </Switch>
        </Router>
    );
};