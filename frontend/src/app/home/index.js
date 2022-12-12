import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import {
  Box,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, useMapEvents, Marker, Popup, useMap } from 'react-leaflet';
import '../../App.css';
import 'leaflet/dist/leaflet.css';
import nationalParks from './national-parks.json';
import $ from "jquery";
import { useAxios } from "../../utils/useAxios";
import Cookies from 'js-cookie';

export const Home = () => {
  const api = useAxios();
  const mapRef = useRef();
  const [locations, setLocations] = useState(null);
  const [map, setMap] = useState(null);
  const [mapBounds, setMapBounds] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [markersRendered, setMarkersRendered] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });

  useEffect(() => {
    console.log("Test");
      const markers_url = `https://rossmcelhinneycollege.xyz/api/WorldBorder/`;
      // const response = axios.get(markers_url);
      axios.get(markers_url)
        .then(res => {
          console.log(res);
          const geojson = res.data;
          setLocations(geojson);
          console.log("Geojson is " + geojson);
          console.log(geojson);
          setDataLoaded(true);
        });
  }, [dataLoaded]);

  const MyComponent = () => {
    const mapName = useMap();
    // useEffect(() => {
    //   setMap(mapName);
    //   setMapBounds(mapName.getBounds().toBBoxString());
    // }, []);
    setMap(mapName);
    // console.log(mapName.getBounds().toBBoxString());
    //console.log(map.getBounds().toBBoxString());
    // setMapBounds(map.getBounds().toBBoxString());

    // const load_markers = () => {
    //   console.log("Test");
    //   const markers_url = `http://127.0.0.1:8000/api/WorldBorder/?in_bbox=${mapBounds}`;
    //   // const response = axios.get(markers_url);
    //   axios.get(markers_url)
    //     .then(res => {
    //       console.log(res);
    //       const geojson = res.data;
    //       setLocations(geojson);
    //       console.log("Geojson is " + geojson);
    //     });
    // }

    const render_markers = () => {
        // const markers = load_markers();
        const markers = locations;
        console.log("markers are ")
        console.log(markers);
        L.geoJSON(markers)
            .bindPopup((layer) => "<b>Hello world!</b><br>I am a popup.<form><input></input></form>" + layer.feature.properties.name)
            .addTo(map);
    }

    //map.once("moveend", render_markers);

    // useEffect( () => () => {
    //   setMarkersRendered(true);
    // }, [] );

    // useEffect( () => () => {
    //   console.log("unmount");
    //   if(!markersRendered) {
    //     map.on("moveend", render_markers);
    //   }
    //   setMarkersRendered(true);
    // }, [] );
    // useEffect(() => {
    //   console.log("unmount");
    //   if(!markersRendered) {
    //     map.on("moveend", render_markers);
    //     setMarkersRendered(true);
    //   }
    // }, [markersRendered])
    // map.once()
    // map.on('click', function (e) {
    //   console.log("Map Clicked");
      // marker
      //     .setLatLng(e.latlng)
      //     .addTo(map);
      // console.log(marker);
      // //document.getElementById("selectedLocationLat").innerHTML = marker._latlng.lat;
      // //document.getElementById("selectedLocationLng").innerHTML = marker._latlng.lng;
      // const markerNameElement = document.getElementById("id_name");
      // const latElement = document.getElementById("id_lat");
      // const lngElement = document.getElementById("id_lng");
      // markerNameElement.value = "Selected Point";
      // latElement.value = marker._latlng.lat;
      // lngElement.value = marker._latlng.lng;
      // });
      const mapLocal = useMapEvents({
        click(e) {
          console.log("Click");
          console.log(e.latlng.lat);
          console.log(e.latlng.lng);
          const ajaxData = {
            lat: e.latlng.lat,
            lng: e.latlng.lng,
          }
            const fetchData = async () => {
              try {
                const response = await api.post("map/add/selected",{
                  data: JSON.stringify({payload: ajaxData,}),
                });
                console.log(response);
              } catch {
                console.log("Something went wrong");
              }
            };
            fetchData();

            /* This is the code used for Overpass if needed */
            // const overpassData = {
            //   // query: $("#query-text").val(),
            //   query: "test",
            //   bbox: mapBounds
            // }

            
            // const overpassFetchData = async () => {
            //   console.log("mapbounds is " + mapBounds);
            //   try {
            //     const response = await api.post(`/map/add/overpass`,{
            //       data: overpassData,
            //     });
            //     console.log(response);
            //     const geojsonT = response.data;
            //     // setLocations(geojson);
            //     console.log("Geojson is " + geojsonT);
            //     console.log(geojsonT);
            //     //Create a cluster group for our markers to avoid clutter. 'Marker Cluster' is a Leaflet plugin.
            //     let poi_markers = L.markerClusterGroup();
                
            //     // Handle GeoJSON response from the server.
            //     var geoJsonLayer = L.geoJson(response.data, {
            //         pointToLayer: function (feature, latlng) {
            //             // Associate each point with the icon we made earlier
            //             return L.marker(latlng);
            //         },
            //         onEachFeature: function (feature, layer) {
            //             // For each feature associate a popup with the 'name' property
            //             layer.bindPopup(feature.properties.name);
            //         }
            //     });
                
            //     // Add the GeoJSON layer to the cluster.
            //     poi_markers.addLayer(geoJsonLayer);
                
            //     // Add the cluster to the map.
            //     mapName.addLayer(poi_markers);
            //   } catch {
            //     console.log("Something went wrong");
            //   }
            // };
            // overpassFetchData();
        }
      });
  }

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [positionNotEmpty, setPositionNotEmpty] = useState(false);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [hasPosted, setHasPosted] = useState(false);
    const mapName = useMap();
    let storePosition = null;
    mapName.locate();

    function getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + "=")) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }

        const map = useMapEvents({
          // click() {
          //   console.log("Here");
          //   map.locate();
          // },
          // moveend() {
          //     console.log("Here");
          //     map.locate();
          // },
          locationfound(e) {
            if(position == null) {
                console.log("Current Location: " + e.latlng);
                setPosition(e.latlng);
                setLat(e.latlng.lat);
                setLong(e.latlng.lng);
                storePosition = e.latlng;
                console.log("e latlng is")
                console.log(e.latlng);
                map.flyTo(e.latlng, map.getZoom());

                const ajaxData = {
                  lat: e.latlng.lat,
                  lng: e.latlng.lng,
                }
                  function getCookie(name) {
                    let cookieValue = null;
                    cookieValue = Cookies.get(name); 
                    return cookieValue;
                  }
                  const fetchData = async () => {
                    try {
                      const response = await api.post("/map/add/",{
                        data: JSON.stringify({payload: ajaxData,}),
                      });
                      console.log(response);
                    } catch {
                      console.log("Something went wrong");
                    }
                  };
                  if(!hasPosted) {
                    fetchData();
                  }
              }
          },
        });

    // useEffect(() => {
      
    // }, [locationFound]);

    useEffect( () => () => {
      setMap(mapName);
      setMapBounds(mapName.getBounds().toBBoxString());
      console.log("sp" + storePosition);
      if(storePosition != null) {
        setPosition(storePosition);
        setHasPosted(true);
      }
    }, [] );
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  const copy =
    "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";
    return (
      <>
      <Flex direction="column" mt="2vh">
        <Heading size="xs" alignSelf="center">Please use the below links here due to React-Leaflet DOM bug</Heading>
        <Flex ml="39.5vw" mr="39.5vw" mt="0.6vh">
            <Button minW="10vw" mr="0.5vw">
            <a href='/login'>Login</a>
            </Button>
            <Button minW="10vw" ml="0.5vw">
            <a href='/login'>Register</a>
            </Button>
          </Flex>
        </Flex>
      {dataLoaded == true ?
      <>
        <Flex direction="wrap" ml="2%" mr="2%" mt="0.5%" minW="96%" mb="8vh">
          <MapContainer ref={mapRef} center={[52.76505435719559, -6.648964395328444]} zoom={4} whenReady={setMap}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
            {/* <GeoJSON key={keyFunction(this.props.map.data.json)} data={this.props.map.data.json} /> */}
            <MyComponent/>
            <LocationMarker />
            {locations != null ?
                <GeoJSON
                  attribution="Markers"
                  data={locations}
                />
            :
            <></>
          }
          </MapContainer>
        </Flex>
      </>
      :
      <Box>Loading.......</Box>
      }
      </>
    );
}

export default Home;