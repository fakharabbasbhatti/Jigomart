import { useEffect, useState } from "react";
import logo from "../../assets/lo1.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const cartItems = useSelector(
    (state) => state.cart?.cartItems || []
  );

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-blue-600 ${
      isActive ? "text-blue-600 font-semibold" : "text-gray-600"
    }`;

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/product" className={navLinkClass}>Products</NavLink>
          <NavLink to="/ambassador" className={navLinkClass}>Ambassador</NavLink>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center space-x-4">

          {/* CART */}
          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition" />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE FULL SCREEN DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        {/* FULL WIDTH SLIDE MENU */}
        <div
          className={`absolute top-0 right-0 h-full w-full bg-white transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold text-lg">Menu</h2>
            <button onClick={() => setOpen(false)}>
              <FiX size={22} />
            </button>
          </div>

          {/* CENTERED LINKS */}
          <nav className="flex flex-col items-center justify-center text-center space-y-6 font-medium mt-10">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/product" className={navLinkClass}>Products</NavLink>
            <NavLink to="/ambassador" className={navLinkClass}>Ambassador</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}


