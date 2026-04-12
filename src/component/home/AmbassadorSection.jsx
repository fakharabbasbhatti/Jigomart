import { IoIosArrowRoundForward } from "react-icons/io";

export default function AmbassadorSection() {
    return (
        <section className="bg-gradient-to-r from-[#4A90E2] to-[#7D4CDB] py-20 px-6 text-center font-[Poppins] text-white">

            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl font-semibold">
                    Become a JigoMart Product Ambassador
                </h2>

                {/* Description */}
                <p className="mt-5 text-sm md:text-lg text-blue-100 leading-relaxed">
                    Help students discover and sell campus products like textbooks, laptops, notes,
                    and gadgets. Share listings with your network and earn commissions on every successful product sale.
                </p>

                {/* Button */}
                <div className="flex justify-center">
                    <button className="mt-8 bg-[#7D4CDB] hover:bg-[#6a3fd1] transition text-white px-6 sm:px-8 py-3 rounded-md font-medium shadow-md flex items-center gap-2 text-sm cursor-pointer">
                        Start Promoting Products
                        <IoIosArrowRoundForward className="text-2xl" />
                    </button>
                </div>

            </div>
        </section>
    );
}