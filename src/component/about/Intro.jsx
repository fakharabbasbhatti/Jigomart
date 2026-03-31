import { FaCheckCircle } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Card */}
        <div className="bg-white shadow-md rounded-xl p-8 md:p-12 space-y-6">
          
          {/* Intro Text */}
          <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <p>
              Welcome to{" "}
              <span className="font-bold text-[#6C4EFF] text-lg">
                JigoMart
              </span>
              , the marketplace built by students, for students.
            </p>

            <p>
              We understand that every semester comes with new needs — books,
              hostel items, gadgets, or even a quick way to sell off what you no
              longer need. That’s why we created JigoMart, a trusted campus
              marketplace that connects students who want to buy and sell within
              their school.
            </p>

            <p>
              Whether you’re buying or selling, JigoMart makes campus trading
              simple, safe, and transparent.
            </p>
          </div>

          {/* Features */}
          <div className="pt-4">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              With JigoMart, you can:
            </h3>

            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Sell easily: List your items for free and reach buyers within your university.",
                "Buy safely: Pay confidently knowing your money is held securely for 24 hours until you confirm your item.",
                "Save money: Get quality pre-owned items from fellow students at affordable prices.",
                "Earn credibility: Build trust as a verified student seller on your campus.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <FaCheckCircle className="text-[#6C4EFF] mt-1 text-lg flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Line */}
          <p className="pt-4 text-gray-600 border-t">
            JigoMart makes campus trading simple, secure, and stress-free — so
            you can focus on school while we handle the marketplace.
          </p>
        </div>
      </div>
    </section>
  );
}