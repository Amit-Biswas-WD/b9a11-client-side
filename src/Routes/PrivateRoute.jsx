import { useContext } from "react";
import { AuthContext } from "../Conponents/Context/AuthContextProvider";
import { NavLink, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return (
    <NavLink state={location.pathname} to="loginpage" replace={true}></NavLink>
  );
};

export default PrivateRoute;
