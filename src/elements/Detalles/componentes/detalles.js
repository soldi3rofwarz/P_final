import React, {useState} from 'react';
import Mapa from '../../../components/mapa/mapa'
import { Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Detalles = (props) => {
    

    const {
        salida,
        hora,
        precio,
        descripcion,
        Limite,
        titulo,
        band,
        value
    }=props

    return ( 
        <Container>
            <Row className="h" cols="2">
                <Col className="mapa"> <Mapa/> </Col>

                <Col className="det">
                    <h2>{titulo}</h2>
                    <h3>Lugar de salida</h3>
                    <p>{salida}</p>
                    <h3>hora de salida</h3>
                    <p>{hora}</p>
                    <h3>precio</h3>
                    <p>{precio}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <hr className="my-4"/>
                <h2>Descripcion</h2>
                <p>{descripcion}</p>

                {(band===true)? <p>cupos llenos</p>: <a className="btn btn-primary btn-lg" href="#!" role="button" onClick={Limite}>
                    participar</a>}
                
                <Button variant="outline-success" >{value}</Button>{' '}
                </Col>
            </Row>

        </Container>

     );
}
 
export default Detalles;