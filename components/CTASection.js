import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

export function CTASection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Find Your Dream Home?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Contact us today to schedule a visit or request more information about
          our projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            variant="secondary"
            sx={{
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#333",
              },
              color: "black",
            }}
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
