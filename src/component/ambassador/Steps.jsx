import React from "react";
import {
  FaUserCheck,
  FaCheckCircle,
  FaShareAlt,
  FaBullhorn,
  FaMoneyBillWave,
  FaWallet,
} from "react-icons/fa";

const Steps = () => {
  const steps = [
    {
      icon: <FaUserCheck />,
      title: "Create Your Account",
      desc: "Sign up as a student to start buying and selling campus products like books, laptops, notes, and gadgets.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Verify Your Profile",
      desc: "Complete your student verification to build trust and access full marketplace features.",
    },
    {
      icon: <FaShareAlt />,
      title: "List or Discover Products",
      desc: "Upload your unused items or browse listings from other students in your campus marketplace.",
    },
    {
      icon: <FaBullhorn />,
      title: "Start Trading on Campus",
      desc: "Share listings, connect with buyers or sellers, and grow your presence in the student community.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Earn or Save Money",
      desc: "Sell unused items for profit or buy affordable second-hand campus products at lower prices.",
    },
    {
      icon: <FaWallet />,
      title: "Secure Payments & Withdrawals",
      desc: "All transactions are protected with escrow, ensuring safe payments and easy withdrawals.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
          How <span className="text-blue-500">JigoMart</span> Works
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-[#1F2937] rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer group"
            >

              {/* Icon */}
              <div className="bg-[#EDEBFF] group-hover:bg-[#6C4EFF] w-12 h-12 flex items-center justify-center rounded-full mb-4 transition">
                {React.cloneElement(step.icon, {
                  className:
                    "text-[#6C4EFF] group-hover:text-white w-6 h-6",
                })}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 text-gray-100">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;