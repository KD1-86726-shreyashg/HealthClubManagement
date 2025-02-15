// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Internal CSS for additional styling
// const cardStyles = {
//   margin: "30px auto",
//   maxWidth: "500px",
//   padding: "20px",
//   boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.1)",
//   borderRadius: "16px",
//   backgroundColor: "#fff",
//   transition: "transform 0.3s, box-shadow 0.3s",
// };

// const iconStyles = {
//   width: "90px",
//   height: "90px",
//   borderRadius: "50%",
//   backgroundColor: "#007bff",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "50px",
//   color: "#fff",
//   margin: "0 auto 20px auto", // Center and add space below
//   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
// };

// const nameStyles = {
//   textAlign: "center",
//   fontSize: "1.8rem",
//   fontWeight: "600",
//   cursor: "pointer",
//   transition: "color 0.3s, transform 0.3s",
//   letterSpacing: "0.5px",
//   color: "#333",
// };

// const cardHoverEffect = {
//   "&:hover": {
//     transform: "scale(1.05)",
//     boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//   },
// };

// const UserProfileCard = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const userId = 1; // Hardcoded userId for demo, replace with dynamic ID

//   useEffect(() => {
//     // Fetch the user data from the backend (adjust the URL as needed)
//     axios.get(`http://localhost:8080/user/profile/${userId}`)
//       .then(response => {
//         console.log("API Response:", response.data); // Log the full response data
//         if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
//           setUserData(response.data[0]); // Assuming the first item in the array is the user data
//         } else {
//           console.error("Error: Response data is empty or not an array");
//           Swal.fire({
//             title: "Error!",
//             text: "No data received from the server.",
//             icon: "error",
//             confirmButtonText: "OK"
//           });
//         }
//         setLoading(false); // Data fetched, set loading to false
//       })
//       .catch(error => {
//         console.error("Error fetching user data:", error);
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to load user profile. Please try again later.",
//           icon: "error",
//           confirmButtonText: "OK"
//         });
//         setLoading(false); // Set loading to false on error
//       });
//   }, [userId]);

//   // If loading, display a loading message
//   if (loading) {
//     return <div className="container">Loading...</div>; // Loading state
//   }

//   // Check if userData exists and is properly structured
//   if (!userData) {
//     return <div className="container">No user data available</div>; // If no data is available
//   }

//   return (
//     <div className="container">
//       <div className="card" style={cardStyles} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}> {/* Hover effect on card */}
//         <div className="card-body">
//           {/* User Icon */}
//           <div style={iconStyles}>
//             <i className="fa fa-user" style={{ fontSize: "50px" }}></i> {/* Font Awesome icon */}
//           </div>

//           {/* User Name with Hover Effect */}
//           <h3
//             style={nameStyles}
//             onMouseEnter={(e) => e.target.style.color = "#007bff"}
//             onMouseLeave={(e) => e.target.style.color = "#333"}
//             onMouseDown={(e) => e.target.style.transform = "scale(0.98)"}  // Scale on click
//             onMouseUp={(e) => e.target.style.transform = "scale(1)"}      // Reset scale
//           >
//             {userData.name || "N/A"}
//           </h3>

//           {/* User Info */}
//           <div className="mb-3">
//             <strong>Email: </strong>
//             {userData.email || "N/A"}
//           </div>
//           <div className="mb-3">
//             <strong>Age: </strong>
//             {userData.age ? userData.age : "N/A"}
//           </div>
//           <div className="mb-3">
//             <strong>Height: </strong>
//             {userData.height ? `${userData.height.toFixed(2)} cm` : "N/A"}
//           </div>
//           <div className="mb-3">
//             <strong>Weight: </strong>
//             {userData.weight ? `${userData.weight.toFixed(2)} kg` : "N/A"}
//           </div>
//           <div className="mb-3">
//             <strong>Membership Type: </strong>
//             {userData.membershipType || "N/A"}
//           </div>
//           <div className="mb-3">
//             <strong>Trainer Name: </strong>
//             {userData.trainerName || "N/A"}
//           </div>
//           <div className="mb-3">
//             <strong>Workout Plan: </strong>
//             {userData.workoutPlan || "N/A"}
//           </div>
//           <div className="mb-3">
//             <strong>Diet Plan: </strong>
//             {userData.dietPlan || "N/A"}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfileCard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Internal CSS for additional styling
// const cardStyles = {
//   margin: "30px auto",
//   maxWidth: "500px",
//   padding: "20px",
//   boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.1)",
//   borderRadius: "16px",
//   backgroundColor: "#fff",
//   transition: "transform 0.3s, box-shadow 0.3s",
// };

