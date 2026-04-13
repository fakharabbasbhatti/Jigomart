import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const Conditions = () => {
  const conditions = [
    "Must be a verified student in a recognized tertiary institution.",
    "Must actively engage in campus or online student communities.",
    "Must promote JigoMart products responsibly — no spam or misleading listings.",
    "Must list genuine campus items like books, laptops, notes, or gadgets (if selling).",
  ];

  return (
    <section className="px-6 py-15">
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
              Join the JigoMart campus marketplace. Sell products, earn income, and grow your student network.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};