import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <form
      target="_blank"
      onSubmit={onSubmit}
      action="https://formsubmit.co/8b669ed9906b9662886605d393459d00"
      method="POST"
    >
      <div className="mb-4">
        <input
          type="text"
          className="h-16 lg:h-[60px] leading-[48px] bg-white text-primary shadow-2xl shadow-[#2f2f2f] border border-transparent rounded-xl focus:outline-none focus:border focus:border-white w-[80%] px-5 placeholder:text-xl placeholder:lg:text-lg placeholder:text-primary placeholder:opacity-50 placeholder:p-4"
          placeholder="Enter Name"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.name && (
          <p className="text-red mt-1">
            {errors.name.type === "required" && "This field is required."}
            {errors.name.type === "maxLength" && "Max length is 100 char."}
          </p>
        )}
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="h-16 lg:h-[60px] leading-[48px] bg-white text-primary shadow-2xl shadow-[#2f2f2f] border border-transparent rounded-xl focus:outline-none focus:border focus:border-white w-[80%] px-5 placeholder:text-xl placeholder:lg:text-lg placeholder:text-primary placeholder:opacity-50 placeholder:p-4"
          placeholder="Enter Email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="text-red mt-1">
            {errors.email.type === "required" && "This field is required."}
            {errors.email.type === "pattern" && "Invalid email address."}
          </p>
        )}
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          className="min-h-16 lg:h-[60px] leading-[48px] bg-white text-primary shadow-2xl shadow-[#2f2f2f] border border-transparent rounded-xl focus:outline-none focus:border focus:border-white w-[80%] px-5 placeholder:text-xl placeholder:lg:text-lg placeholder:text-primary placeholder:opacity-50 placeholder:p-4"
          placeholder="Enter Message"
          rows="3"
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.message && (
          <p className="text-red mt-1">
            {errors.message.type === "required" && "This field is required."}
            {errors.message.type === "maxLength" && "Max length is 2000 char."}
          </p>
        )}
      </div>
      <div className="text-end">
        <button
          type="submit"
          className="text-xl lg:text-base bg-white hover:bg-opacity-90 text-primary font-semibold px-4 md:px-9 py-4 md:py-8 lg:py-3 rounded-md mb-4 mt-4 mr-4 lg:mt-0"
        >
          SEND ME A MESSAGE
        </button>
      </div>
    </form>
  );
};

const ContactFormCard = () => (
  <div
    data-aos="fade-down"
    className="bg-primary shadow-xl rounded-2xl py-4 px-2 md:py-20 lg:py-4 md:px-40 border border-white w-[350px] md:w-[900px]"
  >
    <h2 className="text-4xl lg:text-5xl  leading-none font-bold mb-4">
      <span className="text-white">Contact</span> Me
    </h2>
    <div className="relative w-full">
      <p className=" mb-12 text-3xl lg:text-2xl">Send a mail!</p>
    </div>

    <ContactForm />
  </div>
);
const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div id="contact" className="relative text-center h-32 lg:h-[250px] w-full my-10 xl:my-40" data-aos="fade-up">
      <div className="mb-6">
        <p className="font-semibold text-xl lg:text-5xl">
          Want to connect? &#128526; <br />
          click here &#128071;
        </p>
      </div>
      <div className="">
        <button
          onClick={openPopup}
          className="bg-primary text-white text-3xl font-bold py-3 md:py-6 px-5 md:px-10 rounded-md"
        >
          Contact me!
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
            <ContactFormCard />
            <button
              type="button"
              onClick={closePopup}
              className="absolute top-1 right-4  bg-white rounded-xl p-0"
            >
              <img
                src={require("../assets/close-square-icon.png")}
                alt=""
                className="max-w-full h-10 lg:h-20  rounded-md"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
