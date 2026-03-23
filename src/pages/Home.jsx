import React from "react";
import Hero from "../component/home/Hero";
import FeaturedProducts from "../component/home/FeaturedProducts";
import WhyChooseUs from "../component/home/WhyChooseUs";
import AmbassadorSection from "../component/home/AmbassadorSection";
import FAQSection from "../component/home/FAQSection";

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <PopularCategories/>
      <WhyChooseUs/>
      <AmbassadorSection/>
      <FAQSection/>
    </div>
  );
};

export default Home;