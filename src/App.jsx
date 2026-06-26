import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-inter">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6">
        <Experience />
        <Achievements />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;