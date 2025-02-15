import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success("Your message has been sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      comment: "",
    });
  };

  return (
    <div className="container my-5">
      <ToastContainer />
      <div className="row bg-dark text-white p-5 rounded">
        {/* Contact Info Section */}
        <div className="col-md-5">
          <h2 className="text-warning mb-3">CONTACT US</h2>
          <h3 className="fw-bold mb-3">GET IN TOUCH</h3>

          <p className="d-flex align-items-center mb-3">
            <span className="d-inline-block bg-secondary rounded-circle p-2 me-2">
              📍
            </span>
            333 Kothrud Paud Road, Pune
          </p>

          <p className="d-flex align-items-center mb-3">
            <span className="d-inline-block bg-secondary rounded-circle p-2 me-2">
              📞
            </span>
            7447474864 | 8380050805
          </p>

          <p className="d-flex align-items-center">
            <span className="d-inline-block bg-secondary rounded-circle p-2 me-2">
              📧
            </span>
            Support.gymcenter@gmail.com
          </p>
        </div>

        {/* Form Section */}
        <div className="col-md-7">
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-control mb-3 bg-light fw-bold border-dark"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control mb-3 bg-light fw-bold text-black border-dark"
              required
            />
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Comment"
              rows="4"
              className="form-control mb-3 bg-light fw-bold border-dark"
              required
            ></textarea>
            <button type="submit" className="btn btn-warning fw-bold text-dark">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
