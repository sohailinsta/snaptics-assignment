import React from "react";
import { motion } from "framer-motion";

const awards = [
  { name: "Best Residential Project 2022", image: "/images/award-1.jpg" },
  { name: "Green Building Excellence Award", image: "/images/award-4.jpg" },
  { name: "Customer Satisfaction Award 2023", image: "/images/award-3.jpg" },
];

export function AwardsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Awards and Recognition
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={award.image}
                  alt={award.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-lg">{award.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
