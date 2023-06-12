import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import FrontLayout from "./layout/FrontLayout";
import { LandingPage, Login, Organizers } from "./views/frontend";
import {
  Dashboard,
  OrganizersRegisterAtendees,
  ViewAttendeeDetails,
} from "./views/backend";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
  {
    // FRONTEND ROUTES
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/user-organizer",
        element: <Organizers />,
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
      {
        path: "/user-organizer-register-atendees",
        element: <OrganizersRegisterAtendees />,
      },
      {
        path: "/view-attendee-details/:fullName",
        element: <ViewAttendeeDetails />,
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
