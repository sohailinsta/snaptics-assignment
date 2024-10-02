import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button, Typography } from "@mui/material";

export function VirtualTours() {
  const tours = [
    {
      id: 1,
      title: "Experience the Luxury of Sai Pragathi Homes",
      description:
        "Take a virtual tour of our premium luxury apartments designed for comfort and elegance. Enjoy spacious living areas, state-of-the-art amenities, and beautiful surroundings.",
      videoUrl: "https://www.youtube.com/embed/MCnWV2IZBdQ",
    },
    {
      id: 2,
      title: "Explore Sai Pragathi's Green Villas",
      description:
        "Discover our eco-friendly villas nestled in lush greenery. Experience a perfect blend of nature and modern architecture, designed for sustainable living.",
      videoUrl: "https://www.youtube.com/embed/GU89CFOJv7U",
    },
    {
      id: 3,
      title: "Tour To Our Pristine Communities Home",
      description:
        "Join us for a virtual walkthrough of our vibrant communities, featuring parks, playgrounds, and recreational facilities that cater to families and individuals alike.",
      videoUrl: "https://www.youtube.com/embed/PwJpKVyhms8",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Virtual Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: "16px",
                  boxShadow: 3,
                }}
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe
                    src={tour.videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h3"
                    className="font-semibold mb-2 text-gray-900"
                  >
                    {tour.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="mb-4"
                  >
                    {tour.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: 500,
                      padding: "4px 8px", // Adjusted padding for better spacing
                      marginTop: "8px", // Added margin to top of the button
                      borderRadius: "4px",
                      fontSize: "0.9rem",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    Start Tour
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
