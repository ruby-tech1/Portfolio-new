import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ icon, title, text, delay }) => {
  return (
    <article
      className="skill"
      data-aos={delay % 2 === 0 ? "fade-down" : "fade-up"}
      data-aos-delay={delay}
    >
      <FontAwesomeIcon icon={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};
export default Skill;
