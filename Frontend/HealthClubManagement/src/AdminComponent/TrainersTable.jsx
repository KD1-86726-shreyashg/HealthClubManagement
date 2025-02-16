// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import EditTrainerForm from "./EditTrainerForm";

// const TrainersTable = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedTrainer, setSelectedTrainer] = useState(null);

//   // Fetch trainers data from the API
//   const fetchTrainers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/trainer/getTrainers");
//       setTrainers(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError("Failed to fetch trainers data.");
//       setLoading(false);
//       console.error("Error fetching trainers data:", error);
//     }
//   };

//   useEffect(() => {
//           $(document).ready(function () {
//             $("#trainer-data").DataTable();
//           });
//         });
        
//   useEffect(() => {
//     fetchTrainers();
//   }, []);

//   // Handle delete action
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this trainer?")) {
//       try {
//         await axios.put(`http://localhost:8080/trainer/deleteTrainer/${Number(id)}`);
//         toast.success("Trainer Deleted Successfully", { position: "top-center" });
//         fetchTrainers();
//       } catch (error) {
//         console.error("Error deleting Trainer:", error);
//         toast.error("Failed to delete trainer.", { position: "top-center" });
//       }
//     }
//   };

//   // Handle edit action
//   const handleEdit = (trainer) => {
//     setSelectedTrainer(trainer);
//   };

//   const handleCloseEditForm = () => {
//     setSelectedTrainer(null);
//   };

//   const handleUpdateTrainersTable = () => {
//     fetchTrainers(); // Reload trainers after update
//   };

//   if (loading) {
//     return <p>Loading trainers...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Trainers Table</h2>
//       {selectedTrainer && (
//         <EditTrainerForm
//           trainer={selectedTrainer}
//           onClose={handleCloseEditForm}
//           onUpdate={handleUpdateTrainersTable}
//         />
//       )}

//       <div className="table-responsive mt-4">
//         <table className="table table-bordered" id="trainer-data">
//           <thead className="thead-light">
//             <tr>
//               <th scope="col">Sr No</th>
//               <th scope="col">Name</th>
//               <th scope="col">Email</th>
//               <th scope="col">Age</th>
//               <th scope="col">Gender</th>
//               <th scope="col">Experience</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {trainers.length > 0 ? (
//               trainers.map((trainer, index) => (
//                 <tr key={trainer.id}>
//                   <td className="text-center">{index + 1}</td>
//                   <td>{trainer.name}</td>
//                   <td>{trainer.email}</td>
//                   <td className="text-center">{trainer.age}</td>
//                   <td className="text-center">{trainer.gender}</td>
//                   <td className="text-center">{trainer.experience}</td>
//                   <td className="text-center">
//                     <button
//                       className="btn btn-warning btn-sm mx-1"
//                       onClick={() => handleEdit(trainer)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm mx-1"
//                       onClick={() => handleDelete(trainer.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="text-center text-muted">
//                   No trainers found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TrainersTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import EditTrainerForm from "./EditTrainerForm";

const TrainersTable = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Fetch trainers data from the API
  const fetchTrainers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/trainer/getTrainers");
      setTrainers(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch trainers data.");
      setLoading(false);
      console.error("Error fetching trainers data:", error);
    }
  };

  useEffect(() => {
    $(document).ready(function () {
      $("#trainer-data").DataTable();
    });
  });

  useEffect(() => {
    fetchTrainers();
  }, []);

  // Handle delete action with SweetAlert confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this trainer's information.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.put(`http://localhost:8080/trainer/deleteTrainer/${Number(id)}`);
          toast.success("Trainer Deleted Successfully", { position: "top-center" });
          fetchTrainers(); // Refresh trainer list after delete
        } catch (error) {
          console.error("Error deleting Trainer:", error);
          toast.error("Failed to delete trainer.", { position: "top-center" });
        }
      }
    });
  };

  // Handle edit action
  const handleEdit = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleCloseEditForm = () => {
    setSelectedTrainer(null);
  };

  const handleUpdateTrainersTable = () => {
    fetchTrainers(); // Reload trainers after update
  };

  if (loading) {
    return <p>Loading trainers...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container-fluid my-5">
      <h2 className="text-center my-2">Trainers Table</h2>
      {selectedTrainer && (
        <EditTrainerForm
          trainer={selectedTrainer}
          onClose={handleCloseEditForm}
          onUpdate={handleUpdateTrainersTable}
        />
      )}

      <div className="table-responsive mt-4">
        <table className="table table-bordered" id="trainer-data">
          <thead className="thead-light">
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Experience</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {trainers.length > 0 ? (
              trainers.map((trainer, index) => (
                <tr key={trainer.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{trainer.name}</td>
                  <td>{trainer.email}</td>
                  <td className="text-center">{trainer.age}</td>
                  <td className="text-center">{trainer.gender}</td>
                  <td className="text-center">{trainer.experience}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-warning btn-sm mx-1"
                      onClick={() => handleEdit(trainer)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => handleDelete(trainer.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-muted">
                  No trainers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainersTable;

