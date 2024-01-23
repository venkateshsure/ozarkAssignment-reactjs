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
          <div className="slider-content-con">
            <img
              src="https://thedentaloffice.in/wp-content/uploads/2020/06/logo.png"
              alt="teeth-logo"
              className="teeth-image"
            />
          </div>
          <div className="slider-content-con">
            <h3>2</h3>
          </div>
          <div className="slider-content-con">
            <h3>3</h3>
          </div>
          <div className="slider-content-con">
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;