// const iconStyles = {
//   width: "90px",
//   height: "90px",
//   borderRadius: "50%",
//   backgroundColor: "#007bff",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "50px",
//   color: "#fff",
//   margin: "0 auto 20px auto", // Center and add space below
//   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
// };

// const nameStyles = {
//   textAlign: "center",
//   fontSize: "1.8rem",
//   fontWeight: "600",
//   cursor: "pointer",
//   transition: "color 0.3s, transform 0.3s",
//   letterSpacing: "0.5px",
//   color: "#333",
// };

// const cardHoverEffect = {
//   "&:hover": {
//     transform: "scale(1.05)",
//     boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//   },
// };

// const UserProfileCard = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false); // Flag to switch between view and edit mode
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//     height: "",
//     weight: "",
//     membershipType: "",
//     trainerName: "",
//   });
//   const [membershipOptions, setMembershipOptions] = useState([]);
//   const [trainerOptions, setTrainerOptions] = useState([]);

//   const userId = 1; // Hardcoded userId for demo, replace with dynamic ID

//   useEffect(() => {
//     // Fetch the user data from the backend (adjust the URL as needed)
//     axios
//       .get(`http://localhost:8080/user/profile/${userId}`)
//       .then((response) => {
//         if (
//           response &&
//           response.data &&
//           Array.isArray(response.data) &&
//           response.data.length > 0
//         ) {
//           setUserData(response.data[0]); // Assuming the first item in the array is the user data
//           setFormData(response.data[0]); // Pre-fill form with the current user data
//         } else {
//           Swal.fire({
//             title: "Error!",
//             text: "No data received from the server.",
//             icon: "error",
//             confirmButtonText: "OK",
//           });
//         }
//         setLoading(false); // Data fetched, set loading to false
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to load user profile. Please try again later.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//         setLoading(false); // Set loading to false on error
//       });

//     // Fetch membership types dynamically (assuming this endpoint returns them)
//     axios
//       .get("http://localhost:8080/getMembershipType")
//       .then((response) => {
//         setMembershipOptions(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching membership types:", error);
//       });

//     // Fetch trainer options dynamically (assuming this endpoint returns them)
//     axios
//       .get("http://localhost:8080/trainer/trainerNames")
//       .then((response) => {
//         setTrainerOptions(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching trainer options:", error);
//       });
//   }, [userId]);

//   // If loading, display a loading message
//   if (loading) {
//     return <div className="container">Loading...</div>;
//   }

//   // Check if userData exists and is properly structured
//   if (!userData) {
//     return <div className="container">No user data available</div>;
//   }

//   const handleEditClick = () => {
//     setIsEditing(true);
//     setFormData({
//       name: userData.name || "",
//       email: userData.email || "",
//       password: "",
//       age: userData.age || "",
//       height: userData.height || "",
//       weight: userData.weight || "",
//       membershipType: userData.membershipType || "",
//       trainerName: userData.trainerName || "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Send updated data to backend with userId as path variable
//     axios
//       .put(`http://localhost:8080/user/updateUser/${userId}`, formData)
//       .then((response) => {
//         Swal.fire({
//           title: "Success!",
//           text: "Profile updated successfully.",
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//         setIsEditing(false); // Hide form and show profile
//         setUserData(formData); // Update user data with the new data
//       })
//       .catch((error) => {
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to update profile. Please try again.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       });
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false); // Hide form and show profile
//   };

//   return (
//     <div className="container">
//       <div className="card" style={cardStyles}>
//         <div className="card-body">
//           {/* User Icon */}
//           <div style={iconStyles}>
//             <i className="fa fa-user" style={{ fontSize: "50px" }}></i>{" "}
//             {/* Font Awesome icon */}
//           </div>

//           {/* User Name with Hover Effect */}
//           {!isEditing ? (
//             <h3
//               style={nameStyles}
//               onMouseEnter={(e) => (e.target.style.color = "#007bff")}
//               onMouseLeave={(e) => (e.target.style.color = "#333")}
//             >
//               {userData.name || "N/A"}
//             </h3>
//           ) : (
//             <input
//               type="text"
//               className="form-control mb-3"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//           )}

