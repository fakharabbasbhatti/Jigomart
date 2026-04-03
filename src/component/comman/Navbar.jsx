import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart?.cartItems || []);

  return (
    <div className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
          <h1 className="text-xl font-semibold tracking-wide leading-none">
            <span className="text-[#7d4cdb] font-serif">Jigo</span>
            <span className="text-[#3b82f6] font-serif">Mart</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          <Link to="/" className="text-blue-600">Home</Link>
          <Link to="/product" className="hover:text-blue-600">Products</Link>
          <Link to="/ambassador" className="hover:text-blue-600">Become an Ambassador</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search Products..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          <Link to="/cart" className="relative cursor-pointer">
            <MdOutlineShoppingCart className="text-gray-700 text-lg" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#7d4cdb] text-white text-xs rounded-full px-1.5">
                {cartItems.length}
              </span>
            )}
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-gray-600 font-medium hover:text-blue-600">Login</Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-1.5 rounded-md font-medium hover:bg-blue-700"
            >
              Register
            </Link>
          </div>

          <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search Products..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <div className="flex flex-col space-y-3 text-gray-600 font-medium">
            <Link to="/" className="text-blue-600">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/ambassador">Become an Ambassador</Link>
            <Link to="/about">About Us</Link>
          </div>

          <div className="flex flex-col gap-2">
            <Link to="/login" className="text-gray-600 font-medium">Login</Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}