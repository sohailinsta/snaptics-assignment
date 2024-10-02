import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import for Map components to avoid SSR issues
const MapWithNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  {
    ssr: false,
  }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Define a custom marker icon inside useEffect to access the window
const projects = [
  { id: 1, name: "Pragathi Sumedha", lat: 17.385044, lng: 78.486671 },
  { id: 2, name: "Pragathi Sai Towers", lat: 12.971599, lng: 77.594563 },
  { id: 3, name: "Pragathi Green Villas", lat: 13.08268, lng: 80.270718 },
];

export function ProjectMap() {
  const [isBrowser, setIsBrowser] = useState(false);
  const [customIcon, setCustomIcon] = useState(null);

  useEffect(() => {
    setIsBrowser(true);

    // Importing Leaflet here to avoid SSR issues
    const L = require("leaflet");

    // Define a custom marker icon
    const icon = L.icon({
      iconUrl: "/leaflet/marker-icon.png", // Replace with your marker icon path
      iconSize: [25, 41], // Size of the icon
      iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
      popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    });

    setCustomIcon(icon);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Project Locations
        </h2>
        <div className="h-96 rounded-lg overflow-hidden">
          {isBrowser &&
            customIcon && ( // Ensure customIcon is set
              <MapWithNoSSR
                center={[20.5937, 78.9629]}
                zoom={5}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {projects.map((project) => (
                  <Marker
                    key={project.id}
                    position={[project.lat, project.lng]}
                    icon={customIcon} // Pass the custom icon here
                  >
                    <Popup>{project.name}</Popup>
                  </Marker>
                ))}
              </MapWithNoSSR>
            )}
        </div>
      </div>
    </section>
  );
}
