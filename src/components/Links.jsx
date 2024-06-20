import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavLinks = ({ navLinks }) => {
  const [link, setLink] = useState(navLinks);
  return (
    <ul className="nav-links">
      {link.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id} className="nav-link">
            <a href={href}>{text}</a>
          </li>
        );
      })}
    </ul>
  );
};

export const SocialLinks = ({ socials }) => {
  const [icons, setIcons] = useState(socials);
  return (
    <ul className="social-links">
      {icons.map((icon) => {
        const { id, href, svg } = icon;
        return (
          <li key={id}>
            <a href={href}>
              <FontAwesomeIcon icon={svg} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export const ScrollDown = () => {
  return (
    <div className="scroll-down">
      <p className="text">scroll</p>
      <div className="scroll-down-icon">
        <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
      </div>
    </div>
  );
};
