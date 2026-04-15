import { FaLinkedinIn, FaGithub, FaTiktok } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/jig.png";
import { MdPhoneInTalk } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white font-[Poppins] px-6 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-1">

              {/* Text */}
              <h1 className="text-2xl font-semibold tracking-wide leading-none">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 md:h-10 w-auto object-contain"
                />
              </h1>
            </div>
            <p className="text-[#d1d5db] mt-4 text-sm leading-relaxed">
              Connecting customers through online shopping made easy platform.
            </p>

            <div className="mt-4 space-y-2 text-sm text-[#d1d5db]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center border border-[#7D4CDB] rounded-full">
  <MdEmail size={12} className="text-[#7D4CDB]" />
</span>
                <span>fakharabbasbhatti333@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center border border-[#7D4CDB] rounded-full">
  <MdPhoneInTalk size={12} className="text-[#7D4CDB]" />
</span>
                <span>+92 322 9234045</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><Link to="/ambassador">Ambassador</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Support & Legal</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/termsconditions">Terms & Conditions</Link></li>
              <li><Link to="/returnpolicy">Return Policy</Link></li>
              <li><Link to="/helpcenter">Help Center</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Payment & Trust Indicators</h3>
            <p className="text-sm text-white leading-relaxed">
              Accepted payment methods (e.g Credit Card, JazzCash, EasyPaisa).
            </p>
            <p className="text-sm text-white mt-3 leading-relaxed">
              All transactions are secured and verified.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#7c3aed] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-white">
            <span className="text-[#7D4CDB] text-lg">©</span> 2026 JigoMart. All rights reserved. Built for shopping
          </p>

          <div className="flex gap-4 text-[#d1d5db]">

            <a
              href="https://www.linkedin.com/in/fakhar-abbas-bhatti"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-[#7D4CDB] rounded-full hover:bg-[#7D4CDB] transition"
            >
              <FaLinkedinIn size={12} className="text-[#d1d5db] hover:text-white" />
            </a>

            <a
              href="https://www.fiverr.com/fakharabbas333/buying?source=avatar_menu_profile"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-[#7D4CDB] rounded-full hover:bg-[#7D4CDB] transition"
            >
              <TbBrandFiverr size={12} className="text-[#d1d5db] hover:text-white" />
            </a>

            <a
              href="https://github.com/fakharabbasbhatti"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-[#7D4CDB] rounded-full hover:bg-[#7D4CDB] transition"
            >
              <FaGithub size={12} className="text-[#d1d5db] hover:text-white" />
            </a>

            <a
              href="https://www.tiktok.com/@fakharbhatti333/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-[#7D4CDB] rounded-full hover:bg-[#7D4CDB] transition"
            >
              <FaTiktok size={12} className="text-[#d1d5db] hover:text-white" />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}