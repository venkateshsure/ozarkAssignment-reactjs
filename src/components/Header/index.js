import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <div className="con">
    <div className="content-con">
      <img
        src="https://thedentaloffice.in/wp-content/uploads/2020/06/logo.png"
        alt="teeth-logo"
        className="teeth-image"
      />
      <div className="header-con">
        <p className="para">
          <Link className="nav-item" to="/">
            Home
          </Link>
        </p>
        <p className="para">
          <Link className="nav-item" to="/about">
            About
          </Link>
        </p>
        <p className="para">
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Header;

/* <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div> */
