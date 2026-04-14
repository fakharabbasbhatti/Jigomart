import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiLipstick, GiPerfumeBottle } from "react-icons/gi";
import { FaShoppingBasket } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    id: 1,
    title: "Beauty",
    items: "300+ items",
    color: "#E91E63",
    icon: <GiLipstick />,
  },
  {
    id: 2,
    title: "Fragrances",
    items: "100+ items",
    color: "#9C27B0",
    icon: <GiPerfumeBottle />,
  },
  {
    id: 3,
    title: "Groceries",
    items: "50+ items",
    color: "#4CAF50",
    icon: <FaShoppingBasket />,
  },
  {
    id: 4,
    title: "Furniture",
    items: "200+ items",
    color: "#795548",
    icon: <MdChair />,
  },
];

const PopularCategories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-gray-100 py-15 px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto">

        {/* Header - DIFFERENT (fade-down) */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-semibold text-gray-800">
            <span className="text-[#4a90e2] italic">Popular</span> Categories
          </h2>
          <p className="text-gray-500 mt-2">
            Find what you need across different product categories
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/product`)}
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger
              className="bg-gradient-to-r from-[#4a90e2] to-[#3b7cc4] rounded-xl py-10 text-center text-white shadow-md hover:scale-105 transition duration-300 cursor-pointer"
            >
              {/* Icon (different animation inside) */}
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                data-aos="zoom-in"
                data-aos-delay={index * 150 + 100}
              >
                <span style={{ color: cat.color }} className="text-3xl">
                  {cat.icon}
                </span>
              </div>

              <h3 className="font-semibold text-xl">
                {cat.title}
              </h3>

              <p className="text-xs text-blue-100 mt-1">
                {cat.items}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PopularCategories;