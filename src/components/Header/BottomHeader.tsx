import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { MdDashboard, MdClose } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "framer-motion";

const BottomHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm relative">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-blue-500 text-2xl font-bold">
          Apple<span className="text-black">Store</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/new-releases" className="hover:text-blue-500">
            New Releases
          </Link>
          <Link to="/best-deals" className="hover:text-blue-500">
            Best Deals <span className="text-red-500">🔥</span>
          </Link>
          <Link to="/headphones" className="hover:text-blue-500">
            Headphones
          </Link>
          <Link to="/earbuds" className="hover:text-blue-500">
            Earbuds
          </Link>
          <Link to="/speakers" className="hover:text-blue-500">
            Speakers
          </Link>
          <Link to="/open-ear-earbuds" className="hover:text-blue-500">
            Open-Ear Earbuds
          </Link>
          <Link to="/explore-support" className="hover:text-blue-500">
            Explore & Support
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-lg">
          <FaSearch className="cursor-pointer hover:text-blue-500" />
          <FaShoppingCart className="cursor-pointer hover:text-blue-500" />
          <FaUserCircle className="cursor-pointer hover:text-blue-500" />
          <MdDashboard className="text-red-500 cursor-pointer hover:text-red-700" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <MdClose className="text-2xl text-black" />
          ) : (
            <>
              <span className="block w-6 h-1 bg-black mb-1"></span>
              <span className="block w-6 h-1 bg-black mb-1"></span>
              <span className="block w-6 h-1 bg-black"></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="absolute top-0 right-0 bg-white shadow-lg p-4 z-40 w-64 border-t"
        >
          <nav className="flex flex-col items-start space-y-4">
            <Link
              to="/new-releases"
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              New Releases
            </Link>
            <Link
              to="/best-deals"
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              Best Deals <span className="text-red-500">🔥</span>
            </Link>
            <Link
              to="/headphones"
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              Headphones
            </Link>
            <Link
              to="/earbuds"
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              Earbuds
            </Link>
            <Link
              to="/speakers"
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              Speakers
            </Link>
            <Link
              to="/open-ear-earbuds"
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              Open-Ear Earbuds
            </Link>
            <Link
              to="/explore-support"
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              Explore & Support
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default BottomHeader;
