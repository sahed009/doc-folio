import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/about";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

import Aos from "aos";
import "aos/dist/aos.css";
import ParallaxSec from "./components/ParallaxSec";
import TextPreloader from "./components/TextPreloader";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 800, easing: "linear" });
  }, []);
  return (
    <>
      {loading ? (
        <TextPreloader />
      ) : (
        <React.Fragment className="App">
          <Nav />
          <Home />
          <About />
          <ParallaxSec />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
        </React.Fragment>
      )}
    </>
  );
}

export default App;
