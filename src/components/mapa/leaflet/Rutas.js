/*   
import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement({latitud, longitud}) {
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [L.latLng(latitud, longitud), L.latLng(11.977867, -85.486695)]
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing); */