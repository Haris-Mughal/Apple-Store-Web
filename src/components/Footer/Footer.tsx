import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Lorem Ipsum Dolor</h4>
          <p className="text-gray-600 mb-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-gray-600">Quisque tincidunt velit vel urna.</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-gray-800">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white text-center py-4">
        <p className="text-sm">&copy; 2025 Lorem Ipsum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
