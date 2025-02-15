// import { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify"; // Import Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// const Rating = ({ userId = 1 }) => {
//   const [formData, setFormData] = useState({
//     stars: 0,
//     description: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleStarChange = (star) => {
//     setFormData({ ...formData, stars: star });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation: Check if stars are selected
//     if (formData.stars === 0) {
//       toast.error("Please select a rating (stars) before submitting.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       return;
//     }

//     // Validation: Check if description is provided
//     if (formData.description.trim() === "") {
//       toast.error("Please enter a description.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/rating/submit/${userId}`,
//         {
//           stars: formData.stars,
//           description: formData.description,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 201) {
//         setSubmitted(true);
//         toast.success("Rating submitted successfully!", {
//           position: "top-center",
//           autoClose: 3000,
//           onClose: () => {
//             setTimeout(() => {
//               window.location.reload();
//             }, 100);
//           },
//         });
//       } else {
//         console.error("Failed to submit rating");
//         toast.error("Error submitting rating. Please try again.", {
//           position: "top-center",
//           autoClose: 3000,
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting rating:", error);
//       toast.error("An error occurred while submitting your rating.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div className="container my-3 d-flex justify-content-center align-items-center">
//       <div
//         className="card shadow-lg border border-secondary rounded-3 px-4"
//         style={{ maxWidth: "500px" }}
//       >
//         <div className="card-body bg-light">
//           <h3 className="text-center mb-4 text-primary fw-bold">
//             Rating Form
//           </h3>
//           <form onSubmit={handleSubmit}>
//             {/* Rating (Stars) */}
//             <div className="mb-2">
//               <label className="form-label fw-semibold">Rating:</label>
//               <div>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     onClick={() => handleStarChange(star)}
//                     style={{
//                       fontSize: "28px",
//                       color: formData.stars >= star ? "#FFB400" : "#fff",
//                       cursor: "pointer",
//                       transition: "transform 0.2s ease-in-out, color 0.3s",
//                       textShadow:
//                         formData.stars >= star
//                           ? "0px 0px 4px rgba(255, 180, 0, 0.7)"
//                           : "0px 0px 4px rgba(0, 0, 0, 0.3)",
//                     }}
//                     className="mx-1"
//                   >
//                     <i className="fa-regular fa-star"></i>
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Description Textarea */}
//             <div className="mb-3">
//               <label htmlFor="description" className="form-label fw-semibold">
//                 Description:
//               </label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Enter your feedback"
//                 rows="4"
//                 className="form-control border border-secondary"
//                 // required
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="d-flex justify-content-center">
//               <button
//                 type="submit"
//                 className="btn btn-primary px-4 fw-bold shadow-sm"
//                 style={{ transition: "transform 0.2s ease-in-out" }}
//                 onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
//                 onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Toast Container for displaying notifications */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Rating;




import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"; // Import SweetAlert2 CSS

const Rating = ({ userId = JSON.parse(sessionStorage.getItem("id")) }) => {
  const [formData, setFormData] = useState({
    stars: 0,
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStarChange = (star) => {
    setFormData({ ...formData, stars: star });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if stars are selected
    if (formData.stars === 0) {
      Swal.fire("Error", "Please select a rating (stars) before submitting.", "error");
      return;
    }

    // Validation: Check if description is provided
    if (formData.description.trim() === "") {
      Swal.fire("Error", "Please enter a description.", "error");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/rating/submit/${userId}`,
        {
          stars: formData.stars,
          description: formData.description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        Swal.fire("Success", "Rating submitted successfully!", "success").then(() => {
          // Reset form data after successful submission
          setFormData({
            stars: 0,
            description: "",
          });
        });
      } else {
        console.error("Failed to submit rating");
        Swal.fire("Error", "Error submitting rating. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      Swal.fire("Error", "An error occurred while submitting your rating.", "error");
    }
  };

  return (
    <div className="container my-3 d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg border border-secondary rounded-3 px-4"
        style={{ maxWidth: "500px" }}
      >
        <div className="card-body bg-light">
          <h3 className="text-center mb-4 text-primary fw-bold">
            Rating Form
          </h3>
          <form onSubmit={handleSubmit}>
            {/* Rating (Stars) */}
            <div className="mb-2">
              <label className="form-label fw-semibold">Rating:</label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleStarChange(star)}
                    style={{
                      fontSize: "28px",
                      color: formData.stars >= star ? "#FFB400" : "#fff",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out, color 0.3s",
                      textShadow:
                        formData.stars >= star
                          ? "0px 0px 4px rgba(255, 180, 0, 0.7)"
                          : "0px 0px 4px rgba(0, 0, 0, 0.3)",
                    }}
                    className="mx-1"
                  >
                    <i className="fa-regular fa-star"></i>
                  </span>
                ))}
              </div>
            </div>

            {/* Description Textarea */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label fw-semibold">
                Description:
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter your Description"
                rows="4"
                className="form-control border border-secondary"
              ></textarea>
            </div>

            {/* Submit Button */}
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

export default Rating;
