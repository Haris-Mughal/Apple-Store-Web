import {
  FaApple,
  FaShoppingBag,
  FaGripLines,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";

type NavElement = {
  id: number;
  name: string;
  link: string;
};

const BottomHeader: React.FC = () => {
  const navElements: NavElement[] = [
    { id: 1, name: "Store", link: "https://www.apple.com/in/shop/goto/store" },
    { id: 2, name: "Mac", link: "https://www.apple.com/in/mac/" },
    { id: 3, name: "iPad", link: "https://www.apple.com/in/ipad/" },
    { id: 4, name: "iPhone", link: "https://www.apple.com/in/iphone/" },
    { id: 5, name: "Watch", link: "https://www.apple.com/in/watch/" },
    { id: 6, name: "Air Pods", link: "https://www.apple.com/in/airpods/" },
    { id: 7, name: "TV & Home", link: "https://www.apple.com/in/tv-home/" },
    {
      id: 8,
      name: "Only on Apple",
      link: "https://www.apple.com/in/services/",
    },
    {
      id: 9,
      name: "Accessories",
      link: "https://www.apple.com/in/shop/goto/buy_accessories",
    },
    { id: 10, name: "Support", link: "https://support.apple.com/en-in" },
  ];

  const [navUl, setNavUl] = useState(false);

  const handleClick = () => {
    setNavUl(!navUl);
  };

  return (
    <header
      className={
        (navUl
          ? "bg-black backdrop-blur-none bg-opacity-100 transition-all duration-200"
          : "bg-stone-800") +
        " fixed left-0 right-0 backdrop-blur-2xl bg-opacity-90 z-50"
      }
    >
      <h1 className="text-center text-white ">APPLE STORE</h1>
      <nav className="container px-4 py-3 text-white mx-auto flex justify-between items-center 2xl:w-8/12">
        {!navUl ? (
          <button onClick={handleClick} className="md:hidden text-xl">
            <FaGripLines />
          </button>
        ) : (
          <button onClick={handleClick} className="md:hidden text-xl">
            <FaTimes />
          </button>
        )}
        <a href="https://www.apple.com/in/">
          <FaApple className="text-xl text-stone-300 hover:text-white duration-300" />
        </a>
        <ul
          className={
            (navUl ? "flex" : "hidden") +
            " flex-col md:flex md:flex-row md:gap-4 lg:gap-10 md:text-xs absolute top-12 left-0 px-10 right-0 md:static bg-black md:bg-transparent"
          }
        >
          {navElements.map((navEl) => (
            <li
              key={navEl.id}
              className="py-3 border-b md:px-0 md:py-0 md:border-none"
            >
              <a href={navEl.link} className="hover:text-stone-400">
                {navEl.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-2 flex-row">
          <a href="https://www.apple.com/in/shop/goto/bag">
            <FaShoppingBag className="text-stone-300 hover:text-white duration-300" />
          </a>
          <Link to="/auth/login">
            <FaUser />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default BottomHeader;
