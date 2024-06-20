import { SocialLinks } from "../components/Links";
import FooterText from "./FooterText";

const Footer = ({ socials }) => {
  return (
    <footer className="footer">
      <SocialLinks socials={socials} />
      <FooterText />
    </footer>
  );
};
export default Footer;
