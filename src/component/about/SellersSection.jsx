import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SellersSection = () => {
  const sellerPoints = [
    "List campus products easily: Upload textbooks, laptops, notes, and gadgets in minutes.",
    "Sell safely: Secure escrow system protects your payment until delivery is confirmed.",
    "Earn from unused items: Turn old books, electronics, and accessories into cash.",
    "Build seller reputation: Verified student sellers gain trust and more sales.",
    "Reach real buyers: Sell directly to students in your campus community.",
  ];

  const buyerPoints = [
    "Affordable campus deals: Buy textbooks, laptops, notes, and essentials at low prices.",
    "Verified student listings: Shop only from trusted students in your campus.",
    "Secure payments: Escrow protection ensures safe transactions.",
    "Easy dispute support: Get help if product does not match description.",
    "No signup browsing: Explore products freely before creating an account.",
  ];

  return (
    <section className="bg-gray-50 py-15 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Sellers Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

            <h2 className="text-[#6C4EFF] font-bold text-xl mb-3">
              For Sellers
            </h2>

            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Turn your unused campus products into income with a fast, safe, and student-focused marketplace.
            </p>

            <h4 className="text-sm font-semibold mb-3 text-gray-800">
              As a Seller, You Get:
            </h4>

            <ul className="space-y-3">
              {sellerPoints.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 transition"
                >
                  <div className="bg-[#6C4EFF]/10 p-2 rounded-full">
                    <FaCheckCircle className="text-[#6C4EFF] text-sm" />
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-sm mt-6 border-t pt-4">
              Sell smarter, faster, and safer with JigoMart campus marketplace.
            </p>
          </div>

          {/* Buyers Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

            <h2 className="text-[#6C4EFF] font-bold text-xl mb-3">
              For Buyers
            </h2>

            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Discover affordable campus products directly from trusted student sellers.
            </p>

            <h4 className="text-sm font-semibold mb-3 text-gray-800">
              As a Buyer, You Enjoy:
            </h4>

            <ul className="space-y-3">
              {buyerPoints.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 transition"
                >
                  <div className="bg-[#6C4EFF]/10 p-2 rounded-full">
                    <FaCheckCircle className="text-[#6C4EFF] text-sm" />
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-sm mt-6 border-t pt-4">
              Buy trusted campus products with confidence and convenience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SellersSection;