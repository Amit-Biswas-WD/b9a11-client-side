import { useContext } from "react";
import { AuthContext } from "../../Conponents/Context/AuthContextProvider";

const Social = () => {
  const { googleLogin, gitHubLogin } = useContext(AuthContext);
  return (
    <div className="flex justify-around">
      <button
        onClick={() => googleLogin()}
        className="btn btn-primary btn-sm btn-outline"
      >
        Google
      </button>
      <button
        onClick={() => gitHubLogin()}
        className="btn btn-primary btn-sm btn-outline"
      >
        GitHub
      </button>
    </div>
  );
};

export default Social;
