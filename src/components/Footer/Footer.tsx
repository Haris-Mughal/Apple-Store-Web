import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer: React.FC = () => {
  const year = () => new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-8">
        {/* Logo and Locations */}
        <div>
          <h2 className="text-xl font-bold mb-4">Apple Store</h2>
          <h3 className="text-sm font-semibold mb-2">Our Store Locations</h3>
          <ul className="space-y-2 text-sm">
            <li>29 Holles Place, Dublin 2 D02 YY46</li>
            <li>68 Jay Street, Suite 902 New Side Brooklyn, NY 11201</li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/categories/televisions"
                className="hover:underline hover:underline-offset-4"
              >
                Televisions
              </Link>
            </li>
            <li>
              <Link
                to="/categories/washing-machines"
                className="hover:underline hover:underline-offset-4"
              >
                Washing Machines
              </Link>
            </li>
            <li>
              <Link
                to="/categories/air-conditioners"
                className="hover:underline hover:underline-offset-4"
              >
                Air Conditioners
              </Link>
            </li>
            <li>
              <Link
                to="/categories/laptops"
                className="hover:underline hover:underline-offset-4"
              >
                Laptops
              </Link>
            </li>
            <li>
              <Link
                to="/categories/accessories"
                className="hover:underline hover:underline-offset-4"
              >
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:underline  hover:underline-offset-4"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:underline-offset-4"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:underline hover:underline-offset-4"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/latest-posts"
                className="hover:underline hover:underline-offset-4"
              >
                Latest Posts
              </Link>
            </li>
            <li>
              <Link
                to="/order-track"
                className="hover:underline hover:underline-offset-4"
              >
                Order Track
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4 text-sm">
            Enter your email to receive our latest updates about our products.
          </p>
          <div className="flex text-sm">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border-white border-1 text-white rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
          <p className="text-sm">
            © {year()} Apple Store. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 text-gray-400 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
