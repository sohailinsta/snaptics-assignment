import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg", // Indian Male Avatar
    testimonial:
      "Sai Pragathi delivered beyond our expectations. The quality and attention to detail are unmatched.",
  },
  {
    id: 2,
    name: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg", // Indian Female Avatar
    testimonial:
      "Living in a Sai Pragathi home has been a dream come true. The amenities and design are top-notch.",
  },
  {
    id: 3,
    name: "Amit Gupta",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg", // Indian Male Avatar
    testimonial:
      "As an investor, I've seen great returns with Sai Pragathi projects.",
  },
  {
    id: 4,
    name: "Anjali Verma",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg", // Indian Female Avatar
    testimonial:
      "The design and architecture of Sai Pragathi homes are stunning. Truly a remarkable experience.",
  },
  {
    id: 5,
    name: "Vikram Rao",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg", // Indian Male Avatar
    testimonial:
      "I appreciate the transparency and communication throughout the buying process!",
  },
  {
    id: 6,
    name: "Neha Iyer",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg", // Indian Female Avatar
    testimonial:
      "Sai Pragathi has created a wonderful community. I feel safe and happy in my new home.",
  },
];

export function CustomerStories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Customer Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  //   backgroundColor: "black",
                  borderRadius: "16px",
                  padding: "16px",
                  color: "white",
                }}
              >
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar
                      alt={testimonial.name}
                      src={testimonial.avatar}
                      sx={{
                        width: 56,
                        height: 56,
                        marginRight: 2,
                      }} // Adjust the size as needed
                    />
                    <div>
                      <Typography variant="h6" component="h3" color="black">
                        {testimonial.name}
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.testimonial}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
