import { useEffect, useRef, useState } from "react";
import "./index.css";
import {Close,LinearScale} from "@mui/icons-material";

const HomeHeader = () => {
  const child1 = useRef(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        child1.current.style.backgroundColor = "black";
      }
      if (window.scrollY === 0) {
        child1.current.style.backgroundColor = "transparent";
      }
    });
  }, []);

  return (
    <div ref={child1} className="head_container">
      <div className="head_header">
        <div className="head_logo">
          <p>TRAYAH</p>
        </div>
        <div className={`head_nav${toggle ? "active" : ""}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Features</li>
            <li>Clients</li>
            <li>About Us</li>
          </ul>
        </div>
        {!toggle ? (
          <div className="head_icon" onClick={() => setToggle(!toggle)}>
            <LinearScale />
          </div>
        ) : (
          <div className="close_icon" onClick={() => setToggle(!toggle)}>
            <Close />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeHeader;
