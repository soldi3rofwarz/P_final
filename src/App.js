import React from 'react';
import Principal from './../src/components/main/principal'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
//import{formatRelative} from 'date-fns'

const libraries= ["places"]
const mapContainerStyle={
  width: "100vw",
  height:"100vh"
}
const center = { lat: 12.105900, lng: -85.365060 }

function App() {
  const {isLoaded, loadError}= useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
     />
   </div>
  )
}

export default App;
