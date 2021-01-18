import React, {useState} from 'react';
import Mapa from '../../../components/mapa/mapa'
import { Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Header from './../../../components/header/Head'
import './Detalle.css'

const Detalles = (props) => {
    
    const {
        Limite,
        Agregado,
        band,
        value,
        Cancelar,
    }=props

    return ( 
        <>
     
        <Container>
            <Row className="h" cols="2">
                <Col className="mapa"> <Mapa/> </Col>

                <Col className="det">
                    <h2>Hato grade</h2>
                    <br/>
                    <h3>Lugar de salida</h3>
                    <h4>Gasolinera Puma</h4>
                    <br/>
                    <h3>Fecha</h3>
                    <h4>29/11/2020</h4>
                    <br/>
                    <h3>Hora de salida</h3>
                    <h4>6 A.M.</h4>
                    <br/>
                    <h3>Precio</h3>
                    <h4>50 cordobas</h4>
                </Col>
            </Row>
            <Row>
                <Col className= "texto">
                <hr className="my-4"/>
                <h2>Descripcion</h2>
                <p>
                    Pate Perro Chontales, te ofrece una exquisita excursion a la cima <br/>
                    Hato Grade, en donde podrás observar aves silvestres, riachuelos <br/>
                    con agua que podrás beber, cascadas , unas vistas impresionantes <br/>
                    del lago Cocibolca, además recorreremos el lugar qeu dio origen <br/>
                    a la famosa leyenda del lagarto de oro. Participa y te llevarás <br/>
                    una bonita experiencia que contar
                </p>

                {(band===true)? 
                    <a className="btn btn-warning btn-lg" id="dd" href="#!" role="button" onClick={Cancelar}>
                    Cancelar</a>
                :<a className="btn btn-warning btn-lg" id="d" href="#!" role="button" onClick={Agregado}>
                    Participar</a>}
                
                <Button variant="outline-success" className = "p" id="p">{value}</Button>{' '}
                </Col>
            </Row>
        </Container>
        </>     
     );
}
export default Detalles;