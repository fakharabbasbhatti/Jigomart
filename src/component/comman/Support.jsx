import React from "react";
import { FaHeadset, FaEnvelope, FaPhone } from "react-icons/fa";

export const Support = () => {
  return (
    <section className="px-6 py-16 overflow-hidden bg-gray-50">
      <div className="max-w-3xl mx-auto">

        {/* Card */}
        <div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-8"
          data-aos="fade-up"
        >

          {/* Heading */}
          <h2
            className="text-2xl font-bold text-[#6C4EFF] flex items-center gap-2"
            data-aos="fade-down"
          >
            <FaHeadset /> Support
          </h2>

          {/* Intro */}
          <p
            className="text-gray-600 text-sm leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Need help? The <span className="font-semibold text-[#6C4EFF]">JigoMart</span> support team is here to assist you. Reach out to us through any of the methods below.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">

            <div
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
              data-aos="fade-right"
            >
              <div className="bg-[#6C4EFF]/10 p-2 rounded-full">
                <FaEnvelope className="text-[#6C4EFF]" />
              </div>
              <span className="text-gray-700 text-sm">
                support@jigomart.com
              </span>
            </div>

            <div
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="bg-[#6C4EFF]/10 p-2 rounded-full">
                <FaPhone className="text-[#6C4EFF]" />
              </div>
              <span className="text-gray-700 text-sm">
                +92 300 1234567
              </span>
            </div>

          </div>

          {/* Contact Form */}
          <form
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6C4EFF]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6C4EFF]"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6C4EFF]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#6C4EFF] text-white py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* Footer */}
          <div
            className="border-t pt-4 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-[#6C4EFF] font-semibold text-sm">
              We're here to help you 24/7 at JigoMart 💜
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};