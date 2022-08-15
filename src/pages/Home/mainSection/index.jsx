import "./index.css";
const MainSection = () => {
  return (
    <>
      <div className="main_container">
        <div className="hero_container">
          <section className="left_section">
            <h2>An organized Approach for Institution's</h2>
            <h4>Academic Activities</h4>
            <div className="buttons">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <button>JOIN</button>
            </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <button>LEARN MORE</button>
            </a>
            </div>
          </section>
          <section className="right_section">
            <img src={require("../../../assets/images/cover.png")} alt="" />
          </section>
        </div>
      </div>
    </>
  );
};

export default MainSection;
