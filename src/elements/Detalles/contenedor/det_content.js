import React ,{useState}from 'react';

import Detalles from './../componentes/detalles'

const Det_content = () => {

 
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
            if (value === 1){
                setband(true)
                
            }
        }
        const Cancelar =()=>{
            if (value > 0){
            setValue(value-1)
            }
        }

    return ( 
        <Detalles 
        Limite ={Limite}
        band={band}
        value={value}
        Agregado={Agregado}
        Cancelar ={Cancelar}
        />
    );
}
 
export default Det_content;