//           {/* User Info */}
//           {!isEditing ? (
//             <>
//               <div className="mb-3">
//                 <strong>Email: </strong>
//                 {userData.email || "N/A"}
//               </div>
//               <div className="mb-3">
//                 <strong>Age: </strong>
//                 {userData.age || "N/A"}
//               </div>
//               <div className="mb-3">
//                 <strong>Height: </strong>
//                 {userData.height ? `${userData.height.toFixed(2)} cm` : "N/A"}
//               </div>
//               <div className="mb-3">
//                 <strong>Weight: </strong>
//                 {userData.weight ? `${userData.weight.toFixed(2)} kg` : "N/A"}
//               </div>
//               <div className="mb-3">
//                 <strong>Membership Type: </strong>
//                 {userData.membershipType || "N/A"}
//               </div>
//               <div className="mb-3">
//                 <strong>Trainer Name: </strong>
//                 {userData.trainerName || "N/A"}
//               </div>
//               <div className="mb-3">
//                 <strong>Workout Plan: </strong>
//                 {userData.workoutPlan || "N/A"}
//               </div>
//               <div className="mb-3">
//                 <strong>Diet Plan: </strong>
//                 {userData.dietPlan || "N/A"}
//               </div>
//             </>
//           ) : (
//             <form onSubmit={handleFormSubmit}>
//               <div className="mb-3">
//                 <label>Age</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label>Height (cm)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="height"
//                   value={formData.height}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label>Weight (kg)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="weight"
//                   value={formData.weight}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label>Membership Type</label>
//                 <select
//                   className="form-control"
//                   name="membershipType"
//                   value={formData.membershipType}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Membership Type</option>
//                   {membershipOptions.map((option) => (
//                     <option key={option.id} value={option.id}>
//                       {option.type}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label>Trainer Name</label>
//                 <select
//                   className="form-control"
//                   name="trainerName"
//                   value={formData.trainerName}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Trainer</option>
//                   {trainerOptions.map((option) => (
//                     <option key={option.id} value={option.id}>
//                       {option.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="d-flex">
//                 <button type="submit" className="btn btn-success">
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary ml-2"
//                   onClick={handleCancelEdit}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           )}

//           {!isEditing && (
//             <button className="btn btn-primary mt-3" onClick={handleEditClick}>
//               Edit Profile
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfileCard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

// Internal CSS for additional styling
const cardStyles = {
  margin: "30px auto",
  maxWidth: "500px",
  padding: "20px",
  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  backgroundColor: "#fff",
  transition: "transform 0.3s, box-shadow 0.3s",
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
  margin: "0 auto 20px auto", // Center and add space below
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
};

const nameStyles = {
  textAlign: "center",
  fontSize: "1.8rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "color 0.3s, transform 0.3s",
  letterSpacing: "0.5px",
  color: "#333",
};

