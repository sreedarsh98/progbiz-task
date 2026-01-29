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
    </>
  );
};

export default page;
