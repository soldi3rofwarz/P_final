import React, {useState, useEffect} from 'react';
import {Formulario} from '../components/frmActividad'
import {Add} from '../../../api/data/actividades'
import {db} from './../../Firebase/config';


export const FrmContainer = (props) => {

    const actividadId = props.match.params.actividadId;

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
    const handlelatitudChange = (e) => setLatitud(parseInt(e.target.value));

    const [longitud, setLongitud] = useState('');
    const handlelongitudChange = (e) => setLongitud(parseInt(e.target.value));

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

    return ( 
        <Formulario
            actividad={actividad} 
            fecha={fecha}
            organizacion={organizacion}
            precio={precio}
            salida={salida}
            hora={hora}
            cupos={cupos}
            latitud={latitud}
            longitud={longitud}
            descripcion={descripcion}
            fileUrl={fileUrl}
            file={file}
            error={error}
            validar={Validar}
            handleChange= {handleChange}
            add={Add}

            act={handleActividadChange}
            fec={handleFechaChange}
            org={handleOrganizacionChange}
            prec={handlePrecioChange}
            sal={handleSalidaChange}
            hr={handleHoraChange}
            cup={handleCuposChange}
            lat={handlelatitudChange}
            lon={handlelongitudChange}
            desc={handleDescripcionChange}
    /> );
}
 
