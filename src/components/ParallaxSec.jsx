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
        <div className="h-full p-32">
          <div className="bg-primary p-16 rounded-md">
            <p className="text-7xl lg:text-5xl 3xl:text-7xl text-center text-white font-bold">
              Medicines can cure diseases, but only doctors can cure patients.
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxSec;
