import React ,{useState,useEffect}from 'react';
import './Detalle.css'

import Mapa from './../mapa/mapa'
import { Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {
    projectFirestore,
} from '../../Firebase/config';

const Detalle = (item) => {
    
    useEffect(()=>{
        console.log(item);
    })
    const [band,setband]= useState(false)
       
    
   
    
        const[value, setValue]= useState(0)

        const Limite=()=>{
            setValue(value + 1)

            if(value === 20){
                setValue(value===0)
                setband(true)
            }
        }
    
    return (  
        <>

        
        <Container>
            
            <Row className="h" cols="2"> 
                <Col  className="mapa">
                    
                    <Mapa/>
                    
                </Col>
                <Col className="det">
                    
                        <h3>Hora de salida</h3>
                        <p>{item.hora}</p>
                        <h3>Lugar de salida</h3>
                        <p>{item.salida}</p>
                        <h3>Precio</h3>
                        <p>{item.precio}</p>

                    
                </Col>
            </Row>  
            <Row>
             <Col>
                <hr className="my-4"/>
                <h2>Descripcion</h2>
                <p>{item.descripcion}</p>
                {(band===true)? <p>cupos llenos</p>: <a className="btn btn-primary btn-lg" href="#!" role="button" onClick={Limite}>
                    participar</a>}
                
                <Button variant="outline-success" >{value}</Button>{' '}
                
            </Col>
            </Row>
          
            :
            'No hay datos'
        
        </Container>
        </>
    );
}
 
export default Detalle;