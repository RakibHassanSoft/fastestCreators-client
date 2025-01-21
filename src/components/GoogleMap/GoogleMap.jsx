import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const MapComponent = () => {
    const [location, setLocation] = useState([23.7862, 90.4254]); // Gulshan 2, Dhaka coordinates

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({
            duration: 800, // Default duration for all animations
            easing: 'ease-in-out', // Default easing for all animations
            once: true // Only run animations once
        });

        // Get the user's current location using the Geolocation API (if needed in the future)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation([latitude, longitude]); // Set location state (if needed)
                },
                (error) => {
                    console.error("Error getting location: ", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div data-aos="zoom-in" className='mt-28 mb-28'>

            {/* MapContainer: Center on Gulshan 2 or user's location if available */}
            <MapContainer center={location} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Display a marker for Gulshan 2 */}
                <Marker position={location}>
                    <Popup>
                        Gulshan 2, Dhaka <br /> Latitude: {location[0]} <br /> Longitude: {location[1]}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
