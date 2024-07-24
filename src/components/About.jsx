import SectionHeader from "./SectionHeader";
import Skill from "./Skill";
import Techs from "./Techs";
import DownloadBtn from "./DownloadBtn";
import { useEffect, useState } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

const About = ({ skills, techs, visibleElement, setVisibleElement }) => {
  const [skill, setSkill] = useState(skills);
  const [tech, setTech] = useState(techs);
  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: [0.25, 0.5, 0.75],
  });

  useEffect(() => {
    setVisibleElement({ ...visibleElement, about: isVisible });
  }, [isVisible]);

  return (
    <section className="about" id="about" ref={containerRef}>
      <div className="bio">
        <SectionHeader id={"about-title"} text={"about me"} position={true} />
        <div className="about-text" data-aos="fade-up">
          I'm a <span>Full-stack engineer </span>with over a year of experience
          creating web applications. Highly driven and well-organized. Having
          expertise in JavaScript, Node.js and React. Competent at collaborating
          with designers and frontend developers to produce exceptional user
          experiences and web applications. Additional advantages include
          knowledge of Graphic Design. Has a proactive, self-motivated attitude
          to problem-solving, driven by a passion for continuous growth and
          learning to keep up with the newest trends and technology. I'm eager
          to help create cutting edge Web apps and products.
        </div>
        <DownloadBtn />
      </div>
      <div className="skills-section">
        <SectionHeader id={"skils-header"} text={"skills"} position={false} />
        <div className="skills">
          {skill.map((item, index) => {
            return <Skill key={item.id} {...item} delay={index} />;
          })}
        </div>
      </div>
      <div className="techs">
        <SectionHeader
          id={"tech-header"}
          text={"technologies i use"}
          position={true}
        />
        <div className="tech-carousel">
          <div className="carousel-track">
            {tech.map((item) => {
              return <Techs key={item.id} {...item} />;
            })}
            {tech.map((item) => {
              return <Techs key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
