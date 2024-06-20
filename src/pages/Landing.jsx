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

const Landing = () => {
  return (
    <main>
      <Navabar navLinks={navLinks} />
      <Hero />
      <About skills={skills} techs={techs} />
      <Projects projects={projects} stats={stats} />
      <Contacts contacts={contacts} />
      <Footer socials={socials} />
    </main>
  );
};
export default Landing;
