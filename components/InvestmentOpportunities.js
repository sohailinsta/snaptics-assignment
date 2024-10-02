import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, Building, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Returns",
    description: "Our projects consistently deliver above-market returns.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "All our properties are situated in high-growth areas.",
  },
  {
    icon: Building,
    title: "Quality Construction",
    description:
      "We use top-grade materials and modern construction techniques.",
  },
  {
    icon: Award,
    title: "Award-Winning Designs",
    description:
      "Our projects have won multiple awards for architecture and design.",
  },
];

export function InvestmentOpportunities() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Investment Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
