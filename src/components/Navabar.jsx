import { useState } from "react";
import { NavLinks } from "./Links";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navabar = ({ navLinks, visibleElement }) => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="nav-bar">
      <Logo />
      <button className="burger" onClick={() => setNav(!nav)}>
        {nav ? (
          <FontAwesomeIcon icon="fa-solid fa-x" />
        ) : (
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        )}
      </button>
      <NavLinks
        navLinks={navLinks}
        nav={nav ? "nav-links-show" : "nav-links-hide"}
        visibleElement={visibleElement}
      />
    </nav>
  );
};
export default Navabar;
