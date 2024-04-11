import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

  // Initialize map
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 12
    });

    // Add markers
    // Handle marker click to navigate to details screen
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;