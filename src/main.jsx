import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthContextProvider from "./Conponents/Context/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="text-serif m-4">
    <React.StrictMode>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </React.StrictMode>
  </div>
);
