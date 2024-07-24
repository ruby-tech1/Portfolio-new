import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Project from "./Project";
import Stat from "./Stat";
import { useEffect } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

const Projects = ({ projects, stats, visibleElement, setVisibleElement }) => {
  const [project, setProject] = useState(projects);
  const [stat, setStats] = useState(stats);

  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: [0.25, 0.5, 0.75],
  });

  useEffect(() => {
    setVisibleElement({ ...visibleElement, project: isVisible });
  }, [isVisible]);

  return (
    <section className="project-section" id="projects" ref={containerRef}>
      <SectionHeader id={"project-header"} text={"projects"} position={false} />
      <div className="projects">
        {project.map((item, index) => {
          return <Project key={item.id} {...item} delay={index} />;
        })}
      </div>
      <div className="stats">
        {stat.map((item, index) => {
          return <Stat key={item.id} {...item} delay={index} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
