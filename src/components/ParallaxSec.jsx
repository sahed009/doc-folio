import React from "react";
import { Parallax } from "react-parallax";

const ParallaxSec = () => {
  return (
    <div>
      <Parallax
        bgImage={require("../assets/parallex.jpg")}
        bgImageAlt="Doctor"
        strength={150}
        className="bg-center bg-no-repeat bg-cover"
      >
        <div className="h-full m-8 lg:py-10" data-aos="fade-down">
          <div className="bg-primary p-4 rounded-md">
            <p className="text-2xl lg:text-5xl 3xl:text-7xl text-center text-white font-bold">
              Medicines can cure diseases, but only doctors can cure patients.
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxSec;
