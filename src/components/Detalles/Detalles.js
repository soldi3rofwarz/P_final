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
        <div>
                    {listActividades ?
                        listActividades.map ((item, id) => <p>
                        <Card.Img variant="top" src={item.fileUrl} />
                            <Card.Title>{item.actividad}</Card.Title>
                            <br />
                            {item.cupos}
                            <br />
                            {/* {item.descripcion}
                            <br />
                            {item.fecha}
                            <br />  */}
                            {/* <br />
                            {item.hora}
                            <br />
                            {item.organizacion}
                            <br /> */}
                            {item.precio}
                            <br />
                            {/* {item.salida} */}
                            
                        </p>)
                        :
                        'No hay datos'
                    }
                </div>
        
        <Container>
            
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
                <a className="btn btn-primary btn-lg" href="#!" role="button" onClick={Limite}>
                    g</a>
                <Button variant="outline-success" >{value}</Button>{' '}
                
            </Col>
            </Row>
            
        </Container>
        </>
    );
}
 
export default Detalle;