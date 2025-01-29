import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Projects from "./components/projects/Project";
import Cv from "./components/cv/Cv";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <About />

        <Projects />
        <Cv />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
