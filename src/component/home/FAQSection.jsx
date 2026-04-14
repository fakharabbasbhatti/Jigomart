import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("buyers");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const buyerFaqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click on Sign Up, fill in your student details, and verify your account to start buying products on JigoMart.",
    },
    {
      question: "How do I buy a product?",
      answer:
        "Browse products like textbooks, laptops, notes, and accessories. Add to cart and complete checkout to purchase.",
    },
    {
      question: "Is it safe to buy products?",
      answer:
        "Yes, all sellers are verified students and we encourage safe transactions and meetups.",
    },
    {
      question: "Can I return a product?",
      answer:
        "Return policy depends on the seller. Always check product details before buying.",
    },
  ];

  const sellerFaqs = [
    {
      question: "How do I sell a product?",
      answer:
        "Go to Sell page, upload product images, add description, price, and publish your listing instantly.",
    },
    {
      question: "What products can I sell?",
      answer:
        "You can sell textbooks, laptops, gadgets, notes, and other student-related items.",
    },
    {
      question: "Are there any selling fees?",
      answer:
        "Listing is free. A small commission may apply after a successful sale.",
    },
    {
      question: "How do I get more sales?",
      answer:
        "Upload clear images, write good descriptions, and price your products fairly for faster sales.",
    },
  ];

  const faqs = activeTab === "buyers" ? buyerFaqs : sellerFaqs;

  return (
    <section className="bg-[#f5f7fb] py-15 px-6 font-[Poppins]">
      <div className="max-w-3xl mx-auto">

        {/* Top Text */}
        <p
          className="text-start text-lg text-purple-500 italic mb-4 sm:ml-8"
          data-aos="fade-down"
        >
          FAQ
        </p>

        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-semibold text-gray-800 mt-2"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <span className="bg-purple-500 text-white px-3 py-1 rounded-lg">
            Frequently
          </span>{" "}
          asked questions
        </h2>

        {/* Tabs */}
        <div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex border border-blue-500 rounded-md overflow-hidden">

            <button
              onClick={() => {
                setActiveTab("buyers");
                setOpenIndex(0);
              }}
              className={`px-10 py-3 text-sm transition ${
                activeTab === "buyers"
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              }`}
            >
              Buyers
            </button>

            <button
              onClick={() => {
                setActiveTab("sellers");
                setOpenIndex(0);
              }}
              className={`px-10 py-3 text-sm transition ${
                activeTab === "sellers"
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              }`}
            >
              Sellers
            </button>

          </div>
        </div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 120}
                className="border-b pb-10 border-[#1F293766]"
              >
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

                {isOpen && (
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