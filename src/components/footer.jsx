import React from "react";
const Footer = () => {
  return (
    <footer className="py-12 lg:py-8 bg-primary text-white text-2xl lg:text-lg border-t-2">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center my-4">
            Docfolio
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
            <a
              href="https://sahedcodes.com"
              className="mb-6 sm:mb-0 text-3xl lg:text-lg"
            >
              Copyright all rights reserved MD Saheduzzaman
            </a>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center my-4">
            <div>
              <p>Icon made by Freepik from www.flaticon.com</p>
              <a href="https://www.freepik.com/free-vector/doctor-home-concept-illustration_17344295.htm#fromView=search&page=1&position=22&uuid=945f65d7-85f1-4dcd-8c17-1565be18fa01">
                Image by storyset on Freepik
              </a>{" "}
              <a href="https://www.freepik.com/free-vector/medical-icons-collection_1045017.htm#query=hospital&position=18&from_view=keyword&track=sph&uuid=3933c720-57eb-4ead-beaf-224c28faa356">
                Image by macrovector on Freepik
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
