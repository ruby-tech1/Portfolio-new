import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Project from "./Project";
import Stat from "./Stat";

const Projects = ({ projects, stats }) => {
  const [project, setProject] = useState(projects);
  const [stat, setStats] = useState(stats);
  return (
    <div className="project-section">
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
    </div>
  );
};
export default Projects;
