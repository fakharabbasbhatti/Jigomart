import React from "react";
import { FaFileContract } from "react-icons/fa";

export const TermsConditions = () => {
  const terms = [
    "By using JigoMart, you agree to comply with all applicable laws and regulations.",
    "Users are responsible for maintaining the confidentiality of their account information.",
    "All product listings must be accurate and not misleading.",
    "JigoMart reserves the right to remove any content that violates our policies.",
    "We are not liable for transactions between buyers and sellers outside the platform.",
    "Prices and availability of products are subject to change without notice.",
  ];

  return (
    <section className="px-6 py-16 overflow-hidden bg-gray-50">
      <div className="max-w-3xl mx-auto">

        {/* Card */}
        <div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6"
          data-aos="fade-up"
        >

          {/* Heading */}
          <h2
            className="text-2xl font-bold text-[#6C4EFF] flex items-center gap-2"
            data-aos="fade-down"
          >
            <FaFileContract /> Terms & Conditions
          </h2>

          {/* Intro */}
          <p
            className="text-gray-600 text-sm leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Welcome to <span className="font-semibold text-[#6C4EFF]">JigoMart</span>. By accessing or using our platform, you agree to the following terms and conditions. Please read them carefully.
          </p>

          {/* List */}
          <ul className="space-y-4">
            {terms.map((term, i) => (
              <li
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 120}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="bg-[#6C4EFF]/10 p-2 rounded-full">
                  <FaFileContract className="text-[#6C4EFF] text-sm" />
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {term}
                </span>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div
            className="border-t pt-4 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-[#6C4EFF] font-semibold text-sm">
              By continuing to use JigoMart, you accept and agree to these terms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};