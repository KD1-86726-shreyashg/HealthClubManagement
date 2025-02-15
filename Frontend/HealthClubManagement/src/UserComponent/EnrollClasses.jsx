// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const ClassCards = () => {
// //   const [classes, setClasses] = useState([]);

// //   useEffect(() => {
// //     axios.get("http://localhost:8080/classes/getClasses")
// //       .then(response => {
// //         setClasses(response.data);
// //       })
// //       .catch(error => {
// //         console.error("Error fetching class data:", error);
// //       });
// //   }, []);

// //   return (
// //     <div className="container mt-5 mb-5"> 
// //       <h1 style={{ textAlign: "center", marginBottom: 30 }}>Join Classes</h1>
// //       <div className="row g-4">
// //         {classes.map((classItem, index) => (
// //           <div key={index} className="col-md-4">
// //             <div className="card shadow-lg border-1 rounded">
// //               <div className="card-body text-center">
// //                 <h5 className="card-title fw-bold">{classItem.name}</h5>
// //                 <p className="card-text text-muted">{classItem.description}</p>
// //                 <p className="card-text"><strong>Trainer:</strong> {classItem.trainerName}</p>
// //                 <p className="card-text"><strong>Price:</strong> ₹{classItem.price}</p>
// //                 <button className="btn btn-primary w-25">Enroll</button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ClassCards;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ClassCards = () => {
//   const [classes, setClasses] = useState([]);
//   const userId = 7; // Hardcoded userId

//   useEffect(() => {
//     axios.get("http://localhost:8080/classes/getClasses")
//       .then(response => {
//         setClasses(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching class data:", error);
//       });
//   }, []);

//   const handleEnroll = (id) => {
//     // Send the classId as part of the request body in JSON format
//     const enrollmentData = { classId :id }; // Prepare the data in JSON format

//     axios.post(`http://localhost:8080/classes/enroll/${userId}`, enrollmentData, {
//       headers: {
//         'Content-Type': 'application/json', // Make sure the content type is JSON
//       }
//     })
//       .then(response => {
//         Swal.fire({
//           title: "Success!",
//           text: "You have successfully enrolled in the class.",
//           icon: "success",
//           confirmButtonText: "OK"
//         });
//       })
//       .catch(error => {
//         console.error("Error enrolling in class:", error);
//         Swal.fire({
//           title: "Error!",
//           text: "There was an error enrolling in the class. Please try again later.",
//           icon: "error",
//           confirmButtonText: "OK"
//         });
//       });
//   };

//   return (
//     <div className="container mt-5 mb-5"> 
//       <h1 style={{ textAlign: "center", marginBottom: 30 }}>Join Classes</h1>
//       <div className="row g-4">
//         {classes.map((classItem, index) => (
//           <div key={index} className="col-md-4">
//             <div className="card shadow-lg border-1 rounded">
//               <div className="card-body text-center">
//                 <h5 className="card-title fw-bold">{classItem.name}</h5>
//                 <p className="card-text text-muted">{classItem.description}</p>
//                 <p className="card-text"><strong>Trainer:</strong> {classItem.trainerName}</p>
//                 <p className="card-text"><strong>Price:</strong> ₹{classItem.price}</p>
//                 <button className="btn btn-primary w-25" onClick={() => handleEnroll(classItem.classId)}>Enroll</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClassCards;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ClassCards = () => {
//   const [classes, setClasses] = useState([]);
//   const userId = 1; // Hardcoded userId
  
//   useEffect(() => {
//     axios.get("http://localhost:8080/classes/getClasses")
//       .then(response => {
//         setClasses(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching class data:", error);
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to load classes. Please try again later.",
//           icon: "error",
//           confirmButtonText: "OK"
//         });
//       });
//   }, []);

//   const handleEnroll = (id) => {
//     // Send the classId inside a JSON object as part of the request body
//     const enrollmentData = { classId: id };  // Wrap classId in an object

