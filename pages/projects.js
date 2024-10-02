import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectsIntro } from "@/components/ProjectsIntro";
import { ProjectListings } from "@/components/ProjectListings";
import { ProjectHighlights } from "@/components/ProjectHighlights";
import { ProjectMap } from "@/components/ProjectMap";
import { CustomerStories } from "@/components/CustomerStories";
import { ProjectTimelines } from "@/components/ProjectTimelines";
import { VirtualTours } from "@/components/VirtualTours";
import { InvestmentOpportunities } from "@/components/InvestmentOpportunities";
import { Sustainability } from "@/components/Sustainability";
import { AwardsSection } from "@/components/AwardsSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 ">
      <div className="backdrop-blur-sm bg-white/30">
        <Header />
        <ProjectsIntro />
        <ProjectHighlights />
        <ProjectListings />
        <ProjectMap />
        <CustomerStories />
        <ProjectTimelines />
        <VirtualTours />
        <InvestmentOpportunities />
        <Sustainability />
        <AwardsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
