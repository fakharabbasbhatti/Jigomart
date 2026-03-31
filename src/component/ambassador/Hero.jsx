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
      <div className="absolute inset-0 bg-black/40"></div>

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

        {/* Optional CTA button */}
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-md font-medium cursor-pointer">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default Hero;