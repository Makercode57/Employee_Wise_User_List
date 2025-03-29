import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import EditUserPage from "./pages/EditUserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/edit/:id" element={<EditUserPage />} />
    </Routes>
  );
}
export default App;