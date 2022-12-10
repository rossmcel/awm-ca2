import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import '../../App.css';
import 'leaflet/dist/leaflet.css';
import nationalParks from './national-parks.json';

export const Home = () => {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    if(current) {
      const { leafletElement: map } = current;
      if ( !map ) return;

      const parksGeoJson = new L.GeoJSON(nationalParks, {
        onEachFeature: (feature = {}, layer) => {
          const { properties = {} } = feature;
          const { Name } = properties;
  
          if ( !Name ) return;
  
          layer.bindPopup(`<p>${Name}</p>`);
        }
      });
  
      parksGeoJson.addTo(map);
    }
  }, [])

  const copy =
    "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";
    return (
      <MapContainer ref={mapRef} center={[39.50, -98.35]} zoom={4}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </MapContainer>
    );
}

export default Home;