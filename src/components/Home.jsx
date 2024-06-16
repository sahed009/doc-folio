import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="py-14 md:py-24 my-20 bg-background text-text  relative overflow-hidden z-10"
    >
      <div className="flex justify-end items-center">
        <img
          src={require("../assets/kefayet-dp.png")}
          alt=""
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Home;
