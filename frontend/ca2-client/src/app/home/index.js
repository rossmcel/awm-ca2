import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, useMapEvents, Marker, Popup, useMap } from 'react-leaflet';
import '../../App.css';
import 'leaflet/dist/leaflet.css';
import nationalParks from './national-parks.json';

export const Home = () => {
  const mapRef = useRef();
  const [locations, setLocations] = useState(null);
  const [map, setMap] = useState(null);
  const [mapBounds, setMapBounds] = useState(null);

  const MyComponent = () => {
    const mapName = useMap();
    setMap(mapName);
    // console.log(mapName.getBounds().toBBoxString());
    console.log(map.getBounds().toBBoxString());
    setMapBounds(map.getBounds().toBBoxString());

    const load_markers = () => {
      console.log("Test");
      const markers_url = `http://127.0.0.1:8000/api/WorldBorder/?in_bbox=${mapBounds}`;
      // const response = axios.get(markers_url);
      axios.get(markers_url)
        .then(res => {
          console.log(res);
          const geojson = res.data;
          setLocations(geojson);
          console.log("Geojson is " + geojson);
        });
    }

    const render_markers = () => {
        const markers = load_markers();
        L.geoJSON(markers)
            .bindPopup((layer) => layer.feature.properties.name)
            .addTo(map);
    }

    map.on("moveend", render_markers);
  }

  useEffect(() => {
    // function LocationMarker() {
    //   const [position, setPosition] = useState(null)
    //   const map = useMapEvents({
    //     click() {
    //       map.locate()
    //     },
    //     locationfound(e) {
    //       setPosition(e.latlng)
    //       map.flyTo(e.latlng, map.getZoom())
    //     },
    //   })
    
    //   return position === null ? null : (
    //     <Marker position={position}>
    //       <Popup>You are here</Popup>
    //     </Marker>
    //   )
    // }

    // console.log(map);
    
    // const map = mapRef.leafletElement.getBounds;


    // axios.get()
    // const { current = {} } = mapRef;
    // if(current) {
    //   const { leafletElement: map } = current;
    //   if ( !map ) return;

    //   const parksGeoJson = new L.GeoJSON(nationalParks, {
    //     onEachFeature: (feature = {}, layer) => {
    //       const { properties = {} } = feature;
    //       const { Name } = properties;
  
    //       if ( !Name ) return;
  
    //       layer.bindPopup(`<p>${Name}</p>`);
    //     }
    //   });
  
    //   parksGeoJson.addTo(map);
    // }
  }, [])

  const copy =
    "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";
    return (
      <MapContainer ref={mapRef} center={[39.50, -98.35]} zoom={4} whenReady={setMap}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        {/* <GeoJSON key={keyFunction(this.props.map.data.json)} data={this.props.map.data.json} /> */}
        <MyComponent/>
      </MapContainer>
    );
}

export default Home;