import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
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
    <div className="relative w-full h-[95vh] font-[Poppins] overflow-hidden">

      {/* Background (no zoom animation) */}
      <img
        src="./hb.jpg"
        alt="students"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        {/* Heading - FADE ONLY */}
        <h1
          className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-snug"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The{" "}
          <span className="text-[#4a90e2] font-bold">
            Student MarketPlace
          </span>
          <br />
          you’ve been waiting for 🛒
        </h1>

        {/* Paragraph - FADE ONLY */}
        <p
          className="mt-5 text-gray-200 max-w-2xl text-sm sm:text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Buy, sell and discover campus essentials like textbooks, laptops,
          notes and more — all in one trusted platform.
        </p>

        {/* Buttons - FADE ONLY */}
        <div
          className="mt-7 flex flex-col sm:flex-row items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link to="/product">
            <button className="flex items-center gap-2 bg-[#4a90e2] text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition cursor-pointer">
              Become a Seller <MdOutlineShoppingCart />
            </button>
          </Link>

          <Link to="/ambassador">
            <button className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black hover:scale-105 transition cursor-pointer">
              Ambassador
            </button>
          </Link>
        </div>

        {/* Stats - FADE ONLY */}
        <div className="mt-10 grid grid-cols-2 sm:flex gap-10 text-white">

          <div data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-xl sm:text-2xl font-bold">12500+</h2>
            <p className="text-[12px] text-gray-300">Active Students</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-xl sm:text-2xl font-bold">8,900+</h2>
            <p className="text-[12px] text-gray-300">Products Listed</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-xl sm:text-2xl font-bold">$450k</h2>
            <p className="text-[12px] text-gray-300">Total Sales</p>
          </div>

        </div>

      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-[#4a90e2] via-[#7d4cdb] to-[#4a90e2]"></div>
    </div>
  );
}