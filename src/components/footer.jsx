import React from "react";
const Footer = () => {
  return (
    <footer className="py-12 lg:py-8 bg-primary text-white text-2xl lg:text-lg border-t-2">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center my-4">Docfolio</div>
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
              <a href="https://sahedcodes.com" className="mb-6 sm:mb-0 text-3xl lg:text-lg">
                Copyright all rights reserved MD Saheduzzaman
              </a>
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center my-4">
              <div>Icon made by Freepik from www.flaticon.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
