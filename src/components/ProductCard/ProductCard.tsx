import React from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  rating,
}) => {
  return (
    <motion.div
      className="relative p-5 m-2 flex w-full max-w-xs sm:max-w-sm md:max-w-md flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-[500px]" // Increased card height
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {/* Image Container */}
      <a
        className="relative mx-3 mt-3 flex h-[320px] w-full overflow-hidden rounded-xl" // Increased image height
        href="#"
      >
        <img
          className="h-full w-full object-cover"
          src={image}
          alt={title}
          loading="lazy"
        />
      </a>

      {/* Product Details */}
      <div className="mt-4 px-5 flex flex-col flex-grow">
        <a href="#">
          <h5 className="sm:text-lg sm:font-semibold tracking-tight text-slate-900 line-clamp-2 overflow-hidden">
            {title}
          </h5>
        </a>
        <div className="mt-2 mb-3 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">${price}</span>
            <span className="ml-2 text-sm text-slate-900 line-through">
              ${originalPrice}
            </span>
          </p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                aria-hidden="true"
                className={`h-5 w-5 ${
                  i < Math.round(rating) ? "text-yellow-300" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>
        {/* Add to Cart */}
        <a
          href="#"
          className="mt-auto mb-5 flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add to cart
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
