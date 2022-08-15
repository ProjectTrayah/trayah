import "./index.css";
import {Link} from 'react-router-dom';
const Error404 = () => {
  return (
    <div className="error-body">
      <div className="outercircle">
        <div className="innercircle">
            <h1 className="error-title">404</h1>
            <span>OOPS!  No Page Found</span>
            <Link className="link" to="/"><div className="button">Home</div></Link>
          </div>
        </div>
      </div>
  );
};

export default Error404;
