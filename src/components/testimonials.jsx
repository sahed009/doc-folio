import React from "react";
import PropTypes from "prop-types";

const testimonialList = [
  {
    author: {
      fullName: "Sakib Sadman",
      picture: require("../assets/test1.jpg"),
      designation: "Manger / HR",
    },
    description:
      "Dr. Kefayetur Rahman is an exceptional physician. From my first appointment, I was impressed by his thoroughness and genuine concern for my well-being. He takes the time to listen to my concerns and explains complex medical issues in a way that is easy to understand. His expertise in neurology is evident, and his compassionate approach makes all the difference. I feel confident and reassured knowing that I'm in such capable hands. I highly recommend Dr. [Friend's Name] to anyone seeking a knowledgeable and caring doctor.",
  },
  {
    author: {
      fullName: "Murphy",
      picture: require("../assets/test3.jpg"),
      designation: "Designer / Employee",
    },
    description:
      "I have been seeing Dr. Kefayetur Rahman for over a year now, and he has consistently provided outstanding care. His expertise in neurology has been instrumental in managing my condition, and his personalized approach makes me feel valued as a patient. He is always patient and thorough during consultations, ensuring that all my questions are answered. Dr. [Friend's Name] is not just a doctor; he is a compassionate healer who truly cares about his patients' well-being. I am incredibly grateful to have him as my physician and highly recommend his services to others.",
  },
  {
    author: {
      fullName: "Badar uddin",
      picture: require("../assets/test2.jpg"),
      designation: "Founder / CEO",
    },
    description:
      "I can confidently say that he is one of the most dedicated and skilled doctors I know. His passion for neurology and his commitment to his patients are truly inspiring. He approaches each case with a meticulous attention to detail and a deep sense of empathy. His ability to connect with patients and provide exceptional care sets him apart in the medical field.",
  },
];

const TestimonialItem = ({ testimonial, index }) => (
  <div className="grid grid-cols-12">
    <div
      className={`col-span-12 lg:col-span-5 ${
        index % 2 !== 0 && "lg:order-2 xl:col-start-8"
      }`}
    >
      <img
        src={testimonial.author.picture}
        alt={testimonial.author.fullName}
        className="w-full h-auto rounded-2xl -mt-12 -mb-6"
      />
    </div>
    <div
      className={`col-span-12 lg:col-span-7 xl:col-span-6 ${
        index % 2 === 0 && "xl:col-start-7"
      } lg:mt-0 p-6 xl:px-12`}
    >
      <div className="flex flex-col justify-center h-full">
        <h4 className="text-2xl font-medium mb-1">
          {testimonial.author.fullName}
        </h4>
        <p className="mb-1">{testimonial.author.designation}</p>

        <p className="opacity-50">{testimonial.description}</p>
      </div>
    </div>
  </div>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-14 md:py-24 bg-primary  text-text "
    >
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center mb-6 lg:mb-12">
          <div className="max-w-md text-white">
            <h2 className="text-3xl leading-none md:text-[50px] font-bold mb-6 underline underline-white">
              Patient Reviews
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 mt-12 text-zinc-900">
          {testimonialList.map((testimonial, i) => (
            <div className="bg-accent rounded-2xl mt-16 mb-6" key={i} data-aos="fade-down">
              <TestimonialItem testimonial={testimonial} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
