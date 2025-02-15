// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const EditDietWorkoutForm = ({ user, onSuccess }) => {
//   const [dietPlans, setDietPlans] = useState([]);
//   const [workoutPlans, setWorkoutPlans] = useState([]);
  
//   const [selectedDietPlan, setSelectedDietPlan] = useState(user.dietPlanId || "");
//   const [selectedWorkoutPlan, setSelectedWorkoutPlan] = useState(user.workoutPlanId || "");

//   // Fetch diet and workout plans dynamically from the backend
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         // Fetch diet plans
//         const dietResponse = await axios.get("http://localhost:8080/diet/getDeitPlanNames");
//         setDietPlans(dietResponse.data);

//         // Fetch workout plans
//         const workoutResponse = await axios.get("http://localhost:8080/workout/getWorkoutPlanNames");
//         setWorkoutPlans(workoutResponse.data);
//       } catch (error) {
//         console.error("Error fetching plans:", error);
//         toast.error("Failed to fetch plans.", { position: "top-center" });
//       }
//     };

//     fetchPlans();
//   }, []);

//   // Function to update user plans
//   const updateUserPlans = async (userId = 1, dietPlanId, workoutPlanId) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/user/updatePlan/${userId}`, {
//         dietPlanId: dietPlanId,
//         workoutPlanId: workoutPlanId,
//       });

