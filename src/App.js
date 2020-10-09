import React from 'react';
import Principal from './components/main/principal'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
//import{formatRelative} from 'date-fns'
import mapStyles from './components/mapa/mapStyles'

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

function App() {
  const {isLoaded, loadError}= useLoadScript({
    googleMapsApiKey: process.env.REACT_MAP_GOOGLE_MAPS_API_KEY= "AIzaSyBS7ep4NUFFXOgvazOhHuhMfIOysML2dos",
    libraries,
  })
  if (loadError) return "Error alcargar el mapa"
  if (!isLoaded) return "Cargando"
  return(
    
   <div>
     
     <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12}  
      center={center}
      options={options}
     />
   </div> 
   
  )
}
export default App;