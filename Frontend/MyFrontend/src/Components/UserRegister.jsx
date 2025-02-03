import React from "react";

function UserRegister() {
  return (
    <div className="container my-5">
      <h2>User Registration</h2>
      <form>
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter Your Full Name"
          />
        </div>

        {/* Email Address */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label
            htmlFor="exampleInputConfirmPassword"
            className="form-label"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputConfirmPassword"
            placeholder="Confirm Your Password"
          />
        </div>

        {/* Age */}
        <div className="mb-3">
          <label htmlFor="exampleInputAge" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputAge"
            placeholder="Enter Your Age"
          />
        </div>

        {/* Height */}
        <div className="mb-3">
          <label htmlFor="exampleInputHeight" className="form-label">
            Height (cm)
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputHeight"
            placeholder="Enter Your Height"
          />
        </div>

        {/* Weight */}
        <div className="mb-3">
          <label htmlFor="exampleInputWeight" className="form-label">
            Weight (kg)
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputWeight"
            placeholder="Enter Your Weight"
          />
        </div>

        {/* Gender Radio Buttons */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="d-flex gap-3">
            <div className="form-check">
              <input
                type="radio"
                id="genderMale"
                name="gender"
                value="male"
                className="form-check-input"
              />
              <label htmlFor="genderMale" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="genderFemale"
                name="gender"
                value="female"
                className="form-check-input"
              />
              <label htmlFor="genderFemale" className="form-check-label">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="genderOther"
                name="gender"
                value="other"
                className="form-check-input"
              />
              <label htmlFor="genderOther" className="form-check-label">
                Other
              </label>
            </div>
          </div>
        </div>

        {/* Membership Type */}
        <div className="mb-3">
          <label htmlFor="membershipType" className="form-label">
            Membership Type
          </label>
          <select className="form-control" id="membershipType">
            <option value="">Select Membership Type</option>
            <option value="monthly">MONTHLY</option>
            <option value="quarterly">QUARTERLY</option>
            <option value="half-yearly">HALF-YEARLY</option>
            <option value="yearly">YEARLY</option>
          </select>
        </div>

        {/* Personal Trainer */}
        <div className="mb-3">
          <label htmlFor="personalTrainer" className="form-label">
            Personal Trainer
          </label>
          <select className="form-control" id="personalTrainer">
            <option value="">Select Trainer</option>
            <option value="trainer1">John Doe</option>
            <option value="trainer2">Jane Smith</option>
            <option value="trainer3">Michael Johnson</option>
            <option value="trainer4">Emily Davis</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="my-3 d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Login
          </button>
        </div>
      </form>

      {/* Login Modal Trigger */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Login Form */}
              <form>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Enter Your Password"
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
