import React from "react";

function TrainerRegister() {
  return (
    <>
      <style>
        {`
          .form-label {
            text-align: left !important;
          }

          .form-control {
            width: 100%;
          }

          .form-check-label {
            text-align: left !important;
          }

          .d-flex .form-check-input {
            margin-left: 0.5rem;
          }
        `}
      </style>

      <div
        className="modal fade"
        id="trainerModal"
        tabIndex="-1"
        aria-labelledby="trainerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="trainerModalLabel">
                Trainer Registration
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="trainerName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="trainerName"
                    placeholder="Enter Your Full Name"
                  />
                </div>

                {/* Email Address */}
                <div className="mb-3">
                  <label htmlFor="trainerEmail" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="trainerEmail"
                    placeholder="Enter Your Email"
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="trainerPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="trainerPassword"
                    placeholder="Enter Your Password"
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirmTrainerPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmTrainerPassword"
                    placeholder="Confirm Your Password"
                  />
                </div>

                {/* Age */}
                <div className="mb-3">
                  <label htmlFor="trainerAge" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="trainerAge"
                    placeholder="Enter Your Age"
                  />
                </div>

                {/* Gender */}
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <input
                        type="radio"
                        id="genderMale"
                        name="gender"
                        value="male"
                        className="form-check-input"
                      />
                      <label htmlFor="genderMale" className="form-check-label ms-1">
                        Male
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="genderFemale"
                        name="gender"
                        value="female"
                        className="form-check-input"
                      />
                      <label htmlFor="genderFemale" className="form-check-label ms-1">
                        Female
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="genderOther"
                        name="gender"
                        value="other"
                        className="form-check-input"
                      />
                      <label htmlFor="genderOther" className="form-check-label ms-1">
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-3">
                  <label htmlFor="trainerExperience" className="form-label">
                    Experience (in years)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="trainerExperience"
                    placeholder="Enter Your Experience"
                  />
                </div>

                {/* Buttons */}
                <div className="my-3 d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary me-2">
                    Register
                  </button>
                  <button
                    type="button"
                    className="btn btn-success me-2 hover-green"
                    style={{ transition: "background-color 0.3s" }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#28a745"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#198754"}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Trigger Button for Modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#trainerModal"
      >
        Open Trainer Registration Modal
      </button>
    </>
  );
}

export default TrainerRegister;
