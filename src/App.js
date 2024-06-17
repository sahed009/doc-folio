import React, { useEffect } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/about";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "linear" });
  }, []);
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
