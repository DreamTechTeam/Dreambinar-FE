import { Disclosure } from "@headlessui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdFolderOpen, MdHome, MdOutlineLogout, MdOutlineSpaceDashboard
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Sidebar.module.css";

const sidebarContent = [
  {
    url: "/dashboard",
    icon: <MdOutlineSpaceDashboard className="text-2xl hidden md:block group-hover:text-white" />,
    text: "Dashboard"
  },
  {
    url: "/dash/events",
    icon: <MdFolderOpen className="text-2xl hidden md:block group-hover:text-white" />,
    text: "Events"
  },
  {
    url: "/dash/profile",
    icon: <CgProfile className="text-2xl hidden md:block group-hover:text-white" />,
    text: "Profile"
  },
]

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

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="mt-4 absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group lg:hidden">
          <GiHamburgerMenu
            className="block lg:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 overflow-y-auto">
          <div className="flex flex-col justify-start item-center">
            <div className="pb-4 border-b border-gray-100 w-full">
              <div className="flex items-center gap-2 justify-center">
                <img
                  src="https://res.cloudinary.com/dreamtechteam/image/upload/v1657935772/dreambinar-logo_xrye3d.png"
                  className="h-6 sm:h-9 rounded-md"
                  alt="Dreambinar Logo"
                />
                <h1 className="text-lg md:text-xl font-black font-sans text-green-900 w-fit">
                  Dashboard
                </h1>
              </div>
            </div>
            {/* View Site  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <Link to="/" className="flex mb-2 justify-center md:justify-start items-center gap-4 md:pl-5 p-2 rounded-md group cursor-pointer m-auto hover:bg-green-900 hover:shadow-lg">
                <MdHome className="text-2xl text-green-800 group-hover:text-white hidden md:block" />
                <h3 className="text-base font-black font-sans text-gray-800 group-hover:text-white">
                  View Site
                </h3>
              </Link>
            </div>
            {/* Config */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              {sidebarContent.map((content, i) => (
                <NavLink
                key={i}
                to={content.url}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.side_active} flex mb-2 justify-center md:justify-start items-center gap-4 md:pl-5 p-2 rounded-md group cursor-pointer m-auto`
                    : `${styles.side_inactive} flex mb-2 justify-center md:justify-start items-center gap-4 md:pl-5 p-2 rounded-md group cursor-pointer m-auto`
                  }
                >
                  {content.icon}
                  <h3 className="text-base font-black font-sans text-gray-800  group-hover:text-white">{content.text}</h3>
                </NavLink>
              ))}
            </div>
            {/* logout */}
            <div className=" my-4">
              <button className="flex mb-2 justify-center md:justify-start items-center gap-4 md:pl-5 p-2 rounded-md group cursor-pointer m-auto border border-gray-200 hover:bg-red-800 hover:shadow-lg w-full" onClick={onLogout}>
                <MdOutlineLogout className="text-2xl text-red-800 group-hover:text-white hidden md:block" />
                <h3 className="text-base font-black font-sans text-red-800 group-hover:text-white ">
                  Logout
                </h3>
              </button>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
