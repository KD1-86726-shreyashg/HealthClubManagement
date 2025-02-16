
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const EditTrainerForm = ({ trainer, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: trainer.name || "",
    email: trainer.email || "",
    age: trainer.age || "",
    experience: trainer.experience || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submission status

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value.trim(), // Trim the value to remove unwanted spaces
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.age || !formData.experience) {
      toast.error("Please fill all the fields", { position: "top-center" });
      return;
    }

    // Show SweetAlert confirmation
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You are about to update this trainer's information.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    });

    if (result.isConfirmed) {
      try {
        setIsSubmitting(true); // Disable submit button during the request
        const response = await axios.put(
          `http://localhost:8080/trainer/updateTrainer/${trainer.id}`,
          formData
        );

        if (response.status === 200) {
          toast.success("Trainer updated successfully", { position: "top-center" });
          onUpdate(); // Refresh trainer list after update
          onClose(); // Close the edit form
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Error updating trainer", { position: "top-center" });
        console.error("Error updating trainer:", error);
      } finally {
        setIsSubmitting(false); // Re-enable the submit button
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card pt-2 pb-4 px-4 shadow-lg w-50" style={{ marginTop: "-90px" }}>
        <h3 className="text-center">Edit Trainer</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label className="fw-bold">Name:</label>
            <input type="text" className="form-control p-2" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group mb-2">
            <label className="fw-bold">Email:</label>
            <input type="email" className="form-control p-2" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group mb-2">
            <label className="fw-bold">Age:</label>
            <input type="number" className="form-control p-2" name="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div className="form-group mb-2">
            <label className="fw-bold">Experience (Years):</label>
            <input type="text" className="form-control p-2" name="experience" value={formData.experience} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100 p-2" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
          <button type="button" className="btn btn-secondary mt-3 w-100 p-2" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default EditTrainerForm;



