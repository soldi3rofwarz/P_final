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
import Login from './components/login/loginGoogle'
import Mapa from './components/mapa/mapa'
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom'
import ContextG from './contexto/Context'

/*function App(){
    return (  
        <ContextG>
        <Router>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/actividades" component={Actividades} />
                <Route  path="/detalle/actividadId:id" component={Detalle} />
                <Route  exact path="/form" component={Form} /> 
                <Route  path="/form/:actividadId" component={Form} />
                <Route  path="/mapa" component={Mapa} />
                <Route exact path="/detalle" component={Detalle} />
            </Switch>
        </Router>
        </ContextG>
    );
}*/

import {ClientsRoute} from './routes/clients';

function App() {
    return (
        <ClientsRoute />
    );
}

export default App;