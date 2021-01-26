import React,{useEffect} from 'react'
import './mapview.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Popup } from 'react-leaflet'
import Marcador from './Marker'
import Routing from './Rutas'

const MapView = ({latitud, longitud}) => {
    var geo={}
   
        
        if(latitud&&longitud){
            geo = {
                lat: latitud,
                lng: longitud}
       }else{
            geo = {
                lat: 12.099375,
                lng: -85.369108,
          };
       }
  
    
    
   console.log('holoa', latitud, longitud)
    return ( 
        <MapContainer center={geo} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <Marcador latitud={latitud} longitud={longitud}/> 
            {/* <Routing latitud={latitud} longitud={longitud}/> */}
        </MapContainer> 
        
    );
}
 
export default MapView;