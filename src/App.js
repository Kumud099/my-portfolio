import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Projects from "./components/projects/Project";
import Cv from "./components/cv/Cv";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText overflow-x-hidden">
      {/* Full-width container with proper spacing and alignment */}
      <div className="w-full h-auto mx-auto px-4 sm:px-6 lg:px-16 max-w-screen-xl">
        {/* Navbar */}
        <Navbar />

        {/* Banner */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Banner />
        </div>

        {/* About Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <About />
        </div>

        {/* Projects Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Projects />
        </div>

        {/* CV Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Cv />
        </div>

        {/* Contact Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
