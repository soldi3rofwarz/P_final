import React from 'react'
import Principal from './components/main/principal'
import Detalle from './components/Detalles/Detalles'
//import Galeria from './components/gallery/galeria'
//import Pie from './components/footer/foot'
import Actividades from './components/Actividades/mostrar-actividades'
import Form from './components/Actividades/form-actividades'
import  'bootstrap/dist/css/bootstrap.min.css' ;
//import Galeria from './components/Detalles/Detalles'
//import Head from './components/header/Head'
import Mapa from './components/mapa/mapa'
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom'

function App(){
    return (  
        <Router>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/actividades" component={Actividades} />
                <Route exact path="/actividades/:id" component={Detalle} />
                <Route  path="/form" component={Form} />
                
                <Route  path="/mapa" component={Mapa} />
            </Switch>
        </Router>
    );
}
export default App;