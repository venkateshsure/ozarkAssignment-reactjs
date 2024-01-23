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
              src="https://img.freepik.com/free-photo/photo-smiling-dentist-standing-with-arms-crossed-with-her-colleague-showing-okay-sign_496169-1043.jpg"
              alt="teeth-logo"
              className="carousel-image"
            />
            <h1>hii</h1>
          </div>
          <div className="slider-content-con">
            <img
              src="https://www.shutterstock.com/image-photo/dentist-mirror-woman-check-smile-600nw-2308801975.jpg"
              alt="teeth-logo"
              className="carousel-image"
            />
            <h1>hii</h1>
          </div>
          <div className="slider-content-con">
            <img
              src="https://www.shutterstock.com/image-photo/dentist-holding-educational-model-dental-260nw-2241502389.jpg"
              alt="teeth-logo"
              className="carousel-image"
            />
            <h1>hii</h1>
          </div>
          <div className="slider-content-con">
            <img
              className="carousel-image"
              alt="teeth-logo"
              src="https://www.shutterstock.com/image-photo/orthodontist-conducts-consultation-on-dental-260nw-2125609112.jpg"
            />
            <h1>hii</h1>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;
