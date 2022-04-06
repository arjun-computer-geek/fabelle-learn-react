import { useUser } from "context/userContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = () => {
    const {
      state: { isAuthenticated },
    } = useUser();


  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};
