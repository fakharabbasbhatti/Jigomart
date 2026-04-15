import React from "react";
import { FaUndoAlt } from "react-icons/fa";

export const ReturnPolicy = () => {
  const returns = [
    "Customers can request a return within 7 days of receiving the product.",
    "The product must be unused, undamaged, and in its original packaging.",
    "Certain items like personal care products are non-returnable.",
    "Refunds will be processed after inspection of the returned item.",
    "Shipping charges are non-refundable unless the product is defective.",
    "Return requests must be submitted through the JigoMart platform.",
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
            <FaUndoAlt /> Return Policy
          </h2>

          {/* Intro */}
          <p
            className="text-gray-600 text-sm leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At <span className="font-semibold text-[#6C4EFF]">JigoMart</span>, we aim to provide a smooth and reliable shopping experience. Please review our return policy below to understand how returns and refunds are handled.
          </p>

          {/* List */}
          <ul className="space-y-4">
            {returns.map((item, i) => (
              <li
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 120}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="bg-[#6C4EFF]/10 p-2 rounded-full">
                  <FaUndoAlt className="text-[#6C4EFF] text-sm" />
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {item}
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
              JigoMart ensures hassle-free returns for a better shopping experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};