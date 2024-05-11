import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Conponents/Context/AuthContextProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navItem = (
    <>
      <li className="md:mr-2 font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/mybooking">My Bookings</Link>
      </li>
      <li>
        <Link to="/roompage">Rooms Page</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => console.log("User logout successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 font-serif max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <div className="">
          <img
            className="w-20 hover:bg-white bg-white border-none"
            src="https://i.ibb.co/XFXJsW1/Harmony-Suites-Final-Logo-Gold-2-150x150.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex ml-20">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="w-10 mr-4">
              <img
                data-toggle="tooltip"
                data-placement="top"
                title={user.displayName || "user name not found"}
                className="rounded-full"
                src={user?.photoURL || "https://i.ibb.co/fYM31Hv/download.png"}
              />
            </div>
            <a onClick={handleLogout} className="btn btn-sm">
              Sign Out
            </a>
          </>
        ) : (
          <Link to="/registerpage">
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
