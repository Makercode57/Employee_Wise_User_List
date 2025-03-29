import React from "react";
import UsersList from "../components/UsersList";
import "./UsersPage.css";

function UsersPage() {
  return (
    <div className="users-page">
      <h1 className="title">Users</h1>
      <div className="users-list">
        <UsersList />
      </div>
    </div>
  );
}

export default UsersPage;
