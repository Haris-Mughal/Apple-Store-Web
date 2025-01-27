import Carousal from "../../../components/carousal";
import Categories from "../../../components/Categories";
import Collapse from "../../../components/Collapse";
import Delivery from "../../../components/Delivery";
import Features from "../../../components/Features";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import ProductCard from "../../../components/ProductCard";

export default function Home() {
  return (
    <>
      <Header />
      <Carousal />
      <Hero />
      <Categories />
      <Collapse />
      <ProductCard />
      <Delivery />
      <Features />
      <Footer />
    </>
  );
}
