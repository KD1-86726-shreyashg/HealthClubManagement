import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const [userOtp, setUserOtp] = useState("");
  const navigate = useNavigate();

    
  const handleOtpVerification = () => {
    const storedOtp = localStorage.getItem("otp"); // Retrieve stored OTP

    if (userOtp === storedOtp) {
      alert("OTP Verified Successfully!");
      navigate("/reset-password"); // Navigate to Hero component
    } else {
      alert("Invalid OTP. Please try again.");
      navigate("/forgot-password"); // Navigate to ForgotPassword component
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
          <div className="card-body">
                          
              <div className="alert alert-success m-3" role="alert">
                We have sent OTP to your email...
              </div>

              <form>
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label fw-semibold">
                    OTP
                  </label>

                  <input
                                      type="text"
                                      className="form-control"
                    placeholder="Enter OTP"
                    value={userOtp}
                    onChange={(e) => setUserOtp(e.target.value)}
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-warning text-center text-light"
                    onClick={handleOtpVerification}>
                    Verify OTP
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
