import logo from "/assets/logo_main-48JSqkPZ.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
// import Login from "./Login";
// import Membership from "./Membership";
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  Nav_Main">
        <div className="container">
          <a
            className="logo"
            href="#"
            style={{ width: "13%", marginLeft: "-85px" }}
          >
            <img src={logo} alt="" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/membership" className="nav-link">
                  Membership
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ background: "black" }}
                >
                  <li>
                    <Link className="dropdown-item" to="/classes">
                      Schedules
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/trainer-cards">
                      Our Trainers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bmi">
                      BMI
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact us
                </Link>
              </li>
            </ul>

            <button
              className="btn btn-sm btn-success font-weight-bold"
              type="button"
              style={{ borderRadius: "8px", marginRight: "-47px" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <Login />
    </>
  );
};

export default Navbar;

// ------------------------------------------------