//       if (response.status === 200) {
//         toast.success("User plans updated successfully");
//         onSuccess(); // Close form and refresh table
//       } else {
//         toast.error("Failed to update user plans");
//       }
//     } catch (error) {
//       console.error("Error updating user plans:", error);
//       toast.error("Error updating user plans");
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedDietPlan || !selectedWorkoutPlan) {
//       toast.error("Please select both diet and workout plans.");
//       return;
//     }
//     await updateUserPlans(user.id, selectedDietPlan, selectedWorkoutPlan);
//   };

//   return (
//     <div className="container p-3" style={{ maxWidth: "400px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
//       <h5 className="text-center mb-3">Edit Plans</h5>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-2">
//           <label className="form-label">Diet Plan</label>
//           <select
//             className="form-select"
//             value={selectedDietPlan}
//             onChange={(e) => setSelectedDietPlan(Number(e.target.value))}
//             required
//           >
//             <option value="">Select Diet Plan</option>
//             {dietPlans.map((plan) => (
//               <option key={plan.id} value={plan.id}>{plan.dietPlanType}</option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-2">
//           <label className="form-label">Workout Plan</label>
//           <select
//             className="form-select"
//             value={selectedWorkoutPlan}
//             onChange={(e) => setSelectedWorkoutPlan(Number(e.target.value))}
//             required
//           >
//             <option value="">Select Workout Plan</option>
//             {workoutPlans.map((plan) => (
//               <option key={plan.id} value={plan.id}>{plan.workoutPlanType}</option>
//             ))}
//           </select>
//         </div>
//         <div className="d-flex justify-content-between mt-3">
//           <button type="submit" className="btn btn-primary btn-sm">Update</button>
//           <button type="button" className="btn btn-secondary btn-sm" onClick={onSuccess}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditDietWorkoutForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2

const EditDietWorkoutForm = ({ user, onSuccess }) => {
  const [dietPlans, setDietPlans] = useState([]);
  const [workoutPlans, setWorkoutPlans] = useState([]);
  
  const [selectedDietPlan, setSelectedDietPlan] = useState(user.dietPlanId || "");
  const [selectedWorkoutPlan, setSelectedWorkoutPlan] = useState(user.workoutPlanId || "");

  // Fetch diet and workout plans dynamically from the backend
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Fetch diet plans
        const dietResponse = await axios.get("http://localhost:8080/diet/getDeitPlanNames");
        setDietPlans(dietResponse.data);

        // Fetch workout plans
        const workoutResponse = await axios.get("http://localhost:8080/workout/getWorkoutPlanNames");
        setWorkoutPlans(workoutResponse.data);
      } catch (error) {
        console.error("Error fetching plans:", error);
        Swal.fire("Error", "Failed to fetch plans.", "error"); // Show error message using SweetAlert
      }
    };

    fetchPlans();
  }, []);

  // Function to update user plans
  const updateUserPlans = async (userId, dietPlanId, workoutPlanId) => {
    try {
      const response = await axios.put(`http://localhost:8080/user/updatePlan/${userId}`, {
        dietPlanId: dietPlanId,
        workoutPlanId: workoutPlanId,
      });

      if (response.status === 200) {
        Swal.fire("Success", "User plans updated successfully", "success"); // Success message
        onSuccess(); // Close form and refresh table
      } else {
        Swal.fire("Error", "Failed to update user plans", "error"); // Error message
      }
    } catch (error) {
      console.error("Error updating user plans:", error);
      Swal.fire("Error", "Error updating user plans", "error"); // Error message
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDietPlan || !selectedWorkoutPlan) {
      Swal.fire("Warning", "Please select both diet and workout plans.", "warning"); // Warning if selections are missing
      return;
    }

    // Show confirmation dialog before submitting the update
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You are about to update the user's diet and workout plans.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      await updateUserPlans(user.id, selectedDietPlan, selectedWorkoutPlan);
    }
  };

  return (
    <div className="container p-3" style={{ maxWidth: "400px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
      <h5 className="text-center mb-3">Edit Plans</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Diet Plan</label>
          <select
            className="form-select"
            value={selectedDietPlan}
            onChange={(e) => setSelectedDietPlan(Number(e.target.value))}
            required
          >
            <option value="">Select Diet Plan</option>
            {dietPlans.map((plan) => (
              <option key={plan.id} value={plan.id}>{plan.dietPlanType}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="form-label">Workout Plan</label>
          <select
            className="form-select"
            value={selectedWorkoutPlan}
            onChange={(e) => setSelectedWorkoutPlan(Number(e.target.value))}
            required
          >
            <option value="">Select Workout Plan</option>
            {workoutPlans.map((plan) => (
              <option key={plan.id} value={plan.id}>{plan.workoutPlanType}</option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <button type="submit" className="btn btn-primary btn-sm">Update</button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onSuccess}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditDietWorkoutForm;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2"; // Import SweetAlert2

// const EditDietWorkoutForm = ({ user, onSuccess }) => {
//   const [dietPlans, setDietPlans] = useState([]);
//   const [workoutPlans, setWorkoutPlans] = useState([]);
  
//   const [selectedDietPlan, setSelectedDietPlan] = useState(user.dietPlanId || "");
//   const [selectedWorkoutPlan, setSelectedWorkoutPlan] = useState(user.workoutPlanId || "");

//   // Fetch diet and workout plans dynamically from the backend
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         // Fetch diet plans
//         const dietResponse = await axios.get("http://localhost:8080/diet/getDietPlanNames");
//         if (dietResponse.data && Array.isArray(dietResponse.data)) {
//           setDietPlans(dietResponse.data);
//         } else {
//           console.error("Unexpected diet plans response:", dietResponse.data);
//           Swal.fire("Error", "Invalid diet plans data received.", "error");
//         }

//         // Fetch workout plans
//         const workoutResponse = await axios.get("http://localhost:8080/workout/getWorkoutPlanNames");
//         if (workoutResponse.data && Array.isArray(workoutResponse.data)) {
//           setWorkoutPlans(workoutResponse.data);
//         } else {
//           console.error("Unexpected workout plans response:", workoutResponse.data);
//           Swal.fire("Error", "Invalid workout plans data received.", "error");
//         }
//       } catch (error) {
//         console.error("Error fetching plans:", error);
//         Swal.fire("Error", "Failed to fetch plans from the server.", "error"); // Show error message using SweetAlert
//       }
//     };

//     fetchPlans();
//   }, []);

//   // Function to update user plans
//   const updateUserPlans = async () => {
//     try {
//       const response = await axios.put(`http://localhost:8080/user/updatePlan/${user.id}`, {
//         dietPlanId: selectedDietPlan,
//         workoutPlanId: selectedWorkoutPlan,
//       });

//       if (response.status === 200) {
//         Swal.fire("Success", "User plans updated successfully", "success"); // Success message
//         onSuccess(); // Close form and refresh table
//       } else {
//         Swal.fire("Error", "Failed to update user plans", "error"); // Error message
//       }
//     } catch (error) {
//       console.error("Error updating user plans:", error);
//       Swal.fire("Error", "Error updating user plans", "error"); // Error message
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedDietPlan || !selectedWorkoutPlan) {
//       Swal.fire("Warning", "Please select both diet and workout plans.", "warning"); // Warning if selections are missing
//       return;
//     }

//     // Show confirmation dialog before submitting the update
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You are about to update the user's diet and workout plans.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, update it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       await updateUserPlans();
//     }
//   };

//   return (
//     <div className="container p-3" style={{ maxWidth: "400px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
//       <h5 className="text-center mb-3">Edit Plans</h5>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-2">
//           <label className="form-label">Diet Plan</label>
//           <select
//             className="form-select"
//             value={selectedDietPlan}
//             onChange={(e) => setSelectedDietPlan(Number(e.target.value))}
//             required
//           >
//             <option value="">Select Diet Plan</option>
//             {dietPlans.length > 0 ? (
//               dietPlans.map((plan) => (
//                 <option key={plan.id} value={plan.id}>{plan.dietPlanType}</option>
//               ))
//             ) : (
//               <option disabled>Loading diet plans...</option>
//             )}
//           </select>
//         </div>
//         <div className="mb-2">
//           <label className="form-label">Workout Plan</label>
//           <select
//             className="form-select"
//             value={selectedWorkoutPlan}
//             onChange={(e) => setSelectedWorkoutPlan(Number(e.target.value))}
//             required
//           >
//             <option value="">Select Workout Plan</option>
//             {workoutPlans.length > 0 ? (
//               workoutPlans.map((plan) => (
//                 <option key={plan.id} value={plan.id}>{plan.workoutPlanType}</option>
//               ))
//             ) : (
//               <option disabled>Loading workout plans...</option>
//             )}
//           </select>
//         </div>
//         <div className="d-flex justify-content-between mt-3">
//           <button type="submit" className="btn btn-primary btn-sm">Update</button>
//           <button type="button" className="btn btn-secondary btn-sm" onClick={onSuccess}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditDietWorkoutForm;
