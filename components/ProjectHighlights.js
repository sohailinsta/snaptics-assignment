import React from "react";
import { motion } from "framer-motion";
import { Building, Users, MapPin } from "lucide-react";

const stats = [
  { icon: Building, value: 15, label: "Completed Projects" },
  { icon: Users, value: 5000, label: "Happy Families" },
  { icon: MapPin, value: 3, label: "Cities" },
];

export function ProjectHighlights() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Project Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold mb-2">{stat.value}+</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
