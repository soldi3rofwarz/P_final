import React ,{useState}from 'react';
import './Detalle.css'
import Mapa from './../mapa/mapa'
import { Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Detalle = () => {
    
        const[value, setValue]= useState(0)

        const Limite=()=>{
            setValue(value + 1)

            if(value === 20){
                setValue(value===0)
            }
        }
    
    return (  
        
        <Container>
            <Row>
                <Col ><h1>Hello, world!</h1></Col>
            </Row>
            <Row className="h" cols="2"> 
                <Col  className="mapa">
                    
                    <Mapa/>
                    
                </Col>
                <Col className="det">
                    
                        <h3>Hora de salida</h3>
                        <p>8:00 A.M</p>
                        <h3>Lugar de salida</h3>
                        <p>lugar</p>
                        <h3>Precio</h3>
                        <p>precio</p>

                    
                </Col>
            </Row>  
            <Row>
             <Col>
                <hr className="my-4"/>
                <h2>Descripcion</h2>
                <p>Aqui se colocara la descripcion de lugar que se visitara</p>
                <a className="btn btn-primary btn-lg" href="#!" role="button" onClick={Limite}>Apuntarse</a>
                <Button variant="outline-success" >{value}</Button>{' '}
                
            </Col>
            </Row>
            
        </Container>
        
    );
}
 
export default Detalle;