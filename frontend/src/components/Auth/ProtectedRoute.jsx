import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = document.cookie.split("=")[1];
  const userRole = token ? JSON.parse(atob(token.split(".")[1])).role : null;

  if (!token || userRole !== role) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
