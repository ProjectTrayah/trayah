import "./index.css";
import {CoPresent} from "@mui/icons-material";

const Cards = () => {
  return (
      <div className="card_container">
        <div className="icon">
          <CoPresent />
        </div>
        <div className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          consectetur quod quidem quos nulla qui!
          <span>Learn more!</span>
        </div>
      </div>
  );
};
const Features = () => {
  return (
      <div className="features_main">
        <div className="features_header">
          <h3>FEATURES</h3>
        </div>
        <div className="features_content">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
  );
};

export default Features;
