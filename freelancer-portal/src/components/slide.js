import React from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "../images/slide1.PNG";
import slide2 from "../images/slide2.PNG";
import slide3 from "../images/slide3.PNG";
import "./slide.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...properties}>
        <div className="each-slide">
          <div>
            <img src={slide1} alt="image1"></img>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={slide2} alt="image2"></img>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={slide3} alt="image3"></img>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
