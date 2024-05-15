import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyBooking from "../Pages/MyBooking/MyBooking";
import RoomPage from "../Conponents/RoomPage/RoomPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ErrorPage from "./../Pages/ErrorPage/ErrorPage";
import RoomDetailsPage from "../Pages/RoomDetailsPage/RoomDetailsPage";
import DateUpdate from "../Pages/DateUpdate/DateUpdate";
import DateDetails from "../Pages/DateUpdate/DateDetails";
import PrivateRoute from "./PrivateRoute";
// import DateDetails from "../Pages/DateUpdate/DateDetails";

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
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/roompage",
        element: <RoomPage></RoomPage>,
      },
      {
        path: "/roomdetails/:id",
        element: <RoomDetailsPage></RoomDetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/dateupdate/:_id",
        element: <DateUpdate></DateUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params._id}`),
      },
      {
        path: "/datedetails/:id",
        element: <DateDetails></DateDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
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