const UserProfileCard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // Flag to switch between view and edit mode
  const [formData, setFormData] = useState({
   
    name: "",
    email: "",
    age: "",
    height: "",
    weight: "",
    membership: "", // Expecting Long ID
    personalTrainerId: "" // Expecting Long ID
  });
  const [membershipOptions, setMembershipOptions] = useState([]);
  const [trainerOptions, setTrainerOptions] = useState([]);

  const userId = JSON.parse(sessionStorage.getItem("id")); // Hardcoded userId for demo, replace with dynamic ID

  useEffect(() => {
    // Fetch the user data from the backend (adjust the URL as needed)
    axios
      .get(`http://localhost:8080/user/profile/${userId}`)
      .then((response) => {
        if (
          response &&
          response.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          setUserData(response.data[0]); // Assuming the first item in the array is the user data
          setFormData(response.data[0]); // Pre-fill form with the current user data
        } else {
          Swal.fire({
            title: "Error!",
            text: "No data received from the server.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
        setLoading(false); // Data fetched, set loading to false
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to load user profile. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
        setLoading(false); // Set loading to false on error
      });

    // Fetch membership types dynamically (assuming this endpoint returns them)
    axios
      .get("http://localhost:8080/getMembershipType")
      .then((response) => {
        setMembershipOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching membership types:", error);
      });

    // Fetch trainer options dynamically (assuming this endpoint returns them)
    axios
      .get("http://localhost:8080/trainer/trainerNames")
      .then((response) => {
        setTrainerOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching trainer options:", error);
      });
  }, [userId]);

  // If loading, display a loading message
  if (loading) {
    return <div className="container">Loading...</div>;
  }

  // Check if userData exists and is properly structured
  if (!userData) {
    return <div className="container">No user data available</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({
      name: userData.name || "",
      email: userData.email || "",
      age: userData.age || "",
      height: userData.height || "",
      weight: userData.weight || "",
      membership: userData.membership || "",
      personalTrainerId: userData.personalTrainerId || ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const updatedData = {
      ...formData,
      age: parseInt(formData.age, 10),
      height: parseFloat(formData.height),
      weight: parseFloat(formData.weight),
      membership: parseInt(formData.membership, 10),
      personalTrainerId: parseInt(formData.personalTrainerId, 10)
    };
  
    const userId = 1;
    axios.put(`http://localhost:8080/user/updateUser/${userId}`, updatedData)
      .then(() => {
        Swal.fire("Success", "User profile updated successfully!", "success");
        setIsEditing(false);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with an error code
          console.error("Backend error:", error.response.data);
          Swal.fire("Error", `Failed to update User profile. ${error.response.data.message}`, "error");
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response from backend:", error.request);
          Swal.fire("Error", "No response from the server. Please try again later.", "error");
        } else {
          // Something went wrong in setting up the request
          console.error("Error in request setup:", error.message);
          Swal.fire("Error", "An unexpected error occurred.", "error");
        }
      });
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // Hide form and show profile
  };

  return (
    <div className="container">
      <div className="card" style={cardStyles}>
        <div className="card-body">
          {/* User Icon */}
          <div style={iconStyles}>
            <i className="fa fa-user" style={{ fontSize: "50px" }}></i>
          </div>

          {/* User Name with Hover Effect */}
          {!isEditing ? (
            <h3
              style={nameStyles}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              {userData.name || "N/A"}
            </h3>
          ) : (
              <>
            <span className="fw-semibold text-dark">Name</span>
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="name"
                />
                </>
          )}

          {/* User Info */}
          {!isEditing ? (
            <>
              <div className="mb-3">
                <span>Email: </span>
                {userData.email || "N/A"}
              </div>
              <div className="mb-3">
                <strong>Age: </strong>
                {userData.age || "N/A"}
              </div>
              <div className="mb-3">
                <strong>Height: </strong>
                {userData.height ? `${userData.height.toFixed(2)} cm` : "N/A"}
              </div>
              <div className="mb-3">
                <strong>Weight: </strong>
                {userData.weight ? `${userData.weight.toFixed(2)} kg` : "N/A"}
              </div>
              <div className="mb-3">
                <strong>Membership Type: </strong>
                {userData.membershipType || "N/A"}
              </div>
              <div className="mb-3">
                <strong>Trainer Name: </strong>
                {userData.trainerName || "N/A"}
              </div>
              <div className="mb-3">
                <strong>Workout Plan: </strong>
                {userData.workoutPlan || "N/A"}
              </div>
              <div className="mb-3">
                <strong>Diet Plan: </strong>
                {userData.dietPlan || "N/A"}
              </div>
            </>
          ) : (
            <form onSubmit={handleFormSubmit} autoComplete="on">
              <div className="mb-3">
                <label htmlFor="age" className="fw-semibold">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  autoComplete="age"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="height" className="fw-semibold">Height (cm)</label>
                <input
                  type="number"
                  className="form-control"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  autoComplete="height"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="weight" className="fw-semibold">Weight (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  autoComplete="weight"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="membershipType" className="fw-semibold">Membership Type</label>
                <select
                  className="form-control"
                  id="membershipType"
                  name="membership"
                  value={formData.membership}
                  onChange={handleInputChange}
                  autoComplete="membership"
                >
                  <option value="">Select Membership Type</option>
                  {membershipOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="trainerName" className="fw-semibold">Trainer Name</label>
                <select
                  className="form-control"
                  id="trainerName"
                  name="personalTrainerId"
                  value={formData.personalTrainerId}
                  onChange={handleInputChange}
                  autoComplete="trainer"
                >
                  <option value="">Select Trainer</option>
                  {trainerOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                />
              </div>
              <div className="d-flex">
                <button type="submit" className="btn btn-success mx-1">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-2"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {!isEditing && (
            <button className="btn btn-primary mt-3" onClick={handleEditClick}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

