import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { Outlet, Navigate } from "react-router-dom";

const FrontLayout = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default FrontLayout;
