import React from "react";
import Login from "../components/Login";
import'./LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