//     axios.post(`http://localhost:8080/classes/enroll/${userId}`, enrollmentData, {
//       headers: {
//         'Content-Type': 'application/json', // Ensure Content-Type is set to application/json
//       }
//     })
//       .then(response => {
//         Swal.fire({
//           title: "Success!",
//           text: "You have successfully enrolled in the class.",
//           icon: "success",
//           confirmButtonText: "OK"
//         });
//       })
//       .catch(error => {
//         console.error("Error enrolling in class:", error);

//         // Additional error handling
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           console.error("Response Error:", error.response.data);
//           Swal.fire({
//             title: "Error!",
//             text: `There was an error enrolling in the class. Status: ${error.response.status}`,
//             icon: "error",
//             confirmButtonText: "OK"
//           });
//         } else if (error.request) {
//           // The request was made but no response was received
//           console.error("Request Error:", error.request);
//           Swal.fire({
//             title: "Error!",
//             text: "No response from the server. Please check your network.",
//             icon: "error",
//             confirmButtonText: "OK"
//           });
//         } else {
//           // Something else triggered the error
//           console.error("Error Message:", error.message);
//           Swal.fire({
//             title: "Error!",
//             text: "There was an error with your request. Please try again later.",
//             icon: "error",
//             confirmButtonText: "OK"
//           });
//         }
//       });
//   };

//   return (
//     <div className="container mt-5 mb-5">
//       <h1 style={{ textAlign: "center", marginBottom: 30 }}>Join Classes</h1>
//       <div className="row g-4">
//         {classes.map((classItem, index) => (
//           <div key={index} className="col-md-4">
//             <div className="card shadow-lg border-1 rounded">
//               <div className="card-body text-center">
//                 <h5 className="card-title fw-bold">{classItem.name}</h5>
//                 <p className="card-text text-muted">{classItem.description}</p>
//                 <p className="card-text"><strong>Trainer:</strong> {classItem.trainerName}</p>
//                 <p className="card-text"><strong>Price:</strong> ₹{classItem.price}</p>
//                 <button className="btn btn-primary w-25" onClick={() => handleEnroll(classItem.id)}>Enroll</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClassCards;




import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const ClassCards = () => {
  const [classes, setClasses] = useState([]);
  const userId = JSON.parse(sessionStorage.getItem("id")); // Hardcoded userId
  
  useEffect(() => {
    axios.get("http://localhost:8080/classes/getClasses")
      .then(response => {
        setClasses(response.data);
      })
      .catch(error => {
        console.error("Error fetching class data:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to load classes. Please try again later.",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
  }, []);

  const handleEnroll = (id) => {
    // In this solution, we send the classId as a query parameter in the URL
    const enrollmentUrl = `http://localhost:8080/classes/enroll/${userId}?classId=${id}`;

    axios.post(enrollmentUrl, {}, {
      headers: {
        'Content-Type': 'application/json', // Ensure Content-Type is set to application/json
      }
    })
      .then(response => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully enrolled in the class.",
          icon: "success",
          confirmButtonText: "OK"
        });
      })
      .catch(error => {
        console.error("Error enrolling in class:", error);

        // Additional error handling
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error("Response Error:", error.response.data);
          Swal.fire({
            title: "Error!",
            text: `There was an error enrolling in the class. Status: ${error.response.status}`,
            icon: "error",
            confirmButtonText: "OK"
          });
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Request Error:", error.request);
          Swal.fire({
            title: "Error!",
            text: "No response from the server. Please check your network.",
            icon: "error",
            confirmButtonText: "OK"
          });
        } else {
          // Something else triggered the error
          console.error("Error Message:", error.message);
          Swal.fire({
            title: "Error!",
            text: "There was an error with your request. Please try again later.",
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      });
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>Join Classes</h1>
      <div className="row g-4">
        {classes.map((classItem, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-lg border-1 rounded">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{classItem.name}</h5>
                <p className="card-text text-muted">{classItem.description}</p>
                <p className="card-text"><strong>Trainer:</strong> {classItem.trainerName}</p>
                <p className="card-text"><strong>Price:</strong> ₹{classItem.price}</p>
                <button className="btn btn-primary w-25" onClick={() => handleEnroll(classItem.id)}>Enroll</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassCards;


