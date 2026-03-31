import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white font-[Poppins] px-6 py-8 sm:py-14">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-1">

      {/* Text */}
      <h1 className="text-2xl font-semibold tracking-wide leading-none">
        <span className="text-[#7d4cdb] font-serif">Jigo</span>
        <span className="text-[#3b82f6] font-serif">Mart</span>
      </h1>
    </div>
            <p className="text-[#d1d5db] mt-4 text-sm leading-relaxed">
              Connecting students through buying and selling made easy.
            </p>

            <div className="mt-4 space-y-2 text-sm text-[#d1d5db]">
              <div className="flex items-center gap-2">
                <MdEmail size={16} className="text-[#7D4CDB]"/>
                <span>emmaogbidi@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhoneInTalk size={16} className="text-[#7D4CDB]"/>
                <span>+234 7086984841</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sx text-[#d1d5db]">
              <li>Home</li>
              <li>Shop</li>
              <li>Sell</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Support & Legal</h3>
            <ul className="space-y-2 text-sm text-[#d1d5db]">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
              <li>Help Center</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Payment & Trust Indicators</h3>
            <p className="text-sm text-[#d1d5db] leading-relaxed">
              Accepted payment methods (e.g escrow, paystack)
            </p>
            <p className="text-sm text-[#d1d5db] mt-3 leading-relaxed">
              All transactions are secured and verified.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#7c3aed] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-[#9ca3af]">
            <span className="text-[#7D4CDB] text-lg">©</span> 2025 JigoMart. All rights reserved. Built for students
          </p>

          <div className="flex gap-4 text-[#d1d5db]">
            <FaLinkedinIn size={18} />
            <FaTwitter size={18} />
            <FaInstagram size={18} />
            <FaFacebookF size={18} />
          </div>
        </div>

      </div>
    </footer>
  );
}