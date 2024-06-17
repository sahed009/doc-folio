import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faFacebook, href: "#!" },
  { icon: faInstagram, href: "#!" },
  { icon: faLinkedinIn, href: "#!" },
  { icon: faTwitter, href: "#!" },
];

const SocialLinks = ({ links }) => (
  <ul className="inline-flex mt-6 items-start">
    {links.map((link, i) => (
      <li className="mr-12 lg:mr-6" key={i}>
        <a
          href={link.href}
          className="text-6xl lg:text-4xl opacity-70 hover:opacity-100 transition duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      </li>
    ))}
  </ul>
);

const Social = () => {
  return (
    <div>
      <SocialLinks links={socialLinks} />
    </div>
  );
};

export default Social;
