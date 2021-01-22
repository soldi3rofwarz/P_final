import React ,{useState,useEffect}from 'react';


import Detalles from './../componentes/detalles'

const Det_content = (props) => {

    const{actividad,fecha,precio, salida,hora,cupos,latitud,longitud,descripcion}= props


    const [band,setband]= useState(false)
    const[value, setValue]= useState(0)


        const Limite=()=>{
            setValue(value + 1)

            if(value === cupos){
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

        const Decision =()=>{
            
            Agregado()
            Cancelar()
        }
        
    return ( 
        <Detalles 
        Limite ={Limite}
        value={value}
        Decicion={Decision}
        band={band}
        actividad={actividad}
        fecha={fecha}
        precio={precio}
        salida={salida}
        hora={hora}
        cupos={cupos}
        latitud={latitud}
        longitud={longitud}
        descripcion={descripcion}
        />
    );
}
 
export default Det_content;