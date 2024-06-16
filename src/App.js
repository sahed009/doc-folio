import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer"
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
