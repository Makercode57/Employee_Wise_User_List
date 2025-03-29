import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import UserForm from "../components/UserForm";

function EditUserPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUserData(response.data.data);
      } catch (err) {
        console.error("Error fetching user data", err);
      }
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (e, formData) => {
    e.preventDefault();
    try {
      await api.put(`/users/${id}`, formData);
      navigate("/users");
    } catch (err) {
      console.error("Error updating user", err);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        await api.delete(`/users/${id}`);
        navigate("/users");
      } catch (err) {
        console.error("Error deleting user", err);
      }
    }
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="edit-user-page">
      <h1>Edit User</h1>
      <UserForm
        initialData={userData}
        onSubmit={handleUpdate}
        buttonText="Update User"
      />
      <button onClick={handleDelete} className="delete-button">
        Delete User
      </button>
    </div>
  );
}

export default EditUserPage;
