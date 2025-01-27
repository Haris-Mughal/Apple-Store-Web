import React, { useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.landing-big_2x.jpg",
    text: "Hear the Roar with the Power of <span class='text-primary'>iPhone 16</span>",
  },
  {
    src: "https://www.livemint.com/lm-img/img/2024/09/10/1600x900/hbhbh_1725979047768_1725979056801.jpg",
    text: "Amp Up Game Day with <span class='text-primary'>Next-Gen Tech</span>",
  },
  {
    src: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",
    text: "Feel the Energy of <span class='text-primary'>Innovation</span>",
  },
];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-2 bg-cardbg w-full max-w-[85vw] mx-auto rounded-2xl overflow-hidden">
      <div className="relative flex items-center justify-center h-[28rem]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.8 }}
            />
            <motion.img
              src={image.src}
              alt={`Slide ${index}`}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                index === currentIndex ? "hover:scale-110" : ""
              }`}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/800x400";
              }}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.p
                  className="text-3xl sm:text-5xl font-semibold text-white break-words max-w-[90%] sm:max-w-[60%]"
                  initial={{ width: "40%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  dangerouslySetInnerHTML={{ __html: image.text }}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousal;
