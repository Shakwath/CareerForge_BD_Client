import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/ErrorPage";
import SignIn from "../Pages/Authentication/SignIn";
import Signup from "../Pages/Authentication/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Components/Dashboard/Profile";
import PrivateRoute from "../Routes/PrivateRoute";

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
        path: "/updateprofile",
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },

    ],
  },

   {
        path: '*',
        element: <ErrorPage></ErrorPage>,
      },
]);

export default router;