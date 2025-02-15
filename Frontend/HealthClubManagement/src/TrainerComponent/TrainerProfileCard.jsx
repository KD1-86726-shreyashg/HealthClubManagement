import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const cardStyles = {
  margin: "30px auto",
  maxWidth: "500px",
  padding: "20px",
  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  backgroundColor: "#fff",
};

const iconStyles = {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  backgroundColor: "#007bff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
  color: "#fff",
  margin: "0 auto 20px auto",
};

const nameStyles = {
  textAlign: "center",
  fontSize: "1.8rem",
  fontWeight: "600",
  letterSpacing: "0.5px",
  color: "#333",
};

const TrainerProfileCard = () => {
  const [trainerData, setTrainerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    experience: "",
    age: "",
  });

  const trainerId = JSON.parse(sessionStorage.getItem("id")); // Hardcoded for now, replace dynamically if needed.

  
  // Fetch trainer profile
  const fetchTrainerProfile = () => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/trainer/profile/${trainerId}`)
      .then((response) => {
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          const trainer = response.data[0]; // Extract first object from array
          setTrainerData(trainer);
          setFormData({
            name: trainer.name || "",
            email: trainer.email || "",
            gender: trainer.gender || "",
            experience: trainer.experience || "",
            age: trainer.age || "",
          });
        } else {
          Swal.fire("Error", "No trainer data received from the server.", "error");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trainer data:", error);
        Swal.fire("Error", "Failed to load trainer profile. Please try again later.", "error");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTrainerProfile();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8080/trainer/updateTrainer/${trainerId}`, formData)
      .then(() => {
        Swal.fire("Success", "Trainer profile updated successfully!", "success");
        setIsEditing(false);
        fetchTrainerProfile(); // Fetch updated data
      })
      .catch((error) => {
        console.error("Error updating trainer profile:", error);
        Swal.fire("Error", "Failed to update trainer profile.", "error");
      });
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (!trainerData) {
    return <div className="container">No trainer data available</div>;
  }

  return (
    <div className="container">
      {!isEditing ? (
        // Profile Card View
        <div className="card" style={cardStyles}>
          <div className="card-body">
            <div style={iconStyles}>
              <i className="fa fa-user" style={{ fontSize: "50px" }}></i>
            </div>

            <h3 style={nameStyles}>{trainerData.name || "N/A"}</h3>

            <div className="mb-3">
              <strong>Email: </strong> {trainerData.email || "N/A"}
            </div>
            <div className="mb-3">
              <strong>Gender: </strong> {trainerData.gender || "N/A"}
            </div>
            <div className="mb-3">
              <strong>Experience: </strong> {trainerData.experience ? `${trainerData.experience} years` : "N/A"}
            </div>
            <div className="mb-3">
              <strong>Age: </strong> {trainerData.age || "N/A"}
            </div>

            <div className="text-center">
              <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Edit Form View
        <div className="card" style={cardStyles}>
          <div className="card-body">
            <h3 className="text-center">Edit Trainer Profile</h3>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Experience (Years)</label>
                <input
                  type="number"
                  className="form-control"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-success">
                  Save Changes
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerProfileCard;
