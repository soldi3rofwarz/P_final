import React ,{useState,useEffect}from 'react';
import {Select} from '../../../api/data/actividades'

import Detalles from './../componentes/detalles'

const Det_content = (props) => {

    const [actividad, setActividad] = useState('');
    const [fecha, setFecha]  = useState('');
    const [precio, setPrecio] = useState('');
    const [salida, setSalida] = useState('');
    const [hora, setHora] = useState('');
    const [cupos, setCupos] = useState('');
    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');
    const [descripcion, setDescripcion] = useState('');


    const [band,setband]= useState(false)
    const[value, setValue]= useState(0)


        const Limite=()=>{
            setValue(value + 1)

            if(value === 20){
                setValue(value===0)
                setband(true)
            }
        }

        const Agregado =()=>{
            setValue(value+1)
            if (value === 0){
                setband(true)
                
            }
        }
        const Cancelar =()=>{
            setband(true)
            if (value > 0){
            setValue(value-1)
            setband(false)
            }
        }
        useEffect(()=>{
            let actividadId = '';
            if(props.match) actividadId = props.match.params.actividadId;
            console.log(`Producto Id: ${actividadId}`);
            const producto = Select(actividadId)
               
               
           
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
                setActividad(producto.actividad)
                setFecha(producto.fecha)
                setPrecio(producto.precio)
        },[])

    return ( 
        <Detalles 
        Limite ={Limite}
        band={band}
        value={value}
        Agregado={Agregado}
        Cancelar ={Cancelar}

        actividad={actividad}
        fecha={fecha}
        precio={precio}
        />
    );
}
 
export default Det_content;