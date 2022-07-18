import React, { useRef } from "react";
import { Link } from "react-router-dom";
import NavbarButton from "./NavBar/NavbarButton";
import NavbarLinkList from "./NavBar/NavbarLinkList";
import NavbarToggle from "./NavBar/NavbarToggle";
import { toast } from "react-toastify";

const NavBar = () => {
  const menuRef = useRef();
  const isLoggedIn =
    JSON.parse(localStorage.getItem("isLoggedIn")) === true ? true : false;
  const navbarLinks = [
    { to: "/", title: "Home" },
    { to: "/events", title: "Events" },
    { to: "/about", title: "About Us" },
  ];

  const onLogout = (e) => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isLoggedIn");

      toast.success("Logout Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else {
      e.preventDefault();
    }
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dreamtechteam/image/upload/v1657935772/dreambinar-logo_xrye3d.png"
            className="mr-3 h-6 sm:h-9 rounded-md"
            alt="Flowbite Logo"
          />
          <span className="self-center text-gray-800 text-xl font-black font-sans whitespace-nowrap dark:text-white">
            Dream
            <span className="text-green-800 dark:text-white">binar</span>
          </span>
        </Link>
        <div className="flex">
          <div className="hidden justify-between items-center w-full md:mr-8 md:flex md:w-auto md:order-1">
            <NavbarLinkList data={navbarLinks} />
          </div>
          {isLoggedIn ? (
            <NavbarButton
              onClick={(e) => onLogout(e)}
              variant="failure"
              title={"Logout"}
              to="/login"
            />
          ) : (
            <NavbarButton to="/login" variant="primary" title={"Login"} />
          )}
          <NavbarToggle menuRef={menuRef} />
        </div>
        <div
          className="hidden justify-between items-center w-full md:hidden"
          ref={menuRef}
        >
          <NavbarLinkList data={navbarLinks} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
