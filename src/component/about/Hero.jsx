import { useEffect } from "react";
import bgImage from "../../assets/abh.jpg";

export default function Hero() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative w-full h-[95vh] font-[Poppins]">
      
      {/* Background Image */}
      <img
        src={bgImage}
        alt="about background"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-snug md:leading-tight"
          data-aos="fade-up"
        >
          About{" "}
          <span className="text-[#4a90e2] font-bold">Us</span>
        </h1>

        {/* Paragraph */}
        <p
          className="mt-4 text-gray-200 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Making Campus Buying & Selling Easier, Safer, and Smarter.
        </p>

      </div>

      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-r from-[#4a90e2] to-[#7d4cdb]"></div>
    </div>
  );
}