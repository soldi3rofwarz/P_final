import React ,{useState,useEffect}from 'react';
import './Detalle.css'
import Card from 'react-bootstrap/Card';
import Mapa from './../mapa/mapa'
import { Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {
    projectFirestore,
} from '../../Firebase/config';

const Detalle = () => {
    const [listActividades, setListActividades] = useState([]);

        useEffect(() => {
        projectFirestore
        .collection('actividades')
        .get()
        .then(snapshot => {
            const actividades = [];
            snapshot.forEach(doc => actividades.push({
                id: doc.id,
                ...doc.data(),
            }));
            setListActividades(actividades);
        })
        .catch(error => console.log("Error: ", error));
    }, []);
    
        const[value, setValue]= useState(0)

        const Limite=()=>{
            setValue(value + 1)

            if(value === 20){
                setValue(value===0)
            }
        }
    
    return (  
        <>

        
        <Container>
            {listActividades ?
            listActividades.map ((item, id) => <p>
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
                <a className="btn btn-primary btn-lg" href="#!" role="button" onClick={Limite}>
                    participar</a>
                <Button variant="outline-success" >{value}</Button>{' '}
                
            </Col>
            </Row>
            </p>)
            :
            'No hay datos'
        }
        </Container>
        </>
    );
}
 
export default Detalle;