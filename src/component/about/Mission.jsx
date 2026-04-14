import React from "react";

const Mission = () => {
  return (
    <section className="mt-20 px-6 py-15 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <div
          className="relative overflow-hidden rounded-xl p-10 md:p-14 text-center text-white shadow-2xl"
          data-aos="fade-up"
        >

          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6C4EFF] to-[#7A5CFF]"></div>

          {/* Glow Effect */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10">

            {/* Heading */}
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 tracking-wide"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Our Mission
            </h3>

            {/* Text */}
            <p
              className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed text-white/90"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We are redefining how students buy and sell campus products —
              from textbooks and laptops to notes, gadgets, and essential study materials.
              Our mission is to make student-to-student trading simple, affordable, and secure.
              <span className="block mt-2 font-medium text-white">
                Every product listed helps a student save money or earn income within their campus community.
              </span>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;