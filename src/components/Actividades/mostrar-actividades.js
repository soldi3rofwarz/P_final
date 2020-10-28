import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './../Actividades/style.css';
import {
    projectFirestore,
} from '../../Firebase/config';
import Listar from './../Actividades/crear-actividades';


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

        <div>
            {listActividades ?
                listActividades.map ((item, id) => <p>
                    {item.actividad}
                    <br />
                    {item.cupos}
                    <br />
                    {item.cupos}
                    <br />
                    {item.descripcion}
                    <br />
                    {item.fecha}
                    <br />
                    <img
                        src={item.fileUrl}
                    />
                    <br />
                    {item.hora}
                    <br />
                    {item.organizacion}
                    <br />
                    {item.precio}
                    <br />
                    {item.salida}
                </p>)
                :
                'No hay datos'
            }
        </div>
        
     );
}
 
export default Actividades;