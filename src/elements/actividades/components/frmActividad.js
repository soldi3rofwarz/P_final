import React from 'react';
import Form from 'react-bootstrap/Form'
import ProgressBar from '../../../components/gallery/ProgressBar'

const Formulario = (props) => {
    const actividadId = props.match.params.actividadId;
    const {
        actividad,
        fecha,
        organizacion,
        precio,
        salida,
        hora,
        cupos,
        latitud,
        longitud,
        descripcion,
        file,
        fileUrl,
        error,
        validar,
        handleChange,
        add ,

        act,
        fec,
        org,
        prec,
        sal,
        hr,
        cup,
        lat,
        lon,
        desc
    }= props;

    return ( 
        <Form className="g"
            onSubmit={validar}
        >
            {error? alert("debe ser numero"): null}
            
            <Form.Group controlId="formActividad">
                <Form.Label>Actividad</Form.Label>
                <Form.Control type="text" value= {actividad} placeholder="Actividad" onChange={act} />
            </Form.Group>

            <Form.Group controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" value= {fecha} placeholder="Fecha" onChange={fec} />
            </Form.Group>

            <Form.Group controlId="formOrganizacion">
                <Form.Label>Organización</Form.Label>
                <Form.Control type="text" value = {organizacion} placeholder="Organizacion" onChange={org}/>
            </Form.Group>
            <Form.Group controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" value = {precio} placeholder="Precio" onChange={prec}/>
            </Form.Group>
            <Form.Group controlId="formSalida">
                <Form.Label>Lugar de salida</Form.Label>
                <Form.Control type="text" value ={salida} placeholder="Lugar de salida" onChange={sal}/>
            </Form.Group>
            <Form.Group controlId="formHora">
                <Form.Label>Hora de salida</Form.Label>
                <Form.Control type="time" value = {hora} placeholder="Hora de salida" onChange={hr}/>
            </Form.Group>

            <Form.Group controlId="formCupos">
                <Form.Label>Cupos</Form.Label>
                <Form.Control type="number" value = {cupos} placeholder="Cupos" onChange={cup}/>
            </Form.Group>

            <Form.Group controlId="formlatitud">
                <Form.Label>Latitud</Form.Label>
                <Form.Control type="number" value= {latitud} placeholder="Latitud" onChange={lat} />
            </Form.Group>

            <Form.Group controlId="formLongitud">
                <Form.Label>Longitud</Form.Label>
                <Form.Control type="number" value= {longitud} placeholder="Longitud" onChange={lon} />
            </Form.Group>
            

            <Form.Group controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" value = {descripcion} rows={3} onChange={desc}/>
            </Form.Group>

            <Form.Group>
                
                <Form.File
                    id="buttonGuardar"
                    label="Fotografía"
                    onChange={handleChange}
                />
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }    
                {/* { file && <ProgressBar file={file} setFile={setFile} setUrl={setFileUrl} /> } */}
                
            </Form.Group>

            <button
                onClick={add}   
            >
                Agregar actividad
            </button>
        </Form>
        );
}
 
export default Formulario;