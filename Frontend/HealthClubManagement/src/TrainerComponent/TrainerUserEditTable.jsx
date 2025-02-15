import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditDietWorkoutForm from "./EditDietWorkoutForm";

const TrainerUserEditTable = () => {
  const trainerId = JSON.parse(sessionStorage.getItem("id"));
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/getTUser/${trainerId}`);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to fetch users data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleUpdateSuccess = () => {
    setSelectedUser(null);
    fetchUsers();
  };

  if (loading) {
    return <p className="text-center mt-5">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center mt-5 text-danger">{error}</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Users Table</h2>
      {selectedUser ? (
        <EditDietWorkoutForm user={selectedUser} onSuccess={handleUpdateSuccess} />
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Height</th>
                <th scope="col">Weight</th>
                <th scope="col">Membership</th>
                <th scope="col">Diet Plan</th>
                <th scope="col">Workout Plan</th>
                <th scope="col">Trainer Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="text-center">{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className="text-center">{user.gender}</td>
                    <td className="text-center">{user.age}</td>
                    <td className="text-center">{user.height}</td>
                    <td className="text-center">{user.weight}</td>
                    <td>{user.membershipType}</td>
                    <td>{user.dietPlan}</td>
                    <td>{user.workoutPlan}</td>
                    <td>{user.trainerName}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-warning btn-sm mx-1"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="text-center text-muted">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TrainerUserEditTable;
