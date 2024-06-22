import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Project = ({ name, text, image, code, website, tech, delay }) => {
  const [techUsed, setTechUsed] = useState(tech);

  const techSplit = () => {
    if (techUsed !== tech) return;
    let temp = techUsed.split(" ").join(" | ");
    setTechUsed(temp);
  };

  useEffect(() => {
    techSplit();
  }, []);

  return (
    <div
      className="project"
      data-aos={delay % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-delay={(delay + 1) * 100}
    >
      <div className="project-media">
        <div className="project-icons">
          <a
            href={code}
            className="code-link"
            target="_blank"
            rel="noreferncer"
          >
            <p>{"<"}</p>
            <p>{"/>"}</p>
          </a>
          {website && (
            <a
              href={website}
              className="website-link"
              target="_blank"
              rel="noreferncer"
            >
              <FontAwesomeIcon icon="fa-solid fa-eye" />
            </a>
          )}
        </div>
        <img src={image} alt={name} className="img" />
      </div>
      <h2>{name}</h2>
      <p>{text}</p>
      <p className="tech-used text-small">{techUsed}</p>
    </div>
  );
};
export default Project;
