import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyBooking from "../Pages/MyBooking/MyBooking";
import RoomPage from "../Pages/RoomPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/mybooking",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/roompage",
        element: <RoomPage></RoomPage>,
      },

      {
        path: "/registerpage",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/loginpage",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);

export default router;
