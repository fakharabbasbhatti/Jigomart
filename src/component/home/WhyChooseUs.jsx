export default function WhyChooseUs() {
    return (
        <section className="bg-[#f5f7fb] py-20 px-6 font-[Poppins]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="max-w-6xl mx-auto text-center mb-14">
                    <h2 className="text-4xl font-semibold text-[#1f2937]">
                        Why Choose us?
                    </h2>

                    {/* Blue Line */}
                    <div className="flex justify-center relative">
                        <div className="w-80 h-3 border-b-1 border-blue-400 rotate-3"></div>
                    </div>


                    <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
                        Because buying and selling on campus should be simple, fast,
                        <br className="hidden md:block" /> and safe.
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mx-auto max-w-7xl">

                    {/* Left Cards */}
                    <div className="flex flex-col gap-6">

                        <div className="bg-[#3b82f6] text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-semibold text-xl">
                                Safe & Secure Transactions
                            </h3>
                            <p className="text-md mt-2 text-blue-100 leading-relaxed">
                                Every user is verified, so you can buy and sell with confidence
                            </p>
                        </div>

                        <div className="bg-[#3b82f6] text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-semibold text-xl">
                                Fast & Easy to Use
                            </h3>
                            <p className="text-md mt-2 text-blue-100 leading-relaxed">
                                No stress - create an account, post or shop, and get things done
                                in minutes.
                            </p>
                        </div>

                        <div className="bg-[#3b82f6] text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-semibold text-xl">
                                Built for Students
                            </h3>
                            <p className="text-md mt-2 text-blue-100 leading-relaxed">
                                JigoMart is designed specifically for institutions, keeping the
                                community close and trustworthy.
                            </p>
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <div className="w-[330px] h-[330px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[2px] border-[#3b82f6] shadow-lg">
                            <img
                                src="./w1.jpg"
                                alt="student"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}