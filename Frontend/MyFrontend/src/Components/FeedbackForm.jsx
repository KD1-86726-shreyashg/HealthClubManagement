import React, { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    trainer: "",
    stars: 0, // Store the number of stars selected
    description: "",
  });

  const [submitted, setSubmitted] = useState(false); // Track if form is submitted

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle star rating change
  const handleStarChange = (star) => {
    setFormData({
      ...formData,
      stars: star, // Update the number of selected stars
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Mark the form as submitted
    console.log(formData); // You can replace this with your submission logic
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Feedback Form for Trainer</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        {/* Trainer Dropdown */}
        <div className="mb-3">
          <label htmlFor="trainer" className="form-label">Trainer:</label>
          <select
            name="trainer"
            value={formData.trainer}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select a Trainer</option>
            <option value="Trainer1">Trainer 1</option>
            <option value="Trainer2">Trainer 2</option>
            <option value="Trainer3">Trainer 3</option>
            <option value="Trainer4">Trainer 4</option>
            <option value="Trainer5">Trainer 5</option>
          </select>
        </div>

        {/* Rating (Stars) */}
        <div className="mb-3">
          <label className="form-label">Rating:</label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarChange(star)} // When a star is clicked, update the rating
                style={{
                  fontSize: "24px",
                  color: formData.stars >= star ? "#FFD700" : "#ccc", // Gold if selected, else gray
                  cursor: "pointer",
                  transition: "color 0.3s",  // Smooth color transition
                }}
              >
                ⭐
              </span>
            ))}
          </div>
        </div>

        {/* Description Textarea */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter your feedback"
            rows="4"
            className="form-control"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>

      {/* Submission Message */}
      {submitted && (
        <div className="submission-message text-center mt-4">
          <p className="fw-bold">Thank you for your feedback!</p>
          <p>You rated {formData.stars} star{formData.stars !== 1 ? "s" : ""}.</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;

// Internal CSS for Styling
<style>
{`
  /* Custom styles for the form */
  .form-control {
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  .form-select {
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  .btn {
    border-radius: 0.5rem;
    font-size: 1.2rem;
    padding: 10px 20px;
  }

  .submission-message p {
    font-size: 1.1rem;
  }

  /* Styling for the star rating */
  .star-rating {
    font-size: 24px;
    color: #ccc;
    cursor: pointer;
    transition: color 0.3s;
  }

  .star-rating.selected {
    color: #FFD700;
  }

  .submission-message {
    background-color: #f0f8ff;
    border: 1px solid #cce7ff;
    padding: 15px;
    border-radius: 8px;
  }
`}
</style>
