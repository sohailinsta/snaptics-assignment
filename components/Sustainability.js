import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Sun, Recycle } from "lucide-react";

const initiatives = [
  {
    icon: Leaf,
    title: "Green Spaces",
    description: "We incorporate lush green spaces in all our projects.",
  },
  {
    icon: Droplet,
    title: "Water Conservation",
    description: "Our properties feature rainwater harvesting systems.",
  },
  {
    icon: Sun,
    title: "Solar Energy",
    description: "We utilize solar panels for common area lighting.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description:
      "We implement efficient waste segregation and recycling programs.",
  },
];

export function Sustainability() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Commitment to Sustainability
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <initiative.icon className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
