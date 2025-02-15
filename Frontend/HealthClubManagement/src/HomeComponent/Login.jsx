import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserService from "../services/UserService";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const modalElement = document.getElementById("exampleModal");

    if (modalElement) {
      modalElement.addEventListener("shown.bs.modal", () => {
        setEmail("");
        setPassword("");
        setError("");
      });
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener("shown.bs.modal", () => {
          setEmail("");
          setPassword("");
          setError("");
        });
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await UserService.login(email, password);
      console.log("Login Response:", userData);

      if (userData.token) {
        sessionStorage.setItem("token", userData.token);
        sessionStorage.setItem("role", userData.role);
        sessionStorage.setItem("id", userData.id);
        sessionStorage.setItem("name", userData.name);

        // Close the modal properly
        const modalElement = document.getElementById("exampleModal");
        if (modalElement) {
          const modalInstance =
            bootstrap.Modal.getOrCreateInstance(modalElement);
          modalInstance.hide();
        }

        // Remove modal backdrop manually
        const modalBackdrop = document.querySelector(".modal-backdrop");
        if (modalBackdrop) {
          modalBackdrop.remove();
        }

        // Navigate and force re-render
        navigate("/", { replace: true });

        // Force refresh the page after navigation
        setTimeout(() => {
          window.location.reload();
        }, 10);
      } else {
        setError(userData.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Something went wrong. Please try again.");
    }

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="text-danger modal-title fs-5"
                id="exampleModalLabel"
              >
                <span className="text-center">Login</span>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {error && (
                <h5 className="error-message text-center text-danger">
                  {error}
                </h5>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Link
                    to="/forgot-password"
                    style={{ textDecoration: "none" }}
                    onClick={(event) => {
                      event.preventDefault(); // Prevent default behavior for better control
                      const modalElement =
                        document.getElementById("exampleModal");

                      if (modalElement) {
                        const modalInstance =
                          bootstrap.Modal.getInstance(modalElement);
                        if (modalInstance) modalInstance.hide();
                      }

                      // Use React Router's navigation instead of forcing a reload
                      setTimeout(() => {
                        window.location.href = "/forgot-password"; // Redirect properly
                      }, 100);
                    }}
                  >
                    <span className="mx-1 font-weight-bold text-primary">
                      Forgot Password
                    </span>
                  </Link>
                </div>

                <div className="my-3">
                  <button type="submit" className="btn btn-success mx-2">
                    Login
                  </button>
                </div>
              </form>

              <div className="my-3">
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Don't have an account?
                  <span
                    className="mx-1 font-weight-bold text-primary"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    onClick={() => {
                      const modalElement =
                        document.getElementById("exampleModal");
                      if (modalElement) {
                        const modalInstance =
                          bootstrap.Modal.getOrCreateInstance(modalElement);
                        modalInstance.hide();
                      }

                      // Remove modal backdrop manually
                      const modalBackdrop =
                        document.querySelector(".modal-backdrop");
                      if (modalBackdrop) {
                        modalBackdrop.remove();
                      }

                      // Force reload the page after navigation
                      window.location.href = "/register";
                    }}
                  >
                    Sign Up
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
