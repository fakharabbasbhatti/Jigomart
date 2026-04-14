import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    title: "Apple Macbook Air",
    seller: "Mike Johnson",
    university: "University of Lagos (UNILAG)",
    price: "₦650,000",
    rating: 4.7,
    image: "./hp.jpg",
  },
  {
    id: 2,
    title: "Black Plastic chair",
    seller: "Sam Sulek",
    university: "Lagos State University (LASU)",
    price: "₦7,000",
    rating: 4.9,
    image: "./hp2.jpg",
  },
  {
    id: 3,
    title: "Unisex Grey Sneaker",
    seller: "Kemi Ajayi",
    university: "Lagos State University (LASU)",
    price: "₦45,000",
    rating: 4.5,
    image: "./hp3.jpg",
  },
];

const FeaturedProducts = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-gray-100 py-15 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="text-center mb-12 relative"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-semibold text-gray-800 inline-block relative">
            Featured <span className="text-blue-500">Products</span>
          </h2>

          <div className="flex justify-center relative">
            <div className="w-74 h-3 border-b-1 border-blue-400 rotate-3"></div>
          </div>

          <p className="text-gray-500 mt-5">
            Discover great deals from fellow students across campus
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150} // 👈 stagger effect
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-sm shadow">
                  <FaStar className="text-yellow-400" />
                  {item.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Sold by {item.seller}
                </p>

                <div className="flex items-center gap-1 text-sm text-gray-400 mt-1">
                  <FiMapPin />
                  {item.university}
                </div>

                <p className="text-purple-600 font-semibold mt-3">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturedProducts;