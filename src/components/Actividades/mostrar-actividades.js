import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './card.css'
import {
    projectFirestore,
} from '../../Firebase/config';
import Head from './../../components/header/Head';

const Actividades = () => {

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

    return ( 
        
        <>
        <Head/>
        {listActividades ?
        listActividades.map ((item, id) => 
        <p>
            <Card className = "cards">
                <Card.Body>
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
                </Card.Body>
                <Button variant="primary">VER MÁS</Button>
            </Card>
        </p>)
        :
        'No hay datos'
    }
         
        </>
     );
}
 
export default Actividades;