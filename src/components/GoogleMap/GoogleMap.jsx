import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Fix for default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const MapComponent = () => {
  const [location, setLocation] = useState([23.7862, 90.4254]); // Default location (Gulshan 2, Dhaka)
  const [geoError, setGeoError] = useState("");

  const handleGeoError = (error) => {
    if (error.code === error.PERMISSION_DENIED) {
      setGeoError("You denied location access. Showing default location.");
    } else {
      setGeoError("Failed to get your location. Showing default location.");
    }
  };

  const retryLocation = () => {
    setGeoError(""); // Clear previous error message
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => setLocation([coords.latitude, coords.longitude]),
        handleGeoError
      );
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => setLocation([coords.latitude, coords.longitude]),
        handleGeoError
      );
    } else {
      setGeoError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div data-aos="fade-up" className="mt-28 mb-28">
      {geoError && (
        <div className="text-red-500 mb-4 text-center">
          {/* {geoError} */}
        </div>
      )}

      {/* Retry Button for location access */}
      {geoError && (
        <div className="text-center">
          <button 
            onClick={retryLocation}
            className="bg-teal-600 text-white py-2 px-4 rounded mt-4 hover:bg-teal-700"
          >
            Retry Location Access
          </button>
        </div>
      )}

      <MapContainer center={location} zoom={13} scrollWheelZoom={true} style={{ height: "400px", width: "100%" }}>
        <ChangeView center={location} />
        <TileLayer
  attribution='&copy; OpenStreetMap contributors | Map data &copy; <a href="https://carto.com/">CartoDB</a>'
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
/>


        <Marker position={location}>
          <Popup>
            {geoError ? "Using Default Location:" : "You are here!"}<br />
            Latitude: {location[0]} <br />
            Longitude: {location[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
