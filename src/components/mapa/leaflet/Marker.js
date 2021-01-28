import React from 'react';
import {Marker, Popup } from 'react-leaflet'
import {IconLocation} from './icon'

import "leaflet-routing-machine";


const Marcador = ({latitud, longitud}) => {
    var center={}
    if(latitud&&longitud){
        center={
            lat: latitud,
            lng: longitud}
   }else{
        center = {
            lat: 0,
            lng: 0,
      };
   }
   
    return ( 
        
         <Marker position={center} icon={IconLocation}/> 
        
    );
}
 
export default Marcador;