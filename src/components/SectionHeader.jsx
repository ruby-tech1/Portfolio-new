const SectionHeader = ({ id, text, position }) => {
  return (
    <h5
      className={
        position ? "section-title" : "section-title section-title-right"
      }
      data-aos={position ? "fade-right" : "fade-left"}
      id={id}
    >
      {position && <div className="section-title-line"></div>}
      <p>{text}</p>
      {position || <div className="section-title-line"></div>}
    </h5>
  );
};
export default SectionHeader;
