import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PropTypes from "prop-types";

const routes = [
  { name: "Home", href: "#home", isActive: true },
  { name: "About Me", href: "#about", isActive: false },
  { name: "Services", href: "#services", isActive: false },
  { name: "Testimonials", href: "#testimonials", isActive: false },
];

const NavMenu = ({ routes }) => (
  <>
    {routes.map((route, i) => (
      <li
        key={i}
        className="hover:font-bold min-w-[48px] rounded-md flex justify-center items-center px-1 py-2 duration-300 ease-in-out"
      >
        <AnchorLink offset={() => 100} 
          className= "text-primary bg-accent hover:bg-white min-w-[48px] rounded-md px-4 py-2"
          href={route.href}
        >
          {route.name}
        </AnchorLink>
      </li>
    ))}
  </>
);

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
};


const AuthNavMenu = () => (
  <li>
    <AnchorLink offset={() => 100} 
      href="#contact"
      className="border border-primary text-white bg-primary hover:bg-secondary hover:text-white min-w-[48px] px-4 py-2 rounded duration-200 ease-in-out"
    >
      Contact Me!
    </AnchorLink>
  </li>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-8 bg-white text-text relative z-50">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg py-4  bg-opacity-[70%]">
        <div className="container px-4">
          <div className="flex justify-between items-center">
            <a className="font-black text-5xl uppercase" href="#!">
              {" "}
              <span className="border-2 px-2 py-1 border-primary rounded-tl-[40px] rounded-br-[40px] rounded-tr-[20%] rounded-bl-[20%]">
                DOC
              </span>{" "}
              <span className="text-primary  font-semibold">folio</span>
            </a>
            <button
              className="block lg:hidden cursor-pointer h-10 z-20"
              type="button"
              id="hamburger"
              onClick={toggleMenu}
            >
              <div className="h-0.5 w-7 bg-black -translate-y-2"></div>
              <div className="h-0.5 w-7 bg-black"></div>
              <div className="h-0.5 w-7 bg-black translate-y-2"></div>
            </button>
            <ul
              className={`flex flex-col lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white lg:bg-transparent ${
                isOpen ? "left-0" : "-left-full"
              }`}
              id="navbar"
            >
              <NavMenu routes={routes} />
              <AuthNavMenu />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
