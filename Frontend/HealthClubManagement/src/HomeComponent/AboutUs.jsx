import React from "react";
import { Route, Routes } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div
        className="container my-5"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <h2 className="text-center mb-4" style={{ color: "#007bff" }}>
          About Us
        </h2>
        <div
          className="card mb-3 shadow"
          style={{
            maxWidth: "540px",
            margin: "0 auto",
            border: "1px solid #ddd",
          }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="/assets/main-image3-dqYwcZsu.png"
                className="img-fluid rounded-start"
                alt="Healthcare"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ color: "#333", fontWeight: "bold" }}
                >
                  Our Mission
                </h5>
                <p
                  className="card-text"
                  style={{ fontSize: "14px", lineHeight: "1.6" }}
                >
                  We aim to provide top-notch healthcare solutions with the help
                  of technology. Our goal is to make healthcare accessible,
                  affordable, and efficient for everyone.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Serving with passion since 2020
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card mb-3 shadow"
          style={{
            maxWidth: "540px",
            margin: "2rem auto",
            border: "1px solid #ddd",
          }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="/assets/download.jpg"
                className="img-fluid rounded-start"
                alt="Expert Team"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ color: "#333", fontWeight: "bold" }}
                >
                  Our Expert Team
                </h5>
                <p
                  className="card-text"
                  style={{ fontSize: "14px", lineHeight: "1.6" }}
                >
                  Our team consists of experienced doctors, nurses, and IT
                  professionals dedicated to providing the best healthcare
                  experience possible.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Contact us for more details
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p style={{ fontSize: "14px", color: "#555" }}>
            For inquiries, reach out to us at{" "}
            <strong>support@healthcareapp.com</strong> or call us at{" "}
            <strong>+123-456-7890</strong>.
          </p>
        </div>
      </div>

      
    </>
  );
};

export default AboutUs;
