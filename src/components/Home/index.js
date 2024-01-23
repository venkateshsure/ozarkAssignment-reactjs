import Header from "../Header";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Home = () => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Header />
      <div className="slider-container">
        <Slider className="dotsClass" {...settings}>
          <div className="back-content-con">
            <div className="background-image1">
              <div className="back-content-con2">
                <p className="back-content-para1-con">
                  WE ARE <span className="span-con">COVID</span> READY.
                </p>
                <p className="back-content-para1-con2">
                  The corona virus COVID19 pandemic is the defining global
                  health crisis.
                </p>
                <div className="back-button-con">
                  <button className="back-read-more-btn" type="button">
                    Read More
                  </button>
                  <button className="back-read-more-btn" type="button">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="back-content-con">
            <div className="background-image2">
              <div className="back-content-con2">
                <p className="back-content-para1-con">ONLINE SOLUTION</p>
                <p className="back-content-para1-con2">
                  Welcome to <span className="span-con">Dental Office.</span>
                </p>
                <div className="back-button-con">
                  <button className="back-read-more-btn" type="button">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="back-content-con">
            <div className="background-image3">
              <div className="back-content-con2">
                <p className="back-content-para1-con">
                  THE DENTAL{" "}
                  <span className="span-con"> READYCARE OF YOUR </span>WHOLE
                  FAMILY.
                </p>
                <p className="back-content-para1-con2">
                  Your smile is the identity and the Dental Office is committed
                  to take good care of it.
                </p>
                <div className="back-button-con">
                  <button className="back-read-more-btn" type="button">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="back-content-con">
            <div className="background-image4">
              <div className="back-content-con2">
                <p className="back-content-para1-con">
                  WE ARE <span className="span-con">COVID</span> READY.
                </p>
                <p className="back-content-para1-con2">
                  The corona virus COVID19 pandemic is the defining global
                  health crisis.
                </p>
                <div className="back-button-con">
                  <button className="back-read-more-btn" type="button">
                    Read More
                  </button>
                  <button className="back-read-more-btn" type="button">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="home-head-con">
          <div className="our-first-con">
            <p className="para-con1">Our Doctors</p>
            <p className="para-con2">
              CARE SOLUTIONS Quality Affordable In-Home Care In Your Community
              Is Just A Phone Call Away. Learn More About Us Below.
            </p>
            <button className="about-button" type="button">
              About Us
            </button>
          </div>
          <div className="our-second-con">
            <p className="para-con1">OPENING HOURS</p>
            <p className="para-con2">
              Monday04:30 PM - 09:00 PM Tues - Sat09:00 AM - 09:00 PM Sun10:00
              AM - 02:00 PM
            </p>
            <button className="about-button" type="button">
              Request an appointment
            </button>
          </div>
          <div className="our-first-con">
            <p className="para-con1">24 HOUR SERVICE</p>
            <p className="para-con2">
              DEFINED BY YOU 24 hour phone support for Dental Emergency, clinic
              Off hours emergency treatment options.
            </p>
            <button className="about-button" type="button">
              Learn More
            </button>
          </div>
          <div className="our-second-con">
            <p className="para-con1">BOOKING A VISIT</p>
            <p className="para-con2">
              AT YOUR CONVENIENCE +91 9971277194 Get The Quality Care That You
              Deserve Immediately
            </p>
            <button className="about-button" type="button">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
