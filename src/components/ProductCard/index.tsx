import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Index() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      title: "iPhone 14 Pro",
      image:
        "https://img.freepik.com/premium-photo/mobile-phones-stacked-showing-front-back-white-background_1209812-7516.jpg?w=1380",
      price: 999.99,
      rating: { rate: 4.8, count: 350 },
    },
    {
      id: 2,
      title: "MacBook Air M2",
      image:
        "https://img.freepik.com/premium-psd/laptop-pro-screen-mockup_738213-264.jpg?w=1380",
      price: 1199.99,
      rating: { rate: 4.7, count: 220 },
    },
    {
      id: 3,
      title: "Apple Watch Series 8",
      image:
        "https://img.freepik.com/premium-photo/image-blank-touch-watch-isolated-white-background_373676-1707.jpg?w=740",
      price: 399.99,
      rating: { rate: 4.6, count: 190 },
    },
    {
      id: 4,
      title: "iPhone 13",
      image:
        "https://img.freepik.com/free-vector/realistic-smartphone-device_52683-29765.jpg?t=st=1737919914~exp=1737923514~hmac=6bf62ded2dc585c9c75480c1fcc21148f5b57f03ccc0a28ca0fb696b98b820b5&w=740",
      price: 799.99,
      rating: { rate: 4.5, count: 450 },
    },
    {
      id: 5,
      title: "MacBook Pro 16-inch",
      image:
        "https://img.freepik.com/premium-psd/3d-render-floating-laptop-macbook-pro-apple-mockup-green-screen-realistic-isolated-background_747880-39.jpg?w=1380",
      price: 2499.99,
      rating: { rate: 4.9, count: 300 },
    },
    {
      id: 6,
      title: "Apple Watch Ultra",
      image:
        "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-97321.jpg?t=st=1737919518~exp=1737923118~hmac=bf214eb64ae3ba28d6572ab25605e1e5197b14d35c1cf46f11854bf6572a564c&w=1060",
      price: 799.99,
      rating: { rate: 4.8, count: 110 },
    },
    {
      id: 7,
      title: "iPhone 12",
      image:
        "https://img.freepik.com/premium-photo/smart-purple-phone-isolated-screen-white-background_752648-31.jpg?w=996",
      price: 699.99,
      rating: { rate: 4.4, count: 500 },
    },
    {
      id: 8,
      title: "MacBook Pro 14-inch",
      image:
        "https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?t=st=1737920234~exp=1737923834~hmac=e745439a4f5e78f46b5dd435ff7ba9df7f21f26e0eb8972070eb0b8d70fdde01&w=1380",
      price: 1999.99,
      rating: { rate: 4.8, count: 230 },
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center ">
        Electronics Products
      </h1>
      <p className="text-center font-bold "> Here are our some best selling </p>

      <motion.div
        className="grid p-2 sm:p-10 grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.5 },
          },
        }}
      >
        {products.length === 0 ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          products.map((product) => (
            <motion.div
              key={product.id}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={(product.price * 1.2).toFixed(2)}
                rating={product.rating.rate}
              />
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}
