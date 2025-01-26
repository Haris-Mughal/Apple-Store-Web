import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Categories() {
  return (
    <main>
      <h1 className="text-center mt-5 font-bold text-3xl motion-opacity-in-0 motion-translate-y-in-100">
        Choose a Category to continue
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-2 justify-center mt-2">
        <motion.div
          className="flex border-1 border-black text-center flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <Link to={"/"}>
            <img
              src="https://img.freepik.com/free-vector/laptop-illustration_1053-291.jpg?t=st=1737823451~exp=1737827051~hmac=7ecebea76078fe2c962a08321b8b87cc20c00044f803c9b6cdfb4c62bc869451&w=826"
              alt="Laptop"
              width={300}
            />
          </Link>
          <p>Laptop</p>
        </motion.div>

        <motion.div
          className="flex border-1 border-black text-center flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <Link to={"/"}>
            <img
              src="https://img.freepik.com/premium-photo/modern-oval-notch-smartphone-realistic-mockup_937196-79.jpg?w=826"
              alt="Smartphone"
              width={300}
            />
          </Link>
          <p>Smartphone</p>
        </motion.div>

        <motion.div
          className="flex border-1 border-black text-center flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <Link to={"/"}>
            <img
              src="https://img.freepik.com/premium-vector/ipad-clipart-vector-ipad-clipart-illustration-isolated-white-background_694085-454.jpg?w=826"
              alt="Tablet"
              width={300}
            />
          </Link>
          <p>Tablet</p>
        </motion.div>

        <motion.div
          className="flex border-1 border-black text-center flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <Link to={"/"}>
            <img
              src="https://img.freepik.com/premium-vector/headphones-with-open-case-illustration-is-made-3d-style_964597-52.jpg?w=826"
              alt="Headphones"
              width={300}
            />
          </Link>
          <p>Headphones</p>
        </motion.div>
      </div>
    </main>
  );
}
