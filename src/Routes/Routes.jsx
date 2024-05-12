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
        path: "/roomdetails/:id",
        element: <RoomDetailsPage></RoomDetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
