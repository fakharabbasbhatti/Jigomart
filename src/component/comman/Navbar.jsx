import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold font-serif bg-gradient-to-r from-[#3b82f6] to-[#7d4cdb] bg-clip-text text-transparent">
            M
          </span>

          <h1 className="text-xl font-semibold tracking-wide leading-none">
            <span className="text-[#7d4cdb] font-serif">Jigo</span>
            <span className="text-[#3b82f6] font-serif">Mart</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Become an Ambassador</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">

          {/* Search (Desktop only) */}
          <div className="hidden md:flex items-center border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search Products..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <MdOutlineShoppingCart className="text-gray-700 text-lg" />
            <span className="absolute -top-2 -right-2 bg-[#7d4cdb] text-white text-xs rounded-full px-1.5">
              2
            </span>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-600 font-medium hover:text-blue-600">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-blue-700 cursor-pointer">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">

          {/* Search */}
          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search Products..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-3 text-gray-600 font-medium">
            <a href="#" className="text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Products</a>
            <a href="#" className="hover:text-blue-600">Become an Ambassador</a>
            <a href="#" className="hover:text-blue-600">About Us</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-2">
            <button className="text-gray-600 font-medium text-left">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium cursor-pointer">
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
}