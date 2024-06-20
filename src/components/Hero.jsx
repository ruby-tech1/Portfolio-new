import { ScrollDown } from "./Links";

const Hero = () => {
  return (
    <section className="hero">
      <p data-aos="fade-right">i am</p>
      <h1 className="hero-name" data-aos="zoom-in">
        alabi reuben
      </h1>
      <p className="changing-text">
        {/* <span>a fullstack deveploper...</span>
        <span>a graphic designer...</span> */}
        <span className="text_1">a fullstack deveploper...</span>
        <span className="text_2">a graphic designer...</span>
      </p>
      <ScrollDown />
    </section>
  );
};
export default Hero;
