import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const AgregarActividades = () => {
    return ( 
    <>
        <Form>
        
            <Form.Group controlId="formActividad">
                <Form.Label>Actividad</Form.Label>
                <Form.Control type="text" placeholder="Actividad" />
            </Form.Group>

            <Form.Group controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" placeholder="Fecha" />
            </Form.Group>

            <Form.Group controlId="formOrganizacion">
                <Form.Label>Organización</Form.Label>
                <Form.Control type="text" placeholder="Organizacion" />
            </Form.Group>

            <Form.Group controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group>
                <Form.File id="buttonGuardar" label="Fotografía" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Agregar actividad
            </Button>
        </Form>
    </>
     );
}
export default AgregarActividades;