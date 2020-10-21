import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './../Actividades/style.css';
import {
    projectFirestore
} from './../../Firebase/config';

const AgregarActividades = () => {

    const [actividad, setActividad]  = useState('');

    const handleActividadChange = (e) => setActividad(e.target.value);

    const handleAgregarClick = (e) => {
        e.preventDefault();
        //aquí irían las validaciones
        projectFirestore.collection('actividades').add({
            actividad,
        }).then(() => {
            console.log("Guardado!!!!");
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }


    return ( 
    <>
        <Form className="g">
        
            <Form.Group controlId="formActividad">
                <Form.Label>Actividad</Form.Label>
                <Form.Control type="text" placeholder="Actividad" onChange={handleActividadChange} />
            </Form.Group>

            <Form.Group controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" placeholder="Fecha" />
            </Form.Group>

            <Form.Group controlId="formOrganizacion">
                <Form.Label>Organización</Form.Label>
                <Form.Control type="text" placeholder="Organizacion" />
            </Form.Group>
            <Form.Group controlId="formOrganizacion">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" placeholder="Precio" />
            </Form.Group>
            <Form.Group controlId="formOrganizacion">
                <Form.Label>Lugar de salida</Form.Label>
                <Form.Control type="text" placeholder="Lugar de salida" />
            </Form.Group>
            <Form.Group controlId="formOrganizacion">
                <Form.Label>Hora de salida</Form.Label>
                <Form.Control type="time" placeholder="Hora de salida" />
            </Form.Group>

            <Form.Group controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group>
                <Form.File id="buttonGuardar" label="Fotografía" />
            </Form.Group>

            <button
                onClick={handleAgregarClick}
            >

                Agregar actividad
            </button>
        </Form>
    </>
     );
}
export default AgregarActividades;