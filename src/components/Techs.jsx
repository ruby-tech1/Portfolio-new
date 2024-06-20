import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Techs = ({ icon, text }) => {
  return (
    <div className="carousel-card">
      <p className="carousel-hover-text">{text}</p>
      {icon && <FontAwesomeIcon icon={icon} />}
      {!icon ? <span>{text}</span> : ""}
    </div>
  );
};
export default Techs;
