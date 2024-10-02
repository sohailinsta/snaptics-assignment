import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import { ProjectCategories } from "./ProjectCategories";

const projects = [
  {
    id: 1,
    name: "Pragathi Sumedha",
    location: "Hyderabad",
    image: "/images/featured-projects-1.webp",
    features: ["3 & 4 BHK", "Luxury Apartments", "Premium Location"],
    price: "Starting from ₹1.2 Cr",
    category: "luxury",
    projectType: "residential",
  },
  {
    id: 2,
    name: "Pragathi Sai Towers",
    location: "Bangalore",
    image: "/images/one.webp",
    features: ["2 & 3 BHK", "Modern Amenities", "City Center"],
    price: "Starting from ₹80 Lakhs",
    category: "residential",
    projectType: "residential",
  },
  {
    id: 3,
    name: "Pragathi Green Villas",
    location: "Chennai",
    image: "/images/three.avif",
    features: ["4 BHK Villas", "Eco-friendly", "Gated Community"],
    price: "Starting from ₹2.5 Cr",
    category: "luxury",
    projectType: "residential",
  },
  {
    id: 4,
    name: "Pragathi Commercial Complex",
    location: "Mumbai",
    image: "/images/four.avif",
    features: ["Office Spaces", "Prime Location", "Modern Infrastructure"],
    price: "Starting from ₹3 Cr",
    category: "commercial",
    projectType: "commercial",
  },
  {
    id: 5,
    name: "Pragathi Business Plaza",
    location: "Delhi",
    image: "/images/five.avif",
    features: ["Corporate Offices", "High-End Facilities", "Business Hub"],
    price: "Starting from ₹5 Cr",
    category: "commercial",
    projectType: "commercial",
  },
  {
    id: 6,
    name: "Pragathi Urban Heights",
    location: "Pune",
    image: "/images/six.avif",
    features: ["2 & 3 BHK", "Luxury Apartments", "City View"],
    price: "Starting from ₹90 Lakhs",
    category: "luxury",
    projectType: "residential",
  },
];

export function ProjectListings() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Box>
      {/* Render the category selection component */}
      {/* Render the project listings */}
      <Box py={10}>
        <Box className="container" mx="auto" px={4} textAlign="center">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Projects Categories
          </Typography>
          <ProjectCategories
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            gap={4}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {project.location}
                    </Typography>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          style={{ fontSize: "0.875rem", color: "#6b7280" }}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Typography
                      variant="body1"
                      style={{ fontWeight: "bold", marginTop: "8px" }}
                    >
                      {project.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "black",
                        "&:hover": {
                          backgroundColor: "#333",
                        },
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                      }}
                    >
                      View Details
                      <ArrowRight
                        style={{
                          marginLeft: "8px",
                          height: "16px",
                          width: "16px",
                        }}
                      />
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
