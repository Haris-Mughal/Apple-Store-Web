import { useState } from "react";
import { Link } from "react-router";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const TopHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        <button
          className="md:hidden text-white focus:outline-none mr-auto"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

        <h1 className="text-2xl">Apple Store</h1>

        <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
          <div className="relative group">
            <Link to="/products" className="hover:text-gray-200">
              Products
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-700 border border-gray-200 shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                to="/products/category1"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Category 1
              </Link>
              <Link
                to="/products/category2"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Category 2
              </Link>
            </div>
          </div>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <FaShoppingCart
            size={10}
            className="w-6 h-6 cursor-pointer hover:text-gray-200"
          />
          <FaUser
            size={10}
            className="w-6 h-6 cursor-pointer hover:text-gray-200"
          />
        </div>

        <div className="md:hidden flex items-center space-x-4 ml-auto">
          <FaShoppingCart size={10} className=" hover:text-gray-200" />
          <FaUser size={10} className="cursor-pointer hover:text-gray-200" />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white h-screen fixed top-0 left-0 w-3/4 shadow-md">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white">
            <Link to="/" className="text-xl font-bold mx-auto">
              E-Shop
            </Link>
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <FaTimes size={16} />
            </button>
          </div>
          <Link to="/products" className="block px-4 py-2 hover:bg-blue-700">
            Products
          </Link>
          <div className="pl-4">
            <Link
              to="/products/category1"
              className="block px-4 py-2 hover:bg-blue-700"
            >
              Category 1
            </Link>
            <Link
              to="/products/category2"
              className="block px-4 py-2 hover:bg-blue-700"
            >
              Category 2
            </Link>
          </div>
          <Link to="/about" className="block px-4 py-2 hover:bg-blue-700">
            About
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-blue-700">
            Contact
          </Link>
          <div className="flex space-x-4 px-4 py-2">
            <FaShoppingCart
              size={10}
              className="cursor-pointer hover:text-gray-300"
            />
            <FaUser size={10} className=" hover:text-gray-300" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopHeader;
