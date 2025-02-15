import React, { useState, useEffect } from "react";
import Membership from "./Membership";
import TrainerCards from "./TrainerCards";

export default function CrouselComponent() {
  const [name, setName] = useState("");
  const [hasSessionData, setHasSessionData] = useState(false);

  useEffect(() => {
    // Retrieve the name from session storage
    const sessionData = sessionStorage.getItem("name");
    if (sessionData) {
      setName(sessionData);
      setHasSessionData(true);
    }
  }, []);

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/crousel-images/c1.webp"
              className="d-block"
              style={{ width: "100%", height: "527px" }}
              alt="..."
            />
            {hasSessionData && (
              <div className="carousel-caption d-none d-md-block">
              <h5>
                
                Get ready to push your limits, <span className="text-warning"> {name}</span>! Transform your body
                and mind with our expert trainers and top-notch equipment.
            </h5>
              </div>
            )}
          </div>

          <div className="carousel-item">
            <img
              src="/assets/crousel-images/c2.jpg"
              className="d-block w-100"
              style={{ width: "100%", height: "527px" }}
              alt="..."
            />
            {hasSessionData && (
              <div className="carousel-caption d-none d-md-block">
                <h5>
                
                    Get ready to push your limits, <span className="text-warning"> {name}</span>! Transform your body
                    and mind with our expert trainers and top-notch equipment.
                </h5>
                
              </div>
            )}
          </div>
          <div className="carousel-item">
            <img
              src="/assets/crousel-images/c3.jpg"
              className="d-block w-100"
              style={{ width: "100%", height: "527px" }}
              alt="..."
            />
            {hasSessionData && (
              <div className="carousel-caption d-none d-md-block">
              <h5>
                
                Get ready to push your limits, <span className="text-warning"> {name}</span>! Transform your body
                and mind with our expert trainers and top-notch equipment.
            </h5>
              </div>
            )}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <TrainerCards />
      <Membership />
    </>
  );
}
