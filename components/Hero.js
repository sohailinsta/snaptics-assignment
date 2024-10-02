"use client"; // Add this at the top

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const images = [
    "/images/hero-img.webp",
    "/images/hero-img-2.webp",
    "/images/hero-img-3.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[600px]">
      <Image
        src={images[currentImageIndex]}
        alt="Cityscape"
        layout="fill"
        objectFit="cover"
        className="brightness-50 transition-opacity duration-1000 ease-in-out"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Sai Pragathi</h1>
        <p className="text-xl mb-8">
          Crafting Luxurious Living Spaces Since 1995
        </p>
        <button className="bg-black hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Explore Our Projects
        </button>
      </div>
    </div>
  );
}
