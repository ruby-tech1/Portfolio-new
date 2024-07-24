import {
  skills,
  techs,
  navLinks,
  socials,
  projects,
  stats,
  contacts,
} from "../data";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navabar from "../components/Navabar";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import { useState } from "react";

const Landing = () => {
  const [visibleElement, setVisibleElement] = useState({
    // home: false,
    about: false,
    project: false,
    contact: false,
  });

  return (
    <main>
      <Navabar navLinks={navLinks} visibleElement={visibleElement} />
      <Hero />
      <About
        skills={skills}
        techs={techs}
        visibleElement={visibleElement}
        setVisibleElement={setVisibleElement}
      />
      <Projects
        projects={projects}
        stats={stats}
        visibleElement={visibleElement}
        setVisibleElement={setVisibleElement}
      />
      <Contacts
        contacts={contacts}
        visibleElement={visibleElement}
        setVisibleElement={setVisibleElement}
      />
      <Footer socials={socials} />
    </main>
  );
};
export default Landing;
