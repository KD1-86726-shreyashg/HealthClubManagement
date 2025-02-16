// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const EditUserForm = ({ user, onSuccess }) => {
//   const [formData, setFormData] = useState({
//     name: user.name,
//     email: user.email,
//     age: user.age,
//     height: user.height,
//     weight: user.weight,
//     membershipId: user.membershipType, // use numeric id for membershipType
//     personalTrainerId: user.trainerName, // use numeric id for trainerName
//   });

//   const [trainers, setTrainers] = useState([]);

//   // Fetch trainers from API
//   useEffect(() => {
//     axios.get("http://localhost:8080/trainers/getAll")
//       .then(response => setTrainers(response.data))
//       .catch(error => console.error("Error fetching trainers:", error));
//   }, []);

//   // Membership options as numbers
//   const membershipOptions = [
//     { label: "Monthly", value: 1 },
//     { label: "Quarterly", value: 4 },
//     { label: "Half-Yearly", value: 3 },
//     { label: "Yearly", value: 2 }
//   ];

//   // Trainer options with numeric IDs
//   const trainerOptions = [
//     { label: "Manish", value: 1 },
//     { label: "Sam", value: 3 },
//     { label: "Shreyash", value: 4 },
//     { label: "Raj", value: 5 }
//   ];

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure membershipId and personalTrainerId are numbers before submitting
//     const formDataToSend = {
//       ...formData,
//       membershipId: Number(formData.membershipId),
//       personalTrainerId: Number(formData.personalTrainerId),
//     };

//     try {
//       await axios.put(`http://localhost:8080/user/updateUser/${user.id}`, formDataToSend);
//       toast.success("User Edited Successfully", { position: "top-center" });
//       onSuccess(); // Close form & refresh users
//     } catch (error) {
//       toast.error("Error updating user.");
//       console.error("Error updating user:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h3 className="text-center">Edit User</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Age:</label>
//           <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Height (cm):</label>
//           <input type="number" className="form-control" name="height" value={formData.height} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Weight (kg):</label>
//           <input type="number" className="form-control" name="weight" value={formData.weight} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Membership Type:</label>
//           <select className="form-control" name="membershipId" value={formData.membershipId} onChange={handleChange} required>
//             <option value="">Select Membership</option>
//             {membershipOptions.map((type) => (
//               <option key={type.value} value={type.value}>{type.label}</option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Personal Trainer:</label>
//           <select className="form-control" name="personalTrainerId" value={formData.personalTrainerId} onChange={handleChange} required>
//             <option value="">Select Trainer</option>
//             {trainerOptions.map((trainer) => (
//               <option key={trainer.value} value={trainer.value}>{trainer.label}</option>
//             ))}
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary mt-3">
//           Edit User
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditUserForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import UserService from "../services/UserService";

const EditUserForm = ({ user, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
    height: user.height,
    weight: user.weight,
    membershipId: user.membershipType,
    personalTrainerId: user.trainerName,
  });

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/trainers/getAll")
      .then(response => setTrainers(response.data))
      .catch(error => console.error("Error fetching trainers:", error));
  }, []);

  const membershipOptions = [
    { label: "Monthly", value: 1 },
    { label: "Quarterly", value: 4 },
    { label: "Half-Yearly", value: 3 },
    { label: "Yearly", value: 2 }
  ];

  const trainerOptions = [
    { label: "Manish", value: 1 },
    { label: "Sam", value: 3 },
    { label: "Shreyash", value: 4 },
    { label: "Raj", value: 5 }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const formDataToSend = {
          ...formData,
          membershipId: Number(formData.membershipId),
          personalTrainerId: Number(formData.personalTrainerId),
        };

        try {
          const token = sessionStorage.getItem("token");
          // await axios.put(`http://localhost:8080/user/updateUser/${user.id}`, formDataToSend);
          await UserService.updateUser(user.id, formDataToSend, token)
          toast.success("User Edited Successfully", { position: "top-center" });
          onSuccess();
        } catch (error) {
          toast.error("Error updating user.");
          console.error("Error updating user:", error);
        }
      }
    });
  };


  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card pt-3 px-4 shadow-lg w-50" style={{ marginTop: "-90px" }}>
        <h3 className="text-center">Edit User</h3>
        <form onSubmit={handleSubmit} className="mb-4">
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
            <label className="fw-bold">Height (cm):</label>
            <input type="number" className="form-control p-2" name="height" value={formData.height} onChange={handleChange} required />
          </div>
          <div className="form-group mb-2">
            <label className="fw-bold">Weight (kg):</label>
            <input type="number" className="form-control p-2" name="weight" value={formData.weight} onChange={handleChange} required />
          </div>
          <div className="form-group mb-2">
            <label className="fw-bold">Membership Type:</label>
            <select className="form-control p-2" name="membershipId" value={formData.membershipId} onChange={handleChange} required>
              <option value="">Select Membership</option>
              {membershipOptions.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group mb-2">
            <label className="fw-bold">Personal Trainer:</label>
            <select className="form-control p-2" name="personalTrainerId" value={formData.personalTrainerId} onChange={handleChange} required>
              <option value="">Select Trainer</option>
              {trainerOptions.map((trainer) => (
                <option key={trainer.value} value={trainer.value}>{trainer.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100 p-2">
            Edit User
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUserForm;
