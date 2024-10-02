import React from "react";
import {
  Wifi,
  Coffee,
  Dumbbell,
  Waves,
  TreePine,
  Tv,
  Shield,
  ParkingSquare,
} from "lucide-react";

const amenities = [
  { icon: <Wifi size={32} />, name: "High-Speed Wi-Fi" },
  { icon: <Coffee size={32} />, name: "Coffee Shop" },
  { icon: <Dumbbell size={32} />, name: "Fitness Center" },
  { icon: <Waves size={32} />, name: "Swimming Pool" },
  { icon: <TreePine size={32} />, name: "Landscaped Gardens" },
  { icon: <Tv size={32} />, name: "Smart Home Features" },
  { icon: <Shield size={32} />, name: "24/7 Security" },
  { icon: <ParkingSquare size={32} />, name: "Covered Parking" },
];

export default function Amenities() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-blue-600 mb-2">{amenity.icon}</div>
              <p className="text-center">{amenity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
