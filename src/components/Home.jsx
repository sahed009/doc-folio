import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <section
      id="home"
      className="py-14  3xl:py-28 bg-background text-text  relative overflow-hidden z-10"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-0">
          <div
            className="col-span-12 lg:col-span-6 order-2 lg:order-1"
            data-aos="fade-up"
          >
            <div className="w-full h-2/3 mt-12 lg:mt-10 relative flex justify-center items-center">
              <div className="absolute left-0 h-full w-1 rounded-md bg-primary" />

              <div className="ml-6">
                <h1 className="text-5xl lg:text-4xl 3xl:text-7xl leading-[100px] font-extrabold text-primary">
                  Doctor
                </h1>
                <h2 className="text-5xl lg:text-4xl 3xl:text-7xl leading-[50px] font-bold">
                  Kefayetur Rahman
                </h2>
                <h4 className="text-3xl lg:text-2xl leading-none mt-4 uppercase">
                  <span className="text-primary font-semibold">M.B.B.S.</span>{" "}
                  <br /> <br />
                  Naogaon Medical College & Hospital of Bangladesh
                </h4>
                <address className="mt-6 text-lg lg:text-xl">
                  <span className="text-primary font-semibold">Lives in:</span>{" "}
                  Sylhet, Bangladesh
                </address>
              </div>
            </div>
            <Social />
          </div>
          <div
            className="col-span-12 lg:col-span-6 lg:my-0 order-1 lg:order-2"
          >
            <div className="mt-16 flex justify-center items-center">
              <img
                src={require("../assets/kefayet-dp.webp")}
                alt=""
                className="max-w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
