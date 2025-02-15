import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Schedule from "./Classes";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Contact Info Section */}
          <div className="col-md-3 mb-4">
            <h4 className="text-warning">CONTACT US</h4>
            <p>📍 333 Kothrud Paud Rd, Pune</p>
            <p>📞 7447474864 | 8380050805</p>
            <p>📧 Support.gymcenter@gmail.com</p>
          </div>

          {/* About Section */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">GYM</h4>
            <p className="small">Gyms offer fitness equipment, classes, and personal training to help people improve their physical health and well-being.</p>
            <div>
              <a href="https://www.facebook.com/" className="text-white me-3 fs-5">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://x.com/twitter?lang=en" className="text-white me-3 fs-5">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-white me-3 fs-5">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 mb-4">
            <h4 className="fw-bold">Useful Links</h4>
            <ul className="list-unstyled small">
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link className="text-light text-decoration-none">Blog</Link></li>
              <li><Link to="/classes" className="text-light text-decoration-none">Classes</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h4 className="fw-bold">Support</h4>
            <ul className="list-unstyled small">
              <li>Login</li>
              <li>My account</li>
              <li>Subscribe</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Tips & Guides */}
          <div className="col-md-2 mb-4">
            <h4 className="fw-bold">Tips & Guides</h4>
            <ul className="list-unstyled small">
              <li>
                Physical fitness may help prevent depression, anxiety
                <br />
                <small>3 min read | 20 Comments</small>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-top pt-3">
          <p className="small mb-0" style={{fontSize:"15px"}}>Copyright ©2025 All rights reserved | Health club ❤</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;