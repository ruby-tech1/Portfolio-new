import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ icon, text, href, delay }) => {
  return (
    <a
      href={href}
      className="contact"
      target="_blank"
      data-aos="fade-right"
      data-aos-delay={(delay + 1) * 100}
    >
      <FontAwesomeIcon icon={icon} className="contact-icon" />
      <p>{text}</p>
    </a>
  );
};
export default Contact;
