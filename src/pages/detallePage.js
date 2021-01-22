import React ,{useEffect,useState}from 'react';
import {Layout} from './../elements/theme/components/layout'
import {Select} from './../api/data/actividades'
import Detcontent from './../elements/Detalles/contenedor/det_content'

const DetallePage = (props) => {
    let {actividadId} = props.match.params;
      //  if(props.match) params.actividadId;

    const [actividad, setActividad] = useState('');
    const [fecha, setFecha]  = useState('');
    const [precio, setPrecio] = useState('');
    const [salida, setSalida] = useState('');
    const [hora, setHora] = useState('');
    const [cupos, setCupos] = useState('');
    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(()=>{
        (async()=>{
        
        console.log(`Producto Id: ${actividadId}`);
        const producto =await Select(actividadId)
    
        const {actividad,
            fecha,
            precio,
            salida,
            hora,
            cupos,
            latitud,
            longitud,
            descripcion}= producto;
                console.log(producto)

            setActividad(actividad)
            setFecha(fecha)
            setPrecio(precio)
            setSalida(salida)
            setHora(hora)
            setCupos(cupos)
            setLatitud(latitud)
            setLongitud(longitud)
            setDescripcion(descripcion)
        })()
    },[])

    return (  
        <Layout>
            <Detcontent
                actividad={actividad}
                fecha ={fecha}
                precio={precio}
                salida={salida}
                hora={hora}
                cupos={cupos}
                latitud={latitud}
                longitud={longitud}
                descripcion={descripcion}
            /> 
        </Layout>
    );
}
 
export default DetallePage;