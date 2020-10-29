import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './card.css'
import {
    projectFirestore,
} from '../../Firebase/config';
import Head from './../../components/header/Head';
import './card.css'

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
        <Card className = 'cards'>
            <Card.Body>
                <Card.Text>
                <div>
                    {listActividades ?
                        listActividades.map ((item, id) => <p>
                        <Card.Img variant="top" src={item.fileUrl}/>
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
                </Card.Text>
                <Button variant="primary">VER MÁS</Button>
            </Card.Body>
        </Card>
    </>
    );
}
 
export default Actividades;