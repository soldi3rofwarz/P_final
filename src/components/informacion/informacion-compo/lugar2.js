import React from 'react';
import Layout from './layout/layout';
import './informacion.css'
import Header from './../../header/Head';

const Lugar2 = (props) => {
    
    return (
        <Layout>

        <Header/>
        <div class="row">
                <h2>Puerto Díaz </h2>
                        <p>
                        A solo 28 kilómetros al oeste de Juigalpa se encuentra uno de los puertos lacustres más antiguos y olvidados de Nicaragua: Puerto Díaz.
                        </p>

                        <p>
                        La primera noticia sobre la existencia de este poblado chontaleño se remonta a los inicios de la colonización española, cuando los capitanes españoles Diego Machuca y Alonso Calero, en su viaje de exploración buscando el desaguadero de la “mar dulce” --como le decían los españoles al Gran Lago de Nicaragua-- hicieron escala en estas costas en abril de 1539.
                        </p>

                        <p>
                        Como llegar?
                        </p>

                        <p>
                        Del mercado de Mayoreo salen los buses que van a Juigalpa, ya aquí, en el antiguo mercado se aborda el bus a Puerto Díaz.
                        </p>
                </div>                 
        </Layout>
    );
};
export default Lugar2;