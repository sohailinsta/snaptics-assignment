import React from "react";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose Sai Pragathi?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4 mb-4">
              <Check className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Construction</h3>
            <p>
              We use only the finest materials and adhere to the highest
              standards.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4 mb-4">
              <Check className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
            <p>
              We understand the value of your time and always deliver on
              schedule.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4 mb-4">
              <Check className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Customer Satisfaction
            </h3>
            <p>
              Our customers' happiness is our top priority. We go above and
              beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
