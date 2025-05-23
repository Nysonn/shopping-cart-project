// AboutUsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import OurStorySection from "./OurStorySection";
import OurValuesSection from "./OurValuesSection";
import OurImpactSection from "./OurImpactSection";
import MeetOurTeamSection from "./MeetOurTeamSection";
import CTASection from "./CTASection";

export default function AboutUsPage() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white"
    >
      <HeroSection />
      <OurStorySection />
      <OurValuesSection />
      <OurImpactSection />
      <MeetOurTeamSection />
      <CTASection />
    </motion.div>
  );
}
