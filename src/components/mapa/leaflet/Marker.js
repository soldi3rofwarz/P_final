import React from 'react';
import {Marker, Popup } from 'react-leaflet'
import {IconLocation} from './icon'
import L from "leaflet";
import "leaflet-routing-machine";


const Marcador = ({latitud, longitud}) => {
    var center={}
    if(latitud&&longitud){
        center={
            lat: latitud,
            lng: longitud}
   }else{
        center = {
            lat: 12.099375,
            lng: -85.369108,
      };
   }
   
    return ( 
        
         <Marker position={center} icon={IconLocation}/> 
        
    );
}
 
export default Marcador;