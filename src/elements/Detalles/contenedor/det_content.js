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

    return ( 
        <Detalles 
        Limite ={Limite}
        band={band}
        value={value}
        />
    );
}
 
export default Det_content;