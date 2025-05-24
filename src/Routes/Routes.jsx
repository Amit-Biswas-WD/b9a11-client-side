import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import MyBooking from "../Pages/MyBooking/MyBooking";
import RoomPage from "../Conponents/RoomPage/RoomPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ErrorPage from "./../Pages/ErrorPage/ErrorPage";
import RoomDetailsPage from "../Pages/RoomDetailsPage/RoomDetailsPage";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/DateUpdate/Update";

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
        path: "/myBooking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/room",
        element: <RoomPage></RoomPage>,
      },
      {
        path: "/roomDetails/:id",
        element: <RoomDetailsPage></RoomDetailsPage>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/services/${params.id}`,  {
              withCredentials: "include",
            }
          ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/booking/${params.id}`,
            {
              withCredentials: "include",
            }
          ),
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);

export default router;
