import React from "react";

const UserProfile = () => {
  // Hardcoded user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    height: 175,
    weight: 70,
    membershipType: "Premium",
    personalTrainer: "Alex Smith",
    dietPlan: "Keto",
    workoutPlan: "Strength Training",
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">
      <style>
        {`
          .card {
            border-radius: 1.5rem;
            background-color: #333;
            color: #fff;
          }
          .card-header {
            background-color: #444;
            text-align: center;
            border-radius: 1.5rem 1.5rem 0 0;
            padding: 20px;
          }
          .card-body {
            padding: 1.5rem;
          }
          .card-body span {
            color: #bbb;
          }
          .card-body span:nth-child(odd) {
            font-weight: 600;
          }
          .btn-primary {
            background-color: #007bff;
            border: none;
            border-radius: 0.5rem;
            padding: 10px 20px;
            transition: background-color 0.3s ease;
          }
          .btn-primary:hover {
            background-color: #0056b3;
          }
          .btn-primary:focus {
            outline: none;
            box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
          }
        `}
      </style>

      <div className="card shadow-lg" style={{ width: "100%", maxWidth: "28rem" }}>
        <div className="card-header">
          <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#f8f9fa" }} id="user-profile-header">
            User Profile
          </h1>
        </div>
        <div className="card-body">
          {/* User data below heading */}
          <div className="mb-3 d-flex justify-content-between">
            <span>Name:</span>
            <span>{user.name || 'N/A'}</span>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <span>Email:</span>
            <span>{user.email || 'N/A'}</span>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <span>Age:</span>
            <span>{user.age || 'N/A'}</span>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <span>Height:</span>
            <span>{user.height ? `${user.height} cm` : 'N/A'}</span>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <span>Weight:</span>
            <span>{user.weight ? `${user.weight} kg` : 'N/A'}</span>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <span>Membership Type:</span>
            <span>{user.membershipType || 'N/A'}</span>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <span>Personal Trainer:</span>
            <span>{user.personalTrainer || 'N/A'}</span>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <span>Diet Plan:</span>
            <span>{user.dietPlan || 'N/A'}</span>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <span>Workout Plan:</span>
            <span>{user.workoutPlan || 'N/A'}</span>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <button className="btn btn-primary" style={{ borderRadius: "0.5rem" }} aria-label="Edit Profile">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
