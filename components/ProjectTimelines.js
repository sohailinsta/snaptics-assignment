import React from "react";
import { motion } from "framer-motion";

const timelines = [
  { phase: "Planning", date: "Jan 2023", completed: true },
  { phase: "Design", date: "Mar 2023", completed: true },
  { phase: "Construction Start", date: "Jun 2023", completed: true },
  { phase: "50% Complete", date: "Dec 2023", completed: false },
  { phase: "75% Complete", date: "Mar 2024", completed: false },
  { phase: "Completion", date: "Jun 2024", completed: false },
];

export function ProjectTimelines() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Project Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
          {timelines.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 ${
                index % 2 === 0
                  ? "text-right pr-8 md:pr-0 md:pl-1/2"
                  : "pl-8 md:pl-0 md:pr-1/2"
              }`}
            >
              <div
                className={`md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full ${
                  item.completed ? "bg-green-500" : "bg-gray-500"
                }`}
              ></div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">{item.phase}</h3>
                <p className="text-gray-600">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
