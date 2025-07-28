// Protect routes for authenticated users only
import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/auth";

export default function PrivateRoute({ children }) {
  if (!getToken()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
