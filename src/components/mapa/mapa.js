import React,{useState} from 'react'
import "./mapa.css"
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

  import{formatRelative} from 'date-fns';
  import mapStyles from './mapStyles';
  import "@reach/combobox/styles.css"
  
  const libraries= ["places"]
  const mapContainerStyle={
    width: "100vw",
    height:"100vh"
  }
  const center = { lat: 12.105900, lng: -85.365060 }
  const options = {
    style: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  }

const Mapa = () => {
    const {isLoaded, loadError}= useLoadScript({
        googleMapsApiKey: process.env.REACT_MAP_GOOGLE_MAPS_API_KEY= "AIzaSyBS7ep4NUFFXOgvazOhHuhMfIOysML2dos",
        libraries,
      })

      const[markers, setMarkers]= useState([])

      if (loadError) return "Error alcargar el mapa"
      if (!isLoaded) return "Cargando"
    return (
        <>
        <div className="princ">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}  
                center={center}
                options={options}
                onClick={(event)=>{
                    setMarkers((current)=>[...current,{
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                        time: new Date(), 
                    }])
                    
                }}
            >
                {markers.map((marker)=>(
                    <Marker
                        key={marker.time.toISOString()}
                        position={{lat: marker.lat, lng: marker.lng}}
                        icon={{
                            url: "/res/littlegirl.svg",
                            scaledSize: new window.google.maps.Size(30, 30),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(15,15)
                        }}
                    />
                ))}
            </GoogleMap>
      </div>
      </>
     );
}
 
export default Mapa;