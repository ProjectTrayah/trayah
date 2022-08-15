import "./index.css";
import { TipsAndUpdates } from "@mui/icons-material";

const AboutBox = (props) => {
  return (
    <div className="about_box">
      <span className="icon">
        <TipsAndUpdates fontSize="large" />
      </span>
      <p style={{ fontSize: "14px", color: "#212529" }}>{props.title}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        reprehenderit. Itaque nemo unde repellendus in iusto illo quae
        asperiores atque!
      </p>
    </div>
  );
};
const About = () => {
  return (
      <div className="about_center">
        <div className="about_header">
          <p>ABOUT US</p>
        </div>
        <div className="about_content">
          <AboutBox title="Creative" />
          <AboutBox title="Quality" />
          <AboutBox title="Development" />
        </div>
        <p className="p">
          ONE STOP SOLUTION FOR ALL COLLEGES
        </p>
        <div className="extra">
          <div className="leftextra">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            suscipit voluptas consequuntur, iste veritatis ipsum culpa, possimus
            pariatur non doloremque veniam mollitia commodi. Eos alias rerum
            cumque enim, saepe maiores dolorum tempora distinctio, natus et
            dignissimos, quia possimus fugit? Repellat commodi similique ducimus
            rem voluptatibus pariatur distinctio molestiae quidem ratione!
          </div>
          <div className="rightextra">
            <img
              src={require("../../../assets/images/branding.png")}
              style={{ width: "350px", borderRradius: "70px" }}
              alt=""
            />
          </div>
        </div>
      </div>
  );
};

export default About;
