import React, { useState, useEffect } from "react";
import axios from "axios";

// Helper function to render stars based on the rating
const renderStars = (rating) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-regular fa-star ${i <= rating ? "text-warning" : "text-muted"}`}
        style={{ fontSize: "20px" }}
      ></i>
    );
  }
  return stars;
};

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch feedback data from the backend
  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/feedback/getAllFedbacks"); // Update with your backend URL
        setFeedbackList(response.data); // Assuming the response contains an array of feedback data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching feedback data:", err);
        setError("Failed to load feedback data.");
        setLoading(false);
      }
    };

    fetchFeedbackData();
  }, []);

  // If the data is still loading, show a loading message
  if (loading) {
    return <div className="text-center">Loading feedback...</div>;
  }

  // If there was an error, show an error message
  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Feedbacks</h2>
      <div className="row">
        {feedbackList.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-warning text-center" role="alert">
              No feedback available.
            </div>
          </div>
        ) : (
          feedbackList.map((feedback) => (
            <div className="col-md-4" key={feedback.id}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title"> Trainer - {feedback.trainerName}</h5>
                  <p className="card-text">
                    <strong>By: </strong>{feedback.memberName}
                  </p>
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <strong>Rating:</strong>
                      <span className="ms-2">{renderStars(feedback.stars)}</span>
                    </div>
                  </div>
                  <p className="card-text">{feedback.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackList;