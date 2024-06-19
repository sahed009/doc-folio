import React from "react";

const TextPreloader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 right-1/2  flex items-center justify-center h-vh bg-primary">
      <div data-aos="fade-up">
        <a
          className="font-black text-2xl p-2 lg:text-5xl 3xl:text-7xl uppercase"
          href="#!"
        >
          <span className="border-2 px-2 py-1 border-primary rounded-tl-[40px] rounded-br-[40px] rounded-tr-[20%] rounded-bl-[20%]">
            DOC
          </span>
          <span className="text-primary font-semibold">folio</span>
        </a>
      </div>
    </div>
  );
};

export default TextPreloader;
