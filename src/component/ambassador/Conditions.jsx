import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const Conditions = () => {
  const conditions = [
    "Must be a verified student in a Nigerian tertiary institution.",
    "Must be active on social media or campus communities.",
    "Must promote JigoMart with integrity — no spam or misleading promotions.",
  ];

  return (
    <section className="px-6 py-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6">
          
          {/* Heading */}
          <h2 className="text-2xl font-bold text-[#6C4EFF]">
            Conditions
          </h2>

          {/* List */}
          <ul className="space-y-4">
            {conditions.map((cond, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="bg-[#6C4EFF]/10 p-2 rounded-full">
                  <FaCheckCircle className="text-[#6C4EFF] text-sm" />
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {cond}
                </span>
              </li>
            ))}
          </ul>

          {/* Footer CTA */}
          <div className="border-t pt-4 text-center">
            <p className="text-[#6C4EFF] font-semibold text-sm">
              Join the movement. Represent your school. Earn as you grow.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};