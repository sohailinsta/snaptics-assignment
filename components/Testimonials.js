import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Homeowner",
    text: "Sai Pragathi made our dream home a reality. Their attention to detail is unparalleled.",
  },
  {
    name: "Jane Smith",
    role: "Investor",
    text: "I've invested in multiple Sai Pragathi projects. The returns have been consistently excellent.",
  },
  {
    name: "Robert Johnson",
    role: "Real Estate Agent",
    text: "Working with Sai Pragathi has been a pleasure. They truly care about their customers.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
