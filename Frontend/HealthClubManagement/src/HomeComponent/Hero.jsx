import img1 from "/assets/main-image1.png";
import icon1 from "/assets/play.png";
import { Routes, Route } from "react-router-dom";
import Membership from "./Membership";

import TrainerCards from "./TrainerCards";
const Hero = () => {
  return (
    <>
   
      {/* Hero component start here */}
      <div className="container-fluid Hero">
        <div className="container gx-0">
          <div className="row gx-0">
            <div className="col-md-6">
              <div className="Hero_col1">
                <h1>
                  Get Healthy <span>Body</span> With the <span>Perfect</span>{" "}
                  Exercises
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet vitae facilis incidunt quam.
                </p>
                <div className="hero_btns">
                  <button className="btn1  px-4 fs-5" >Get Started</button>

                  <button className="play_btn">
                    <img src={icon1} alt="" />
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Hero_col1"></div>
            </div>
          </div>
        </div>
      </div>
      
      <TrainerCards />
      <Membership />
    </>
  );
};

export default Hero;
