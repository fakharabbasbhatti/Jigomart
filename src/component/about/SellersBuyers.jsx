import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SellersSection = () => {
  const sellerPoints = [
    "List items easily: Post your items for sale in just minutes — no long setup.",
    "Sell safely: With our escrow payment system, your money is protected.",
    "Earn from what you already own: Turn unused items into cash.",
    "Build credibility: Verified student sellers earn trust.",
    "Reach real student buyers: Sell within your campus community.",
  ];

  const buyerPoints = [
    "Affordable prices: Buy quality items at budget-friendly rates.",
    "Campus-only listings: Shop from students in your campus.",
    "Safe payments: 24-hour escrow protection system.",
    "Return policy: Raise dispute & get refund if needed.",
    "No account stress: Browse without signup.",
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Sellers Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            
            <h2 className="text-[#6C4EFF] font-bold text-xl mb-3">
              For Sellers
            </h2>

            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Turn your unused items into cash with a secure and student-focused marketplace.
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
              Sell smarter, faster, and safer with JigoMart.
            </p>
          </div>

          {/* Buyers Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            
            <h2 className="text-[#6C4EFF] font-bold text-xl mb-3">
              For Buyers
            </h2>

            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Discover affordable deals from trusted students within your campus.
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
              Buy with confidence and convenience using JigoMart.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SellersSection;