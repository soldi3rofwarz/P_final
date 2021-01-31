import React,{useEffect, useState} from 'react'
import './mapview.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Popup,Polyline } from 'react-leaflet'
import Marcador from './Marker'
import Ruta from './Rutas'
import L from "leaflet";
import "leaflet-routing-machine";

const MapView = ({latitud, longitud}) => {
    console.log('holoa', latitud, longitud)

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
      const linea=[[latitud, longitud], [11.9737533,-85.5096978]]
    
    
   
    return ( 
        <MapContainer center={geo} zoom={13} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">Esther <3</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline positions={linea}/>
          
              <Marcador latitud={latitud} longitud={longitud}/>
            {/*  */}
        </MapContainer> 
        
    );
}
 
export default MapView;