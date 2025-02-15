import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const FeedbackForm = ({ userId = JSON.parse(sessionStorage.getItem("id")) }) => {
  const [formData, setFormData] = useState({
    trainerId: null,
    stars: 0,
    description: "",
  });

  const [trainers, setTrainers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/trainer/trainerNames");
        setTrainers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching trainers:", error);
        setIsLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTrainerChange = (e) => {
    setFormData({ ...formData, trainerId: Number(e.target.value) });
  };

  const handleStarChange = (star) => {
    setFormData({ ...formData, stars: star });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.trainerId) {
      Swal.fire("Error", "Please select a trainer!", "error");
      return;
    }
    if (formData.stars === 0) {
      Swal.fire("Error", "Please select a rating!", "error");
      return;
    }
    if (!formData.description.trim()) {
      Swal.fire("Error", "Please enter your feedback!", "error");
      return;
    }

    const payload = {
      trainerId: formData.trainerId,
      stars: formData.stars,
      description: formData.description,
    };

    console.log("Submitting data:", payload);

    try {
      const response = await axios.post(
        `http://localhost:8080/feedback/submit/${userId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        Swal.fire("Success", "Feedback submitted successfully!", "success").then(() => {
          // Reset form data after successful submission
          setFormData({
            trainerId: null,
            stars: 0,
            description: "",
          });
        });
      } else {
        Swal.fire("Error", "Failed to submit feedback.", "error");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      Swal.fire("Error", "Error connecting to the server.", "error");
    }
  };

  return (
    <div className="container my-3 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg border border-secondary rounded-3 px-4" style={{ maxWidth: "500px" }}>
        <div className="card-body bg-light">
          <h3 className="text-center mb-4 text-primary fw-bold">Feedback Form for Trainer</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="trainer" className="form-label fw-semibold">Trainer:</label>
              <select
                name="trainerId"
                value={formData.trainerId || ""}
                onChange={handleTrainerChange}
                className="form-select border border-secondary"
                required
              >
                <option value="">Select a Trainer</option>
                {isLoading ? (
                  <option value="" disabled>Loading trainers...</option>
                ) : (
                  trainers.map((trainer) => (
                    <option key={trainer.id} value={trainer.id}>
                      {trainer.name}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="mb-2">
              <label className="form-label fw-semibold">Rating:</label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleStarChange(star)}
                    style={{
                      fontSize: "28px",
                      color: formData.stars >= star ? "#FFB400" : "#ccc",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out, color 0.3s",
                      textShadow: formData.stars >= star ? "0px 0px 4px rgba(255, 180, 0, 0.7)" : "none",
                    }}
                    className="mx-1"
                  >
                    <i className="fa-solid fa-star"></i>
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label fw-semibold">Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter your feedback"
                rows="4"
                className="form-control border border-secondary"
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary px-4 fw-bold shadow-sm"
                style={{ transition: "transform 0.2s ease-in-out" }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
