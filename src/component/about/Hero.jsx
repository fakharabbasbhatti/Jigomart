import bgImage from "../../assets/abh.jpg"; // 👈 image import karna zaroori hai

export default function Hero() {
  return (
    <section className="relative h-96 flex items-center px-6 md:px-16">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About Us
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          Making Campus Buying & Selling Easier, Safer, and Smarter.
        </p>
      </div>
    </section>
  );
}