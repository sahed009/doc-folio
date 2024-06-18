import React from "react";
import hospitalImage from "../assets/hospital.jpg";

const About = () => {
  return (
    <section id="about" className="py-14 md:py-24 bg-primary text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          <div>
            <h2 className="md:text-end text-5xl lg:text-6xl leading-snug md:leading-tight font-light mb-0 " data-aos="fade-up">
              About my journey since 2019
            </h2>
          </div>
          <div className="lg:px-4 my-6 lg:my-0">
            <div
              className="min-h-[300px] md:h-full bg-center bg-cover rounded-md"
              data-aos="zoom-in"
              style={{
                backgroundImage: `url(${hospitalImage})`,
              }}
            ></div>
          </div>
          <div className="pr-7" data-aos="fade-down">
            <p className="text-lg lg:text-base 3xl:text-3xl leading-7 opacity-70 mt-6 mb-0">
              Throughout my time in medical school, I've had the opportunity to
              engage in various clinical rotations, where I've encountered a
              diverse range of patients and medical conditions. These
              experiences have solidified my desire to specialize in neurology,
              as I've found a particular affinity for understanding the
              complexities of the brain and nervous system. Balancing the
              rigorous academic demands with personal growth has not always been
              easy, but each obstacle has taught me valuable lessons in
              perseverance and adaptability. Outside of my studies, I enjoy
              chess, which help me maintain a well-rounded
              perspective and a healthy work-life balance. I look forward to the
              future, eager to contribute to the medical community and provide
              quality care to those in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
