import React, {useState} from 'react';
import Mapa from '../../../components/mapa/mapa'
import { Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Detalles = (props) => {
    

    const {
        Limite,
        Agregado,
        band,
        value
    }=props

    return ( 
        <Container>
            <Row className="h" cols="2">
                <Col className="mapa"> <Mapa/> </Col>

                <Col className="det">
                    <h2>Hato grade</h2>
                    <h3>Lugar de salida</h3>
                    <h4>Gasolinera Puma</h4>
                    <h3>Fecha</h3>
                    <h4>29/11/2020</h4>
                    <h3>hora de salida</h3>
                    <h4>6 A.M</h4>
                    <h3>precio</h3>
                    <h4>50 cordobas</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                <hr className="my-4"/>
                <h2>Descripcion</h2>
                <p>
                    pate perro Chontales te ofrece una exquisita excursion a la cima <br/>
                    Hato Grade, en donde podras observas aves silvestres, riachuelos <br/>
                    con agua que podras beber, cascadas , unas vistas impresionantes <br/>
                    del lago Cocibolca, ademas recorreremos el lugar qeu dio origen <br/>
                    a la famosa leyenda del lagarto de oro. participa y te llevaras <br/>
                    una bonita experiencia que contar
                </p>

                {(band===true)? 
                    <a className="btn btn-primary btn-lg" href="#!" role="button" onClick={}>
                    Cancelar</a>
                : <a className="btn btn-primary btn-lg" href="#!" role="button" onClick={Agregado}>
                    participar</a>}
                
                <Button variant="outline-success" >{value}</Button>{' '}
                </Col>
            </Row>

        </Container>

     );
}
 
export default Detalles;