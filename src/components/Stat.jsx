const Stat = ({ number, title, delay }) => {
  return (
    <div className="stat" data-aos="zoom-in" data-aos-delay={(delay + 1) * 100}>
      <h2 className="stat-number">
        {number}
        <span>+</span>
      </h2>
      <p className="stat-title">{title}</p>
    </div>
  );
};
export default Stat;
