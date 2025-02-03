import React from 'react';

const GoogleMap = () => {
    return (
        <div>
            
        </div>
    );
};

export default GoogleMap;


// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const MapComponent = () => {
//   const [location, setLocation] = useState([23.7862, 90.4254]); // Default: Gulshan 2, Dhaka
//   const [geoError, setGeoError] = useState(null); // State to store geolocation errors

//   useEffect(() => {
//     // Initialize AOS when component mounts
//     AOS.init({
//       duration: 800, // Default duration for all animations
//       easing: 'ease-in-out', // Default easing for all animations
//       once: true // Only run animations once
//     });

//     // Get the user's current location using the Geolocation API (if available)
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation([latitude, longitude]); // Update location state
//         },
//         (error) => {
//           console.error("Error getting location: ", error);
//           setGeoError(error); // Set the error state
//         }
//       );
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//       setGeoError(new Error("Geolocation is not supported by this browser."));
//     }
//   }, []);

//   return (
//     <div data-aos="zoom-in" className='mt-28 mb-28'>
//       {geoError && (
//         <div style={{ marginBottom: "1rem", color: "red" }}>
//           {geoError.message || "Unable to retrieve your location. Using default location."}
//         </div>
//       )}

//       {/* MapContainer: Center on the user's location if available, otherwise default */}
//       <MapContainer center={location} zoom={13} style={{ height: "400px", width: "100%" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         {/* Marker at the current location */}
//         <Marker position={location}>
//           <Popup>
//             {geoError
//               ? `Default Location: Gulshan 2, Dhaka
//                  \nLatitude: ${location[0]}, Longitude: ${location[1]}`
//               : `Your Location:
//                  \nLatitude: ${location[0]}, Longitude: ${location[1]}`}
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;
