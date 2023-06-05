import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import FrontLayout from "./layout/FrontLayout";
import { LandingPage, Login } from "./views/frontend";
import { Dashboard } from "./views/backend";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
  {
    // FRONTEND ROUTES
    path: "/",
    element: <FrontLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <Navigate to="/" />,
      // },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth-login",
        element: <Login />,
      },
    ],
  },
  {
    // BACKEND ROUTES
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard to="/dashboard" />,
      },
    ],
  },
  {
    // Link to the 404 page
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
