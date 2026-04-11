import React from "react";
import bgImage from "../../assets/abh.jpg"; // 👈 Apni image yahan import karo

const Hero = () => {
  return (
    <section
      className="relative h-96 flex items-center px-6 md:px-16 bg-gray-100 font-sans"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Become a JigoMart Student Ambassador
        </h1>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          Help grow your campus marketplace and earn rewards. Our Student
          Ambassador Program empowers active, social, and creative students to
          represent JigoMart in their universities.
        </p>
      </div>
    </section>
  );
};

export default Hero;