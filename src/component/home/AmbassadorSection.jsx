import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AmbassadorSection() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <section className="bg-gradient-to-r from-[#4A90E2] to-[#7D4CDB] py-20 px-6 text-center font-[Poppins] text-white overflow-hidden">

            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <h2
                    className="text-3xl font-semibold"
                    data-aos="fade-up"
                >
                    Become a JigoMart Product Ambassador
                </h2>

                {/* Description */}
                <p
                    className="mt-5 text-sm md:text-lg text-blue-100 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Help students discover and sell campus products like textbooks, laptops, notes,
                    and gadgets. Share listings with your network and earn commissions on every successful product sale.
                </p>

                {/* Button */}
                <div
                    className="flex justify-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <button className="mt-8 bg-[#7D4CDB] hover:bg-[#6a3fd1] transition text-white px-6 sm:px-8 py-3 rounded-md font-medium shadow-md flex items-center gap-2 text-sm cursor-pointer hover:scale-105">
                        Start Promoting Products
                        <IoIosArrowRoundForward className="text-2xl" />
                    </button>
                </div>

            </div>
        </section>
    );
}