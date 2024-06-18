import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";

const routes = [
  { name: "Home", href: "#home", isActive: true },
  { name: "About Me", href: "#about", isActive: false },
  { name: "Services", href: "#services", isActive: false },
  { name: "Testimonials", href: "#testimonials", isActive: false },
];

const NavMenu = ({ routes, closeMenu }) => (
  <>
    {routes.map((route, i) => (
      <li
        key={i}
        className="hover:font-bold min-w-[48px] rounded-md flex justify-center items-center duration-300 ease-in-out lg:mt-0"
      >
        <AnchorLink
          offset={() => 100}
          className="text-primary bg-transparent lg:bg-accent hover:bg-white rounded-md min-w-[48px] px-8 3xl:px-10 py-3 3xl:py-4 3xl:text-xl shadow-lg md:shadow-none mt-2"
          href={route.href}
          onClick={closeMenu}
        >
          {route.name}
        </AnchorLink>
      </li>
    ))}
  </>
);

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

const AuthNavMenu = ({ closeMenu }) => (
  <li>
    <AnchorLink
      offset={() => 100}
      href="#contact"
      className="border border-primary text-white bg-primary hover:bg-secondary hover:text-white min-w-[70px] px-8 3xl:px-10 py-2 lg:py-3 3xl:py-6 3xl:text-xl rounded-md shadow-xl duration-200 ease-in-out"
      onClick={closeMenu}
    >
      Contact Me!
    </AnchorLink>
  </li>
);

AuthNavMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="pb-4 bg-white text-text relative z-50">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg py-4 bg-opacity-[70%]">
        <div className="px-0 md:px-4">
          <div className="flex justify-between items-center w-full  h-16 lg:h-auto">
            <a className="font-black text-2xl p-2 lg:text-5xl 3xl:text-7xl uppercase" href="#!">
              <span className="border-2 px-2 py-1 border-primary rounded-tl-[40px] rounded-br-[40px] rounded-tr-[20%] rounded-bl-[20%]">
                DOC
              </span>
              <span className="text-primary font-semibold">folio</span>
            </a>
            <ul
              className={`flex flex-col lg:flex-row justify-center items-center text-3xl  gap-y-4 lg:text-base lg:gap-2 fixed inset-0 lg:static h-screen lg:h-auto bg-white lg:bg-transparent transition-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } lg:translate-x-0`}
              id="navbar"
            >
              <button
                className="absolute top-10 right-10 lg:hidden cursor-pointer h-10 z-20"
                type="button"
                onClick={closeMenu}
              >
                <img
                src={require("../assets/close-icon.png")}
                alt=""
                className="max-w-full h-20"
              />
              </button>
              <NavMenu routes={routes} closeMenu={closeMenu} />
              <AuthNavMenu closeMenu={closeMenu} />
            </ul>
            <button
              className={`block lg:hidden cursor-pointer z-20 absolute right-4 lg:right-0 top-4  ${
                isOpen ? "hidden" : ""
              }`}
              type="button"
              id="hamburger"
              onClick={toggleMenu}
            >
              <img
                src={require("../assets/menu-icon.png")}
                alt=""
                className="max-w-full h-16"
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
