import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'

import ProgressBar from './../gallery/ProgressBar'
import './card.css';
import 
    {db}
 from '../../api/data/firebase-config';
 import {Edit} from '../../api/data/actividades'
import {Link} from 'react-router-dom'

const AgregarActividades = (props) => {

    let actividadId = '';

    if(props.match) actividadId = props.match.params.actividadId;

    const [actividad, setActividad] = useState('');
    const handleActividadChange = (e) => setActividad(e.target.value);

    const [fecha, setFecha]  = useState('');
    const handleFechaChange = (e) => setFecha(e.target.value);

    const [organizacion, setOrganizacion] = useState('');
    const handleOrganizacionChange = (e) => setOrganizacion(e.target.value);

    const [precio, setPrecio] = useState('');
    const handlePrecioChange = (e) => setPrecio(parseInt(e.target.value));

    const [salida, setSalida] = useState('');
    const handleSalidaChange = (e) => setSalida(e.target.value);

    const [hora, setHora] = useState('');
    const handleHoraChange = (e) => setHora(e.target.value);

    const [cupos, setCupos] = useState('');
    const handleCuposChange = (e) => setCupos(parseInt(e.target.value));

    const [latitud, setLatitud] = useState('');
    const handlelatitudChange = (e) => setLatitud(e.target.value);

    const [longitud, setLongitud] = useState('');
    const handlelongitudChange = (e) => setLongitud(e.target.value);

    const [descripcion, setDescripcion] = useState('');
    const handleDescripcionChange = (e) => setDescripcion(e.target.value);

    const [file, setFile] = useState(null);

    const [error, setError] = useState(null);

    const [fileUrl, setFileUrl] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {

        let selected = e.target.files[0];
        console.log(selected.type);
        if (selected && types.includes(selected.type)) {
            console.log(e.target.files[0]);
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    }

    const Validar=e=>{
        e.preventDefault();

        if (isNaN(precio,cupos,latitud,longitud)){
            setError("debe ser un numero")
        }
        
        }
    

    const handleAgregarClick = (e) => {
        e.preventDefault();
        //aquí irían las validaciones
        if(!actividadId) {
            db.collection('actividades').add({
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
                fileUrl,
            }).then(() => {
                console.log("Guardado!!!!", fileUrl);
            }).catch((error) => {
                console.log("Error: ", error);
            });
        }
        else {
            db.collection('actividades').doc(actividadId).update({
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
                fileUrl,
            }).then(() => {
                console.log("Editado!!!!", fileUrl);
            }).catch((error) => {
                console.log("Error: ", error);
            });
        }
    }

    return ( 
        
    <>
        <div style={{height: '70px'}}></div>
    
        <Form className="g"
            onSubmit={Validar} style={{width: '500px' }}
        >
            {error? alert("debe ser numero"): null}
            
            <Form.Group controlId="formActividad">
                <Form.Label>Actividad</Form.Label>
                <Form.Control type="text" value= {actividad} placeholder="Actividad" onChange={handleActividadChange} />
            </Form.Group>

            <Form.Group controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" value= {fecha} placeholder="Fecha" onChange={handleFechaChange} />
            </Form.Group>

            <Form.Group controlId="formOrganizacion">
                <Form.Label>Organización</Form.Label>
                <Form.Control type="text" value = {organizacion} placeholder="Organizacion" onChange={handleOrganizacionChange}/>
            </Form.Group>
            <Form.Group controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" value = {precio} placeholder="Precio" onChange={handlePrecioChange}/>
            </Form.Group>
            <Form.Group controlId="formSalida">
                <Form.Label>Lugar de salida</Form.Label>
                <Form.Control type="text" value ={salida} placeholder="Lugar de salida" onChange={handleSalidaChange}/>
            </Form.Group>
            <Form.Group controlId="formHora">
                <Form.Label>Hora de salida</Form.Label>
                <Form.Control type="time" value = {hora} placeholder="Hora de salida" onChange={handleHoraChange}/>
            </Form.Group>

            <Form.Group controlId="formCupos">
                <Form.Label>Cupos</Form.Label>
                <Form.Control type="number" value = {cupos} placeholder="Cupos" onChange={handleCuposChange}/>
            </Form.Group>

            <Form.Group controlId="formlatitud">
                <Form.Label>Latitud</Form.Label>
                <Form.Control type="text" value= {latitud} placeholder="Latitud" onChange={handlelatitudChange} />
            </Form.Group>

            <Form.Group controlId="formLongitud">
                <Form.Label>Longitud</Form.Label>
                <Form.Control type="text" value= {longitud} placeholder="Longitud" onChange={handlelongitudChange} />
            </Form.Group>
            

            <Form.Group controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" value = {descripcion} rows={3} onChange={handleDescripcionChange}/>
            </Form.Group>

            <Form.Group>
                
                <Form.File
                    id="buttonGuardar"
                    label="Fotografía"
                    onChange={handleChange}
                />
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }    
                { file && <ProgressBar file={file} setFile={setFile} setUrl={setFileUrl} /> }
                
            </Form.Group>

            <button
                onClick={handleAgregarClick}
            >
                <Link to ='/' style={{textDecoration: 'none'}}>
                    Agregar actividad
                </Link>
            </button>
        </Form>
    </>
     );
    }

export default AgregarActividades;