import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row text-center mt-15 justify-center items-center gap-x-8 bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // This makes sure the animation happens only once when it first comes into view
    >
      <motion.div
        className="text-white sm:font-bold text-5xl mt-10 sm:text-6xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Iphone at <br /> your Glance
      </motion.div>

      <motion.div
        className="img"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img
          src="https://img.freepik.com/premium-vector/best-smartphone-mockup-design_1302083-2173.jpg?w=740"
          alt="Iphone Mockup"
          width={500}
        />
      </motion.div>
    </motion.div>
  );
}
