import { Route, Routes } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Categories from "./Categories";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route />
    </Routes>
  );
}
