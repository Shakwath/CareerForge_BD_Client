import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/ErrorPage";
import ErrorPage from "../Pages/ErrorPage";
import SignIn from "../Pages/Authentication/SignIn";
import Signup from "../Pages/Authentication/SignUp";
import Profile from "../Components/Dashboard/Profile";
import Dashboard from "../Components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  // Dashboard Route
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },

  // Error Route
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;