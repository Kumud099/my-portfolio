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
      {/* Full-width container with proper spacing and alignment */}
      <div className="w-full h-auto mx-auto px-4 sm:px-8 lg:px-16 max-w-screen-xl">
        {/* Navbar */}
        <Navbar />

        {/* Banner */}
        <div className="mt-16 sm:mt-20">
          {" "}
          {/* Added top margin for spacing */}
          <Banner />
        </div>

        {/* About Section */}
        <div className="mt-16 sm:mt-20">
          <About />
        </div>

        {/* Projects Section */}
        <div className="mt-16 sm:mt-20">
          <Projects />
        </div>

        {/* CV Section */}
        <div className="mt-16 sm:mt-20">
          <Cv />
        </div>

        {/* Contact Section */}
        <div className="mt-16 sm:mt-20">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
