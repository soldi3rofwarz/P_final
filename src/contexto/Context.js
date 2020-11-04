import React from 'react';
export const Contexto = React.createContext()

const ContextG = ({data}) => {
    const{actividad,cupos,descripcion,fecha,hora,
        id,latitud,longitud,organizacion,precio,salida}= data
        console.log(data)
    return ( 
    <>

    </> 
    );
}
 
export default ContextG;