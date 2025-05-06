import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../../../hooks/useAuth";
import image from "../../../../public/Harmony/Harmony.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [showTooltip, setShowTooltip] = useState(false);

  const items = [
    <NavLink
      className={({ isActive }) => (isActive ? "text-green-500" : "text-black")}
      key="/"
      to="/"
    >
      Home
    </NavLink>,

    <NavLink
      className={({ isActive }) => (isActive ? "text-green-500" : "text-black")}
      key="/room"
      to="/room"
    >
      Rooms
    </NavLink>,

    user && (
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-500" : "text-black"
        }
        key="/myBooking"
        to="/myBooking"
      >
        My Bookings
      </NavLink>
    ),
  ];

  const handleLogout = () => {
    logOut()
      .then(() => console.log("User logout successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="container mx-auto">
        {/* Desktop Navbar */}
        <div className="hidden px-8 bg-gray-200 fixed top-0 left-0 w-full z-50 lg:flex justify-between items-center gap-14 text-black font-semibold">
          <div className="flex gap-14">
            <Link to={`/`}>
              <img className="w-20" src={image} alt="" />
            </Link>
            <ul className="flex items-center gap-8 text-lg my-4">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {user?.email ? (
              <div className="flex items-center space-x-3">
                {/* Profile Image with Tooltip */}
                <div
                  className="relative cursor-pointer"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co.com/5QBXv09/Screenshot-4.png"
                    }
                    alt="User Profile"
                    className="w-14 h-14 rounded-full border-2 border-white"
                  />

                  {/* Tooltip (Name & Email) */}
                  {showTooltip && (
                    <div className="fixed top-18 left-280 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-3 py-2 rounded shadow-lg z-50">
                      <p>{user.displayName || "No Name"}</p>
                      <p>{user.email}</p>
                    </div>
                  )}
                </div>

                {/* Log Out Button */}
                <button
                  onClick={handleLogout}
                  className="border-2 border-red-500 text-red-500 px-4 py-2 rounded"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div>
                <NavLink
                  to="/login"
                  className="border-2 border-green-500 text-green-500  px-4 py-2 rounded"
                >
                  Sign In
                </NavLink>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className="lg:hidden flex relative text-[#499DEC]">
          <Link to={`/`}>
            <img
              className="fixed z-50 w-28 h-28 mb-2"
              src={image}
              alt=""
            />
          </Link>
          <div className="relative justify-end">
            {/* Menu Button */}
            <div
              className="cursor-pointer text-amber-600 text-4xl font-semibold fixed top-12 right-4 z-50"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <IoCloseSharp className="w-10 h-10" />
              ) : (
                <GiHamburgerMenu className="w-10 h-10" />
              )}
            </div>

            {/* Sidebar */}
            <ul
              className={`bg-[#499DEC] text-white text-xl font-semibold pl-8 fixed top-0 h-full w-[30%] py-4 transition-all duration-700 ${
                open ? "right-0" : "-right-[520px]"
              } z-40`}
            >
              {items.map((item, index) => (
                <li key={index} className="hover:text-gray-200 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
