import React, { useRef } from "react";
import { Link } from "react-router-dom";
import NavbarButton from "./NavBar/NavbarButton";
import NavbarLinkList from "./NavBar/NavbarLinkList";
import NavbarToggle from "./NavBar/NavbarToggle";

const NavBar = () => {
  const menuRef = useRef();

  const navbarLinks = [
    { to: "/", title: "Home" },
    { to: "/events", title: "Events" },
    { to: "/about", title: "About Us" },
  ];

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Dreambinar
          </span>
        </Link>
        <div className="flex">
          <div className="hidden justify-between items-center w-full md:mr-8 md:flex md:w-auto md:order-1">
            <NavbarLinkList data={navbarLinks} />
          </div>
          <NavbarButton variant="primary" title={"Login"} />
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
