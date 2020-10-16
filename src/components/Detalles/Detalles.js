import React,{Fragment} from 'react';
import './Detalle.css'
import Mapa from './../mapa/mapa'
import { Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

const Detalle = () => {
    return (  
        
        <Container>
            <Row>
                <Col ><h1>Hello, world!</h1></Col>
            </Row>
            <Row className="h"> 
                <Col xs={5}>
                    <div className="col-sm mapa" >
                        <Mapa/>
                    </div>
                </Col>
                <Col>
                    <div className="col-sm">
                        <p>Hora de salida</p>
                        <p>8:00</p>

                    </div>
                </Col>
            </Row>  
             <Col>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </Col>
            
        </Container>
        
    );
}
 
export default Detalle;