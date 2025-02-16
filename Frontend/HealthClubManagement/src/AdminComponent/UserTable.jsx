import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import EditUserForm from "./EditUserForm";
import Swal from "sweetalert2";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    $(document).ready(function () {
      $("#user-data").DataTable();
    });
  });

  // Fetch users data from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/user/getActiveUsers"
      );
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch users data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle delete action
  const handleDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.put(
              `http://localhost:8080/user/deleteUser/${Number(id)}`
            );
          

            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "The user has been deleted.",
              icon: "success",
            });

            setTimeout(fetchUsers, 500); // Refresh the user list after deletion
          } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Error deleting user", { position: "top-center" });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "The user was not deleted.",
            icon: "error",
          });
        }
      });
  };

  // Handle edit action (Opens the form)
  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  // Close the form and refresh users
  const handleUpdateSuccess = () => {
    setSelectedUser(null);
    fetchUsers();
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container-fluid my-5">
      <h2 className="text-center my-2">Users Table</h2>
      {selectedUser ? (
        <EditUserForm user={selectedUser} onSuccess={handleUpdateSuccess} />
      ) : (
        <div className="table-responsive">
          <table
            className="table table-bordered table-hover table-striped"
            id="user-data"
          >
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
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-warning btn-sm mx-1"
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm mx-1"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                      </div>
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

export default UsersTable;
