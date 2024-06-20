import { NavLinks } from "./Links";
import Logo from "./Logo";

const Navabar = ({ navLinks }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <NavLinks navLinks={navLinks} />
      {/* <SocialLinks socials={socials} /> */}
    </nav>
  );
};
export default Navabar;
