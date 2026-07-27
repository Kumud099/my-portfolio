import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Career from "./components/career/Career";
import TechnicalSkills from "./components/skills/TechnicalSkills";
import Projects from "./components/projects/Project";
import Contributions from "./components/contributions/Contributions";
import Blog from "./components/blog/Blog";
import BlogDetail from "./components/blog/BlogDetail";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function Home() {
  return (
    <div className="relative w-full h-auto bg-gradient-to-r from-[#272738] via-[#485f83] to-[#4191a9] text-lightText overflow-x-clip">
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      <div className="-mt-[80px]">
        <Banner />
      </div>

      <Career />
      <TechnicalSkills />
      <Projects />
      <Contributions />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;
