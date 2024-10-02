import React from "react";

const plans = [
  {
    name: "Cozy 1BHK",
    location: "City Center",
    price: "₹50 Lakhs",
    image: "/images/plan-1.webp",
  },
  {
    name: "Spacious 2BHK",
    location: "Suburban Area",
    price: "₹75 Lakhs",
    image: "/images/plan-2.webp",
  },
  {
    name: "Luxurious 3BHK",
    location: "Gated Community",
    price: "₹1.2 Crore",
    image: "/images/plan-3.webp",
  },
  {
    name: "Premium 4BHK Villa",
    location: "Beachfront",
    price: "₹2.5 Crore",
    image: "/images/plan-4.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                {" "}
                {/* Use flex-grow to allow the content to take available space */}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-2">{plan.location}</p>
                <p className="text-primary font-bold mb-4">{plan.price}</p>
                <button className="w-full bg-black text-white hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
