import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TrainerRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    experience: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("All fields are required!", { position: "top-center" });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return false;
    }
    if (!formData.age || isNaN(formData.age) || Number(formData.age) <= 0) {
      toast.error("Valid age is required!", { position: "top-center" });
      return false;
    }
    if (!formData.experience) {
      toast.error("Experience is required!", { position: "top-center" });
      return false;
    }
    if (!formData.gender) {
      toast.error("Please select a gender!", { position: "top-center" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const trainerData = {
      name: formData.name, // String
      email: formData.email, // String
      password: formData.password, // String
      experience: formData.experience, // String
      age: parseInt(formData.age, 10), // Integer
      gender: formData.gender.toUpperCase(), // Enum
    };

    try {
      const response = await axios.post("http://localhost:8080/auth/trainer-register", trainerData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Registration successful!", { position: "top-center" });

      // Reset form after successful registration
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        experience: "",
        gender: "",
      });
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error(
        error.response?.data?.message || "Registration failed. Please try again.",
        { position: "top-center" }
      );
    }
  };

  return (
    <div className="container w-50 mb-3">
      <ToastContainer />
      <div className="trainer-card shadow-lg border-0">
        <div className="card-header bg-primary text-white text-center">
          <h4>Trainer Registration</h4>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Your Password"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter Age"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Experience (Years)</label>
                <input
                  type="text"
                  className="form-control"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Enter Experience"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Gender</label>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input
                    type="radio"
                    name="gender"
                    value="MALE"
                    checked={formData.gender === "MALE"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="gender"
                    value="FEMALE"
                    checked={formData.gender === "FEMALE"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label className="form-check-label">Female</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="gender"
                    value="OTHER"
                    checked={formData.gender === "OTHER"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label className="form-check-label">Other</label>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary btn-md">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TrainerRegister;
