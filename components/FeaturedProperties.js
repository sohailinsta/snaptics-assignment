"use client"; // Marks this component as client-side

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const FeaturedProperties = ({ properties }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Use default arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time between slides (3 seconds)
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {properties.map((property, index) => (
          <div key={index} className="p-4">
            <Link href="/projects">
              <div className="bg-gray-800 rounded-lg shadow-lg p-4 text-white">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={property.imageUrl}
                    alt={property.title}
                    layout="fill" // This will fill the parent container
                    objectFit="cover" // This will cover the area and maintain aspect ratio
                    className="rounded-t-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">{property.title}</h3>
                <p className="text-gray-300 mt-2">{property.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Sample usage of FeaturedProperties component
export default function FeaturedPropertiesSection() {
  const properties = [
    {
      imageUrl: "/images/Aakruit-homes.jpg",
      title: "Luxury Villa",
      description: "A beautiful villa with a stunning ocean view.",
    },
    {
      imageUrl: "/images/acropolis.jpg",
      title: "Modern Apartment",
      description: "An elegant apartment in the heart of the city.",
    },
    {
      imageUrl: "/images/sai-pragati-pride.jpg",
      title: "Countryside Cottage",
      description: "A cozy cottage surrounded by nature.",
    },
    {
      imageUrl: "/images/featured-mg-3.avif",
      title: "Beachside Bungalow",
      description: "A charming bungalow steps from the beach.",
    },
    {
      imageUrl: "/images/featured-projects-2.webp",
      title: "Mountain Cabin",
      description: "A rustic cabin with breathtaking mountain views.",
    },
  ];

  return (
    <div className="container mx-auto my-10 py-10 px-5">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Featured Properties
      </h2>
      <FeaturedProperties properties={properties} />
    </div>
  );
}
