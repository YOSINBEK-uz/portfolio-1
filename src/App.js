import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-r from-black to-yellow-400">
     
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
