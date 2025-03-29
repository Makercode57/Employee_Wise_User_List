import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users?page=1");
        setUsers(response.data.data);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="rounded-full w-24 h-24 mb-4"
            />
            <p className="font-semibold text-xl">{user.first_name} {user.last_name}</p>
            <button
              onClick={() => navigate(`/edit/${user.id}`)}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;
