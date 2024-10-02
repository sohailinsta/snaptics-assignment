import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Director from "@/components/Director";
import Amenities from "@/components/Amenities";
import PropertyPlans from "@/components/PropertyPlans";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 ">
      <div className="backdrop-blur-sm bg-white/30">
        <Header />
        <Hero />
        <FeaturedProperties />
        <Amenities />
        <Director />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <PropertyPlans />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
