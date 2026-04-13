import { IoIosArrowRoundForward } from "react-icons/io";

export default function AmbassadorSectionTwo() {
  return (
    <section className="bg-gradient-to-r from-[#4A90E2] to-[#7D4CDB] px-6 text-center font-[Poppins] text-white py-15">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-semibold">
          Become a JigoMart Student Ambassador
        </h2>

        {/* Description */}
        <p className="mt-5 text-sm md:text-lg text-blue-100 leading-relaxed">
          Promote campus products like textbooks, laptops, notes, and student essentials.
          Earn commissions every time your friends buy or sell on JigoMart — and help grow your campus marketplace community.
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