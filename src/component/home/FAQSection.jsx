import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "How do i create account an account ?",
      answer: "",
    },
    {
      question: "How do i buy a product?",
      answer:
        "Browse listings, add items to your cart, and follow the checkout process to complete your order.",
    },
    {
      question: "Is it safe to use the platform?",
      answer: "",
    },
    {
      question: "Are there any fees to sell on the platform ?",
      answer: "",
    },
    {
      question: "How do i build trust with buyers?",
      answer: "",
    },
  ];

  return (
    <section className="bg-[#f5f7fb] py-20 px-6 font-[Poppins]">
      <div className="max-w-3xl mx-auto">

        {/* Top Text */}
        
<p className="text-start text-lg text-purple-500 italic mb-4 sm:ml-8">FAQ</p>
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-gray-800 mt-2">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-lg">
            Frequently
          </span>{" "}
          asked questions
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mt-12">
          <div className="flex border border-blue-500 rounded-md overflow-hidden">
            <button className="px-10 py-3 bg-blue-500 text-white text-sm">
              Buyers
            </button>
            <button className="px-10 py-3 text-blue-500 text-sm bg-transparent">
              Sellers
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-6 ">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b pb-10 border-[#1F293766]">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className="text-lg md:text-xl text-gray-800 font-medium">
                    {faq.question}
                  </h3>

                  {isOpen ? (
                    <RxCross2 className="text-gray-600" />
                  ) : (
                    <FiPlus className="text-gray-600" />
                  )}
                </div>

                {isOpen && faq.answer && (
                  <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}