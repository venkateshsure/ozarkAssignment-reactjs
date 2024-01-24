import Header from "../Header";

import { Link } from "react-router-dom";

import "./index.css";

const About = () => (
  <>
    <Header />
    <div className="about-con">
      <div className="fir-con">
        <p className="about-para">ABOUT US</p>
        <span className="about-span">Home | About us</span>
      </div>
      <div className="sec-con">
        <img
          src="https://thedentaloffice.in/wp-content/uploads/2020/06/h-shaw-ObI8mL772cI-unsplash-300x200.jpg"
          alt="about-img"
          className="about-image"
        />
        <div className="inner-sec-con">
          <p className="about-para-sec">
            <span className="about-span">WELCOME TO</span>Dental Office
          </p>
          <p className="about-para">
            The Dental Office is a multispeciality dental clinic catering people
            from every slab of the society. It is located in the heart of the
            city; Faridabad; with ample parking space and easy access to the
            clinic with minimal treatment cost, world-class dental materials,
            and expertise of global standards. We are the first choice for
            patients in India and abroad looking for cost-effective quality
            dental treatment.
          </p>
        </div>
      </div>
      <div className="third-con">
        <div className="third-content-con">
          <p className="useful-links">Useful Links</p>
          <div className="link-about-con">
            <p className="para">
              <Link className="nav-item" to="/">
                Home
              </Link>
            </p>
            <hr className="hr-con" />
            <p className="para">
              <Link className="nav-item" to="/about">
                About
              </Link>
            </p>
            <hr className="hr-con" />
            <p className="para">
              <Link className="nav-item" to="/services">
                Services
              </Link>
            </p>
            <hr className="hr-con" />
          </div>
        </div>

        <div className="third-content-con">
          <p className="useful-links">Opening Hours</p>
          <div className="third-content-opening-con">
            <p className="para">Monday : </p>
            <p className="para">4:00 to 9:30 PM</p>
          </div>
          <hr className="hr-con" />
          <div className="third-content-opening-con">
            <p className="para">Monday : </p>
            <p className="para">4:00 to 9:30 PM</p>
          </div>
          <hr className="hr-con" />
        </div>
      </div>
    </div>
  </>
);

export default About;
