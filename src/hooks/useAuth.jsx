import { useContext } from "react";
import { AuthContext } from "../Conponents/Context/AuthContextProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
