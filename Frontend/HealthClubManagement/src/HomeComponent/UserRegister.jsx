// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function UserRegister() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     age: "",
//     height: "",
//     weight: "",
//     gender: "",
//     membershipId: "",
//     personalTrainerId: "", // ID of selected trainer
//   });

//   const [trainerOptions, setTrainerOptions] = useState([]); // State for storing trainer data

//   const membershipOptions = [
//     { id: 1, name: "Monthly" },
//     { id: 4, name: "Quarterly" },
//     { id: 3, name: "Half-Yearly" },
//     { id: 2, name: "Yearly" },
//   ];

//   useEffect(() => {
//     // Fetching trainer data when the component is mounted
//     const fetchTrainers = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/trainer/trainerNames"); // Adjust the URL as needed
//         setTrainerOptions(response.data); // Assuming response.data is an array of trainer objects
//       } catch (error) {
//         console.error("Error fetching trainers:", error);
//         toast.error("Failed to fetch trainers.", { position: "top-center" });
//       }
//     };

//     fetchTrainers();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//       toast.error("All fields are required!", { position: "top-center" });
//       return false;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Passwords do not match!", { position: "top-center" });
//       return false;
//     }
//     if (!formData.age || isNaN(formData.age) || Number(formData.age) <= 0) {
//       toast.error("Valid age is required!", { position: "top-center" });
//       return false;
//     }
//     if (!formData.height || isNaN(formData.height) || Number(formData.height) <= 0) {
//       toast.error("Valid height is required!", { position: "top-center" });
//       return false;
//     }
//     if (!formData.weight || isNaN(formData.weight) || Number(formData.weight) <= 0) {
//       toast.error("Valid weight is required!", { position: "top-center" });
//       return false;
//     }
//     if (!formData.gender) {
//       toast.error("Please select a gender!", { position: "top-center" });
//       return false;
//     }
//     if (!formData.membershipId) {
//       toast.error("Please select a membership type!", { position: "top-center" });
//       return false;
//     }
//     if (!formData.personalTrainerId) {
//       toast.error("Please select a personal trainer!", { position: "top-center" });
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const userData = {
//       name: formData.name,
//       email: formData.email,
//       password: formData.password,
//       age: parseInt(formData.age, 10),
//       height: parseInt(formData.height, 10),
//       weight: parseInt(formData.weight, 10),
//       gender: formData.gender.toUpperCase(),
//       membershipId: parseInt(formData.membershipId, 10),
//       personalTrainerId: formData.personalTrainerId ? parseInt(formData.personalTrainerId, 10) : null, // Ensure it's a number (Long)
//     };

//     try {
//       const response = await axios.post("http://localhost:8080/user/addUser", userData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       toast.success("Registration successful!", { position: "top-center" });

//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         age: "",
//         height: "",
//         weight: "",
//         gender: "",
//         membershipId: "",
//         personalTrainerId: "",
//       });
//     } catch (error) {
//       console.error("Registration Error:", error);
//       toast.error(error.response?.data?.message || "Registration failed!", {
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <div className="container w-50 mb-3">
//       <ToastContainer />
//       <div className="card shadow-lg border-0">
//         <div className="card-header bg-primary text-white text-center">
//           <h4>User Registration</h4>
//         </div>

//         <div className="card-body p-4">
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label fw-semibold">Full Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter Your Full Name"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label fw-semibold">Email Address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Your Email"
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label fw-semibold">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter Your Password"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label fw-semibold">Confirm Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder="Confirm Your Password"
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-4">
//                 <label className="form-label fw-semibold">Age</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   placeholder="Enter Age"
//                 />
//               </div>
//               <div className="col-md-4">
//                 <label className="form-label fw-semibold">Height (cm)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="height"
//                   value={formData.height}
//                   onChange={handleChange}
//                   placeholder="Enter Height"
//                 />
//               </div>
//               <div className="col-md-4">
//                 <label className="form-label fw-semibold">Weight (kg)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="weight"
//                   value={formData.weight}
//                   onChange={handleChange}
//                   placeholder="Enter Weight"
//                 />
//               </div>
//             </div>

//             <div className="mb-3">
//               <label className="form-label fw-semibold">Gender</label>
//               <div className="d-flex gap-3">
//                 {["MALE", "FEMALE", "OTHER"].map((gender) => (
//                   <div className="form-check" key={gender}>
//                     <input
//                       type="radio"
//                       id={gender}
//                       name="gender"
//                       value={gender}
//                       className="form-check-input"
//                       onChange={handleChange}
//                     />
//                     <label htmlFor={gender} className="form-check-label">
//                       {gender.charAt(0) + gender.slice(1).toLowerCase()}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mb-3">
//               <label className="form-label fw-semibold">Membership Type</label>
//               <select
//                 className="form-select"
//                 name="membershipId"
//                 value={formData.membershipId}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Membership Type</option>
//                 {membershipOptions.map((option) => (
//                   <option key={option.id} value={option.id}>
//                     {option.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-3">
//               <label className="form-label fw-semibold">Personal Trainer</label>
//               <select
//                 className="form-select"
//                 name="personalTrainerId"
//                 value={formData.personalTrainerId}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Trainer</option>
//                 {trainerOptions.map((trainer) => (
//                   <option key={trainer.id} value={trainer.id}>
//                     {trainer.name} {/* Display trainer's name */}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <button type="submit" className="btn btn-primary btn-md">
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserRegister;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    membershipId: "",
    personalTrainerId: "", // ID of selected trainer
  });

  const [trainerOptions, setTrainerOptions] = useState([]); // State for storing trainer data

  const membershipOptions = [
    { id: 1, name: "Monthly" },
    { id: 4, name: "Quarterly" },
    { id: 3, name: "Half-Yearly" },
    { id: 2, name: "Yearly" },
  ];

  useEffect(() => {
    // Fetch trainer data
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/trainer/trainerNames");
        setTrainerOptions(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
        toast.error("Failed to fetch trainers.", { position: "top-center" });
      }
    };

    // Fetch membership data
    const fetchMemberships = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getMembershipType"); // Adjust the URL if needed
        setMembershipOptions(response.data); // ✅ Ensure dynamic membership data is stored
      } catch (error) {
        // console.error("Error fetching memberships:", error);
        // toast.error("Failed to fetch membership options.", { position: "top-center" });
      }
    };

    fetchTrainers();
    fetchMemberships();
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("All fields are required!", { position: "top-center" });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return false;
    }
    if (!formData.age || isNaN(formData.age) || Number(formData.age) <= 0) {
      toast.error("Valid age is required!", { position: "top-center" });
      return false;
    }
    if (!formData.height || isNaN(formData.height) || Number(formData.height) <= 0) {
      toast.error("Valid height is required!", { position: "top-center" });
      return false;
    }
    if (!formData.weight || isNaN(formData.weight) || Number(formData.weight) <= 0) {
      toast.error("Valid weight is required!", { position: "top-center" });
      return false;
    }
    if (!formData.gender) {
      toast.error("Please select a gender!", { position: "top-center" });
      return false;
    }
    if (!formData.membershipId) {
      toast.error("Please select a membership type!", { position: "top-center" });
      return false;
    }
    if (!formData.personalTrainerId) {
      toast.error("Please select a personal trainer!", { position: "top-center" });
      return false;
    }
    return true;
  };


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if (!validateForm()) return;

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      age: parseInt(formData.age, 10),
      height: parseInt(formData.height, 10),
      weight: parseInt(formData.weight, 10),
      gender: formData.gender.toUpperCase(),
      membershipId: parseInt(formData.membershipId, 10),
      personalTrainerId: formData.personalTrainerId ? parseInt(formData.personalTrainerId, 10) : null, // Ensure it's a number (Long)
    };

    try {
      const response = await axios.post("http://localhost:8080/auth/member-register", userData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Registration successful!", { position: "top-center" });

      await setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        height: "",
        weight: "",
        gender: "",
        membershipId: "",
        personalTrainerId: "",
      });
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error(error.response?.data?.message || "Registration failed!", {
        position: "top-center",
      });
    }
  };


  return (
    <div className="container w-50 mb-3">
      <ToastContainer />
      <div className="card shadow-lg border-0">
        <div className="card-header bg-primary text-white text-center">
          <h4>User Registration</h4>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Your Password"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label fw-semibold">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter Age"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Height (cm)</label>
                <input
                  type="number"
                  className="form-control"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Enter Height"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Weight (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Enter Weight"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Gender</label>
              <div className="d-flex gap-3">
                {["MALE", "FEMALE", "OTHER"].map((gender) => (
                  <div className="form-check" key={gender}>
                    <input
                      type="radio"
                      id={gender}
                      name="gender"
                      value={gender}
                      className="form-check-input"
                      onChange={handleChange}
                    />
                    <label htmlFor={gender} className="form-check-label">
                      {gender.charAt(0) + gender.slice(1).toLowerCase()}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Membership Type</label>
              <select
                className="form-select"
                name="membershipId"
                value={formData.membershipId}
                onChange={handleChange}
              >
                <option value="">Select Membership Type</option>
                {membershipOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name || option.type} {/*  Use correct property */}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Personal Trainer</label>
              <select
                className="form-select"
                name="personalTrainerId"
                value={formData.personalTrainerId}
                onChange={handleChange}
              >
                <option value="">Select Trainer</option>
                {trainerOptions.map((trainer) => (
                  <option key={trainer.id} value={trainer.id}>
                    {trainer.name} {/* Display trainer's name */}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-md">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;