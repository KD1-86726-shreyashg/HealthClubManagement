import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const validateForm = () => {
    const email = localStorage.getItem("email");
    if (
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required!", { position: "top-center" });
      return false;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return false;
    }
    if (email === null) {
      toast.error("You can't directly chnage password!", { position: "top-center" });
      return false;
    }
    return true;
  };


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if (!validateForm()) return;

    const userData = {
      email: localStorage.getItem("email"),
      password: formData.newPassword,
    }
    try {
      const response = await axios.post("http://localhost:8080/auth/change-password", userData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Password Changed Successfully!", { position: "top-center" });

      await setFormData({
        newPassword: "",
        confirmPassword: "",
      });
      
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error(error.response?.data?.message || "Registration failed!", {
        position: "top-center",
      });
    }
  };


  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Reset Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    New Password
                  </label>

                  <input
                    type="password"
                    name="newPassword"
                    className="form-control"
                    placeholder="Enter password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    // required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="npassword" className="form-label fw-semibold">
                    Confirm password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Enter confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    // required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success text-center text-light"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
