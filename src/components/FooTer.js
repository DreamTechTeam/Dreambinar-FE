import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooTer = () => {
  return (
    <div className="pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl container px-4">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <Link to="/" className="inline-flex items-center">
            <img
              src="https://res.cloudinary.com/dreamtechteam/image/upload/v1657935772/dreambinar-logo_xrye3d.png"
              alt="dreambinar-logo"
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-black font-sans tracking-wide text-gray-800 uppercase">
              Dreambinar
            </span>
          </Link>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Menu</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                >
                  Event
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Follow Us
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/dreamtechteam"
                  className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/dreamtechteam"
                  className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Support Us
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.buymeacoffee.com/DreamTechTeam"
                  className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy Me A Coffee
                </a>
              </li>
              <li>
                <a
                  href="https://www.patreon.com/DreamTechTeam"
                  className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  Patreon
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Our Partner
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://ummi.ac.id"
                  className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dreamtechteam/image/upload/v1658112095/logopartnerummi_of8nbd.png"
                    alt="logo-ummi"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-5 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2022 Dreamtech Team. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-2 sm:mt-0 text-2xl">
          <a
            href="https://github.com/DreamTechTeam"
            className="text-gray-500 transition-colors duration-300 hover:text-green-700"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooTer;
