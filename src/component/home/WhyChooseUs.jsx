export default function WhyChooseUs() {
    return (
        <section className="bg-[#f5f7fb] py-20 px-6 font-[Poppins]">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="max-w-6xl mx-auto text-center mb-14">
                    <h2 className="text-4xl font-semibold text-[#1f2937]">
                        Why Choose Us?
                    </h2>

                    {/* Blue Line */}
                    <div className="flex justify-center relative">
                        <div className="w-80 h-3 border-b-1 border-blue-400 rotate-3"></div>
                    </div>

                    <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
                        The easiest way for students to buy and sell campus products —
                        <br className="hidden md:block" /> fast, safe, and trusted by thousands.
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mx-auto max-w-7xl">

                    {/* Left Cards */}
                    <div className="flex flex-col gap-6">

                        <div className="bg-[#3b82f6] text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-semibold text-xl">
                                Verified Product Listings
                            </h3>
                            <p className="text-md mt-2 text-blue-100 leading-relaxed">
                                Every textbook, laptop, gadget, and accessory is listed by real
                                students to ensure authenticity and trust.
                            </p>
                        </div>

                        <div className="bg-[#3b82f6] text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-semibold text-xl">
                                Buy & Sell Instantly
                            </h3>
                            <p className="text-md mt-2 text-blue-100 leading-relaxed">
                                Post your unused products or find what you need in seconds —
                                no middlemen, no delays.
                            </p>
                        </div>

                        <div className="bg-[#3b82f6] text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-semibold text-xl">
                                Best Prices on Campus
                            </h3>
                            <p className="text-md mt-2 text-blue-100 leading-relaxed">
                                Save money by buying directly from students and selling your items
                                at fair campus-friendly prices.
                            </p>
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <div className="w-[330px] h-[330px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[2px] border-[#3b82f6] shadow-lg">
                            <img
                                src="./hw.jpg"
                                alt="student marketplace"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}