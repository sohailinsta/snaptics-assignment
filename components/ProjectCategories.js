import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const categories = ["all", "residential", "commercial", "luxury"];

// Custom Button with hover effect and black background
const CategoryButton = styled(Button)(({ theme, selected }) => ({
  backgroundColor: selected ? "black" : "white",
  color: selected ? "white" : "black",
  border: selected ? "1px solid black" : "1px solid rgba(0, 0, 0, 0.23)",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: selected ? "#333" : "#000", // Hover effect
    color: "white",
    borderColor: "black",
  },
}));

export function ProjectCategories({ setSelectedCategory, selectedCategory }) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant="outlined"
              selected={selectedCategory === category} // Pass selected state for styling
            >
              {category}
            </CategoryButton>
          ))}
        </div>
      </div>
    </section>
  );
}
