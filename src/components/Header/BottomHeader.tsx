import { Link } from "react-router";
import { FaBars, FaPlus } from "react-icons/fa";
import { useState } from "react";

const BottomHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleCategory = (category: any) => {
    setCategoryOpen(categoryOpen === category ? null : category);
  };

  return (
    <header className="w-full bg-black text-white">
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-center items-center p-2 max-w-screen-xl mx-auto">
        {/* Categories with Subcategories */}
        <div className="flex space-x-8">
          {["Mac", "iPhone", "iPad", "Accessories"].map((category) => (
            <div key={category} className="relative group">
              <button className="text-white font-semibold">{category}</button>
              {/* Display subcategories on hover */}
              {category !== "About" && category !== "Contact" && (
                <div className="absolute left-0 mt-2 bg-black z-10 text-white rounded shadow-md p-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category === "Mac" && (
                    <>
                      <Link
                        to="/mac/macbook-air"
                        className="block py-1 hover:text-gray-300"
                      >
                        MacBook Air
                      </Link>
                      <Link
                        to="/mac/macbook-pro"
                        className="block py-1 hover:text-gray-300"
                      >
                        MacBook Pro
                      </Link>
                      <Link
                        to="/mac/imac"
                        className="block py-1 hover:text-gray-300"
                      >
                        iMac
                      </Link>
                    </>
                  )}
                  {category === "iPhone" && (
                    <>
                      <Link
                        to="/iphone/iphone-15"
                        className="block py-1 hover:text-gray-300"
                      >
                        iPhone 15
                      </Link>
                      <Link
                        to="/iphone/iphone-15-pro"
                        className="block py-1 hover:text-gray-300"
                      >
                        iPhone 15 Pro
                      </Link>
                      <Link
                        to="/iphone/iphone-se"
                        className="block py-1 hover:text-gray-300"
                      >
                        iPhone SE
                      </Link>
                    </>
                  )}
                  {category === "iPad" && (
                    <>
                      <Link
                        to="/ipad/ipad-pro"
                        className="block py-1 hover:text-gray-300"
                      >
                        iPad Pro
                      </Link>
                      <Link
                        to="/ipad/ipad-air"
                        className="block py-1 hover:text-gray-300"
                      >
                        iPad Air
                      </Link>
                      <Link
                        to="/ipad/ipad-mini"
                        className="block py-1 hover:text-gray-300"
                      >
                        iPad Mini
                      </Link>
                    </>
                  )}
                  {category === "Accessories" && (
                    <>
                      <Link
                        to="/accessories/airpods"
                        className="block py-1 hover:text-gray-300"
                      >
                        AirPods
                      </Link>
                      <Link
                        to="/accessories/apple-watch"
                        className="block py-1 hover:text-gray-300"
                      >
                        Apple Watch
                      </Link>
                      <Link
                        to="/accessories/mag-safe"
                        className="block py-1 hover:text-gray-300"
                      >
                        MagSafe
                      </Link>
                    </>
                  )}
                </div>
              )}
              {/* About and Contact Pages */}
              {category === "About" && (
                <Link
                  to="/about"
                  className="block py-1 text-white hover:text-gray-300"
                >
                  About
                </Link>
              )}
              {category === "Contact" && (
                <Link
                  to="/contact"
                  className="block py-1 text-white hover:text-gray-300"
                >
                  Contact
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="p-4 text-white bg-black w-full text-left"
        >
          <FaBars size={24} />
        </button>

        {/* Side Menu */}
        {mobileMenuOpen && (
          <div className="fixed top-0 left-0 w-3/4 h-full bg-black text-white p-6 space-y-4">
            <div className="flex flex-col space-y-4">
              {["Mac", "iPhone", "iPad", "Accessories"].map((category) => (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="text-white font-semibold"
                    >
                      {category}{" "}
                      {category !== "About" && category !== "Contact" && (
                        <FaPlus className="inline ml-1" />
                      )}
                    </button>
                  </div>
                  {categoryOpen === category && (
                    <div className="ml-4 space-y-2">
                      {category === "Mac" && (
                        <>
                          <Link
                            to="/mac/macbook-air"
                            className="block py-1 hover:text-gray-300"
                          >
                            MacBook Air
                          </Link>
                          <Link
                            to="/mac/macbook-pro"
                            className="block py-1 hover:text-gray-300"
                          >
                            MacBook Pro
                          </Link>
                          <Link
                            to="/mac/imac"
                            className="block py-1 hover:text-gray-300"
                          >
                            iMac
                          </Link>
                        </>
                      )}
                      {category === "iPhone" && (
                        <>
                          <Link
                            to="/iphone/iphone-15"
                            className="block py-1 hover:text-gray-300"
                          >
                            iPhone 15
                          </Link>
                          <Link
                            to="/iphone/iphone-15-pro"
                            className="block py-1 hover:text-gray-300"
                          >
                            iPhone 15 Pro
                          </Link>
                          <Link
                            to="/iphone/iphone-se"
                            className="block py-1 hover:text-gray-300"
                          >
                            iPhone SE
                          </Link>
                        </>
                      )}
                      {category === "iPad" && (
                        <>
                          <Link
                            to="/ipad/ipad-pro"
                            className="block py-1 hover:text-gray-300"
                          >
                            iPad Pro
                          </Link>
                          <Link
                            to="/ipad/ipad-air"
                            className="block py-1 hover:text-gray-300"
                          >
                            iPad Air
                          </Link>
                          <Link
                            to="/ipad/ipad-mini"
                            className="block py-1 hover:text-gray-300"
                          >
                            iPad Mini
                          </Link>
                        </>
                      )}
                      {category === "Accessories" && (
                        <>
                          <Link
                            to="/accessories/airpods"
                            className="block py-1 hover:text-gray-300"
                          >
                            AirPods
                          </Link>
                          <Link
                            to="/accessories/apple-watch"
                            className="block py-1 hover:text-gray-300"
                          >
                            Apple Watch
                          </Link>
                          <Link
                            to="/accessories/mag-safe"
                            className="block py-1 hover:text-gray-300"
                          >
                            MagSafe
                          </Link>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile About and Contact Links */}
              <div className="space-y-2">
                <Link
                  to="/about"
                  className="block py-1 text-white hover:text-gray-300"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block py-1 text-white hover:text-gray-300"
                >
                  Contact
                </Link>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default BottomHeader;
