import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../Social/Social";
import { AuthContext } from "../../Conponents/Context/AuthContextProvider";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegisterPage = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    console.log(name, email, photo, password, confirmPassword);

    createUser(email, password)
      .then(() => {
        // console.log(result.user);
        event.target.reset();
        navigate(location?.state ? location?.state : "/");
        toast("Register Successfully!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200 py-8 max-w-7xl mx-auto z-0 mt-16">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegisterPage} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="photoUrl"
              name="photo"
              placeholder="Enter your photo"
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
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">ConfirmPassword</span>
            </label>
            <input
              type="confirmPassword"
              name="confirmPassword"
              placeholder="Enter your confirmPassword"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <Social></Social>
        <p className="text-center">
          Already have account? please
          <Link to="/login">
            <button className="btn btn-link">Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
