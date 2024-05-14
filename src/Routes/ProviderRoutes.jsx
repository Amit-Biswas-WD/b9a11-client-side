import { useContext } from "react";
import { AuthContext } from "../Conponents/Context/AuthContextProvider";
import { NavLink } from "react-router-dom";

const ProviderRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user?._id) {
    return children;
  }

  return <NavLink to={`/login`} replace></NavLink>;
};

export default ProviderRoutes;
