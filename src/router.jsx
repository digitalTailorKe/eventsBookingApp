import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import FrontLayout from "./layout/FrontLayout";
import {
  LandingPage,
  Login,
  Organizers,
  SuccessPage,
  SectorDetails,
  ProfilePage,
  ConfirmationPage,
  PrintingPage,
} from "./views/frontend";
import {
  Dashboard,
  OrganizersRegisterAtendees,
  ViewAttendeeDetails,
} from "./views/backend";
import NotFound from "./views/NotFound";
import PrintingBack from "./views/frontend/PrintingBack";

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
        path: "/success-page",
        element: <SuccessPage />,
      },
      {
        path: "/sector-details",
        element: <SectorDetails />,
      },
      {
        path: "/user-organizer",
        element: <Organizers />,
      },
      {
        path: "/auth-login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/confirmation/:id",
        element: <ConfirmationPage />,
      },
      {
        path: "/printing",
        element: <PrintingPage />,
      },
      {
        path: "/printing-back",
        element: <PrintingBack />,
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
