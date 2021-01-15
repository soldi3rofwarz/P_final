import React,{useState,useCallback, useRef} from 'react'
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
  import usePlaceAtocomplete,{getGeocode,getLatLng}from 'use-places-autocomplete'
  import {Combobox,ComboboxInput,ComboboxPopover,ComboboxList,ComboboxOption} from '@reach/combobox'
  import '@reach/combobox/styles.css'
  //****************************************************************************************************************** */
  const libraries= ["places"]
  const mapContainerStyle={
    width: "600px",
    height:"400px"
  }
  const center = { lat: 12.105900, lng: -85.365060 }
  const options = {
    style: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  }

const Mapa = () => {
    const {isLoaded, loadError}= useLoadScript({
        googleMapsApiKey: process.env.REACT_MAP_GOOGLE_MAPS_API_KEY= "AIzaSyDsqHKYTtzOe17Z94JPh7fznLveiQVFTAk",
        libraries,
      })

      const[markers, setMarkers]= useState([]);
      const[select, setSelect]= useState(null)

      const onMapClick = useCallback((event)=>{
        setMarkers((current)=>[...current,{
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(), 
        }])
      },[])

      const mapRef= useRef()
      const onMapLoad= useCallback((map)=>{
          mapRef.current =map;
      },[])

      if (loadError) return "Error alcargar el mapa"
      if (!isLoaded) return "Cargando"
    return (
        <>
        <div className="princ">
            {/* <Search/> */}

            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}  
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {/* {markers.map((marker)=>( */}
                    <Marker
                        //key={marker.time.toISOString()}
                        position={center}
                        icon={{
                            url: "/res/littlegirl.svg",
                            scaledSize: new window.google.maps.Size(30, 30),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(15,15)
                        }}
                        // onClick={()=>{
                        // setSelect(marker)
                        // }}
                        
                    />
                   

                {/* ))} */}

                {select? (<InfoWindow position={{lat: select.lat, lng: select.lng}} onCloseClick={()=>{
                    setSelect(null)
                }}>
                    <div>
                        <h2>salida</h2>
                        <p>hora {formatRelative(select.time, new Date())}</p>
                    </div>
                </InfoWindow>): null}
            </GoogleMap>
      </div>
      </>
     );
}
function Search(){
    const {
        ready,
        value,
        suggestions:{status,data},
        setValue,
        clearSuggestions
    } = usePlaceAtocomplete({
        requestOptions:{
            location:{lat:()=> 12.105900, lng:()=> -85.365060},
            radius: 200* 1000,
        }
    })
    return(
    <div >
        <Combobox onSelect={(address)=>{
            console.log(address)
            }}
            >
            <ComboboxInput value={value} onChange={(e)=>{
                setValue(e.target.value)
            }}
            disable={!ready}
            placeholder="direccion"
            />
            <ComboboxPopover>
                
            </ComboboxPopover>
        </Combobox>
    </div>
    )
}
 
export default Mapa;