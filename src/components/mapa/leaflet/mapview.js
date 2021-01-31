import React,{useEffect, useState} from 'react'
import './mapview.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Popup } from 'react-leaflet'
import Marcador from './Marker'
import Routing from './Rutas'
import L from "leaflet";
import "leaflet-routing-machine";

const MapView = ({latitud, longitud}) => {

const [isLoad, setIsload] = useState(false)

    const mapRef =React.useRef
    
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
      }, []);

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
        <MapContainer center={geo} zoom={13} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">Esther <3</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

          {isLoad&&<Routing latitud={latitud} longitud={longitud} map={onMapLoad}/>}
              <Marcador latitud={latitud} longitud={longitud}/>
            {/*  */}
        </MapContainer> 
        
    );
}
 
export default MapView;