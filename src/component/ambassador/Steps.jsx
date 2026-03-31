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
      title: "Create an Account",
      desc: "Create an account to become an ambassador.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Get Verified",
      desc: "We'll review your details and approve your application.",
    },
    {
      icon: <FaShareAlt />,
      title: "Receive Your Referral",
      desc: "Once approved, you'll get a unique referral link to invite sellers and buyers.",
    },
    {
      icon: <FaBullhorn />,
      title: "Promote JigoMart",
      desc: "Share your link on social media, class groups, and among friends.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Earn Commission",
      desc: "Every time someone signs up and transacts through your link, you earn commissions.",
    },
    {
      icon: <FaWallet />,
      title: "Withdraw Earnings",
      desc: "Once your commission reaches the minimum amount, withdraw to your bank account.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#6C4EFF] mb-12 text-center">
          How it works (Step by Step)
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
                  className: "text-[#6C4EFF] group-hover:text-white w-6 h-6",
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