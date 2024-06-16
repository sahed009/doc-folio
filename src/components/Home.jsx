import React from "react";

const Home = () => {
  return (
    <section id="home" className="py-14 md:py-24 bg-background text-text  relative overflow-hidden z-10">
      <img
            src={require("../assets/kefayet-dp.png")}
            alt=""
            className="max-w-full h-auto"
          />
    </section>
  );
};

export default Home;
