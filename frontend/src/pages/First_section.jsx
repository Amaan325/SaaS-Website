import React from "react";
import Header from "../components/First_section/header";
import MainSection from "../components/First_section/main_section";
import Sliding from "../components/Second_section/Sliding";
import Third_sectionLayout from "../components/Third_section/Third_sectionLayout";
import FourthSection from "../components/fourth_section/fourthsection";
import PricingSection from "../components/Fifth_section/PricingSection";
import Navbar from "../components/First_section/navbar";
import TestimonialScroller from "../components/Sixth_section/Testimonialscroller";
import CallToAction from "../components/Seventh_Section/CallToAction";
import Footer from "../components/Eight_section/Footer";
const First_section = () => {
  return (
    <div>
      <Header />

      <div className="w-full h-[680px] ">
        <MainSection />
        <Sliding />
        <Third_sectionLayout />
        <FourthSection />
        <PricingSection />
        <TestimonialScroller />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default First_section;
