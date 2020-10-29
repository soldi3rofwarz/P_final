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
                    <Card.Title className='titulo' >{item.actividad}</Card.Title>
                    <Card.Img className='imag' variant="top" src={item.fileUrl}/>
                    <Card.Text className='texto'>{item.descripcion}</Card.Text>
                    <Card.Text className='texto'>{item.precio}</Card.Text>
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