import React from "react";
import Hero from "../component/about/Hero";
import Intro from "../component/about/Intro";
import SellersSection from "../component/about/SellersSection";
import Mission from "../component/about/Mission";

const About = () => {
  return (
    <div>
      <Hero/>
      <Intro/>
      <SellersSection/>
      <Mission/>
    </div>
  );
};

export default About;