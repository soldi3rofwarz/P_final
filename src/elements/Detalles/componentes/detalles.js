import React, {useState} from 'react';
import Mapa from '../../../components/mapa/mapa'
import { Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Header from './../../../components/header/Head'
import './Detalle.css'

const Detalles = (props) => {
    
    const{actividad,fecha,precio, salida,hora,latitud,longitud,descripcion,
        Limite,
        Decision,
        value,  
        band
       }= props

    return ( 
        <>
            <div style={{height: '40px'}}></div>
        <section style={{height:'auto', background: 'blue', }}>
            <div className="h" style={{display:'flex', flex:'2'}} >
                <div className="mapa"> 
                <Mapa
                    latitud={latitud}
                    longitud={longitud}
                /> 
                </div>

                <div className="det">
                    <h2>{actividad}</h2>
                    <br/>
                    <h3>Lugar de salida</h3>
                    <h4>{salida}</h4>
                    <br/>
                    <h3>Fecha</h3>
                    <h4>{fecha}</h4>
                    <br/>
                    <h3>Hora de salida</h3>
                    <h4>{hora}</h4>
                    <br/>
                    <h3>Precio</h3>
                    <h4>{precio}</h4>
                </div>
            </div>
            
        </section>
        <div>
                <div className= "texto">
                <hr className="my-4"/>
                <h2>Descripcion</h2>
                <p>
                   {descripcion}
                </p>

                 {band?(
                <a className="btn btn-warning btn-lg" id="dd" href="#!" role="button" onClick={Decision}>
                    Cancelar</a>)
               :
               (<a className="btn btn-warning btn-lg" id="dd" href="#!" role="button" onClick={Decision}>
               Agregar</a>)}
                
                <Button variant="outline-success" className = "p" id="p">{value}</Button>{' '}
                </div>
            </div>
        </>     
     );
}
export default Detalles;