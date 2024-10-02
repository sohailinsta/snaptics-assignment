import React from "react";

export default function Director() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our Managing Director
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            {" "}
            {/* Center the image */}
            <img
              src="/images/director.png"
              alt="Managing Director"
              className="w-64 h-64 object-cover rounded-full shadow-lg" // Ensure width and height are the same for circular shape
            />
          </div>
          <div className="md:col-span-8">
            {" "}
            {/* Details occupy 8 out of 12 columns */}
            <h3 className="text-2xl font-semibold mb-4">Sri K Pratap Reddy</h3>
            <p className="text-gray-600 mb-4">
              Sri K Pratap Reddy garu is an Ex-Member of Legislative Assembly
              and an Educationist & Philanthropist. He has upholded dignity of
              his Office through honest and dedicated service for the
              development of the society. He has always believed that good
              Education and discipline are the pillars for a cultured society.
              His interest in creating an Institution of Excellence on par with
              International standards based on strong principles.
            </p>
            <p className="text-gray-600 mb-4">
              Under his guidance, Sai Pragathi has expanded its portfolio to
              include not just residential projects, but also commercial spaces
              and urban planning initiatives. Sri K Pratap Reddy philosophy of
              blending traditional values with modern innovation continues to
              inspire our team to push boundaries and set new benchmarks in the
              industry.
            </p>
            <button className="bg-black text-white hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
              Read Full Bio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
