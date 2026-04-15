import React from "react";
import { FaShieldAlt } from "react-icons/fa";

export const PrivacyPolicy = () => {
  const policies = [
    "We collect basic user information such as name, email, and contact details for order processing.",
    "Your personal data is never sold or shared with third parties without your consent.",
    "We use secure payment gateways to ensure safe transactions.",
    "Cookies are used to enhance user experience and website performance.",
    "Users can request to update or delete their personal information anytime.",
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
            <FaShieldAlt /> Privacy Policy
          </h2>

          {/* Intro */}
          <p
            className="text-gray-600 text-sm leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At <span className="font-semibold text-[#6C4EFF]">JigoMart</span>, we value your privacy and are committed to protecting your personal information. Below are the key points of how we handle your data.
          </p>

          {/* List */}
          <ul className="space-y-4">
            {policies.map((policy, i) => (
              <li
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 120}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="bg-[#6C4EFF]/10 p-2 rounded-full">
                  <FaShieldAlt className="text-[#6C4EFF] text-sm" />
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {policy}
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
              Your trust matters. JigoMart ensures a secure and reliable shopping experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};