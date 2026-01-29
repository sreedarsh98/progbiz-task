import CTA from "@/components/CTA/CTA";
import FAQ from "@/components/Faq/FAQ";
import HealthSection from "@/components/Healthsection/HealthSection";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Nav/Navbar";
import Testimonials from "@/components/Teastimonial/Testimonials";
import React from "react";

const page: React.FC = () => {
  return (
    <>
      <Hero />
      <HealthSection/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
    </>
  );
};

export default page;
