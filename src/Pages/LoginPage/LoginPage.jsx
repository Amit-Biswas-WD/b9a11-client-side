import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../Social/Social";
import { AuthContext } from "../../Conponents/Context/AuthContextProvider";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginPage = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password)
    .then(() => {
      // console.log(res);
      event.target.reset();
      navigate(location?.state ? location?.state : "/");
      toast("Login Successfully!");
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200 max-w-7xl mx-auto">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLoginPage} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <Social></Social>
        <p className="text-center">
          New here? please
          <Link to="/register">
            <button className="btn btn-link">Register</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
