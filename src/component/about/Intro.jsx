import { FaCheckCircle } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-15 px-6">
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
              , your campus-based marketplace designed specifically for students.
            </p>

            <p>
              JigoMart is built to simplify how students buy and sell everyday essentials
              like textbooks, laptops, electronics, stationery, hostel items, and more —
              all within a trusted student community.
            </p>

            <p>
              Instead of wasting time and money on external marketplaces, JigoMart connects
              you directly with students on your campus for fast, safe, and affordable trading.
            </p>
          </div>

          {/* Features */}
          <div className="pt-4">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Why students use JigoMart:
            </h3>

            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Buy and sell campus products like books, laptops, gadgets, and notes easily.",
                "List your unused items in seconds and reach verified students instantly.",
                "Get better prices than traditional marketplaces by trading locally.",
                "Build trust with verified student profiles and secure transactions.",
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
            JigoMart is more than just a marketplace — it’s a student-driven ecosystem
            where buying and selling is simple, secure, and community-based.
          </p>
        </div>
      </div>
    </section>
  );
}