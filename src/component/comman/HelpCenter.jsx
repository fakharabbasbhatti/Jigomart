import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

export const HelpCenter = () => {
  const faqs = [
    "How can I place an order on JigoMart?",
    "What payment methods are available?",
    "How can I track my order?",
    "What is the return and refund process?",
    "How can I contact customer support?",
    "Can I cancel my order after placing it?",
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
            <FaQuestionCircle /> Help Center
          </h2>

          {/* Intro */}
          <p
            className="text-gray-600 text-sm leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Welcome to <span className="font-semibold text-[#6C4EFF]">JigoMart</span> Help Center. Find answers to common questions and get support for your shopping experience.
          </p>

          {/* FAQ List */}
          <ul className="space-y-4">
            {faqs.map((faq, i) => (
              <li
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 120}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer"
              >
                <div className="bg-[#6C4EFF]/10 p-2 rounded-full">
                  <FaQuestionCircle className="text-[#6C4EFF] text-sm" />
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {faq}
                </span>
              </li>
            ))}
          </ul>

          {/* Support Box */}
          <div
            className="border-t pt-6 text-center space-y-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-gray-600 text-sm">
              Still need help?
            </p>
            <p className="text-[#6C4EFF] font-semibold text-sm">
              Contact our support team at support@jigomart.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};