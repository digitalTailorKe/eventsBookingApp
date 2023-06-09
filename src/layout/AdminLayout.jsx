import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Outlet, Navigate } from "react-router-dom";

export default function AdminLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/auth-login" />;
  }

  return (
    <div className="">
      <Outlet />
    </div>
  );
}
