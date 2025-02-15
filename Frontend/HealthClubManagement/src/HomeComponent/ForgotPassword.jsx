import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  async function handleRedirection(event) {
    event.preventDefault(); // Prevent page refresh

    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return; // Stop execution if email is empty
    }

    try {
      const response = await fetch("http://localhost:8080/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send OTP");
      }

      const data = await response.json(); // Convert response to JSON

      // Store OTP in localStorage
      localStorage.setItem("otp", data.otp);
      localStorage.setItem("email", data.email);

      // Assuming your backend returns an OTP in data.otp
      console.log(`OTP Sent Successfully! Your OTP: ${data.otp}`);

      navigate("/verify-otp");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Forgot Password</h2>
              <form onSubmit={handleRedirection}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-warning text-light">
                    Send OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
