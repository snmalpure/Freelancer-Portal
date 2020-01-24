import React from "react";
import { Slide } from "react-slideshow-image";
import Ripples from "react-ripples";
import slide1 from "../images/slide1.PNG";
import slide2 from "../images/slide2.PNG";
import slide3 from "../images/slide3.PNG";
import "./slide.css";
import linklogin from "./navbar";
import signup from "./signup";

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
    <div className="info">
      <h1>
        <b>Hire expert freelancers for any job, online!</b>
      </h1>
      <h5>
        Millions of small businesses use Freelancer to turn their ideas into
        reality.
      </h5>

      <div className="btns">
        <Ripples color="#fff" during={1200} className="hire">
          <button type="button" className="btn btn-warning" onClick={signup}>
            <b>I want to Hire</b>
          </button>
        </Ripples>

        <Ripples color="#fff" during={1200} className="work">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={signup}
          >
            <b>I want to Work</b>
          </button>
        </Ripples>
      </div>

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
    </div>
  );
};

export default Slideshow;
