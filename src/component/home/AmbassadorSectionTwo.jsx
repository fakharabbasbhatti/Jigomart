import { IoIosArrowRoundForward } from "react-icons/io";

export default function AmbassadorSectionTwo() {
  return (
    <section className="bg-gradient-to-r from-[#4A90E2] to-[#7D4CDB] py-20 px-6 text-center font-[Poppins] text-white mb-20">
      
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl  font-semibold">
          Become a JigoMart Ambassador
        </h2>

        {/* Description */}
        <p className="mt-5 text-sm md:text-lg text-blue-100 leading-relaxed">
          Earn extra income by promoting JigoMart to your network. Get
          commissions on every referral and help build the student economy!
        </p>

        {/* Button */}
       <div className="flex justify-center">
  <button className="mt-8 bg-[#7D4CDB] text-white px-6 sm:px-8 py-3 rounded-md font-medium shadow-md flex items-center gap-2 text-sm cursor-pointer">
    Start Earning Today 
    <IoIosArrowRoundForward className="text-2xl" />
  </button>
</div>

      </div>
    </section>
  );
}