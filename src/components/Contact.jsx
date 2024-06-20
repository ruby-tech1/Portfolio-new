import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ icon, text, href }) => {
  return (
    <a href={href} className="contact" target="_blank">
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </a>
  );
};
export default Contact;
