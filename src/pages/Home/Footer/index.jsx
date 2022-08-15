import "./index.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
      <div className="footer">
          <div className="footer_row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="/#">about us</a>
                </li>
                <li>
                  <a href="/#">our services</a>
                </li>
                <li>
                  <a href="/#">privacy policy</a>
                </li>
                <li>
                  <a href="/#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="/#">FAQ</a>
                </li>
                <li>
                  <a href="/#">shipping</a>
                </li>
                <li>
                  <a href="/#">returns</a>
                </li>
                <li>
                  <a href="/#">order status</a>
                </li>
                <li>
                  <a href="/#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Address</h4>
              <p>
                Madhurawada <br /> Visakhapatnam <br />
                India.
              </p>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="/#">
                  <FacebookIcon />
                </a>
                <a href="/#">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
      </div>
  );
};

export default Footer;
