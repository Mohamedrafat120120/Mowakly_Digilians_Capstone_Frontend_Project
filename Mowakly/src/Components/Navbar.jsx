import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faSearch, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/navbar logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ disableActiveCases }) => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Right - Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="display-flex align-items-center justify-content-center w-40 "
          />
        </Link>
        {/* Middle - Links */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/cases"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-medium transition ${isActive && !disableActiveCases ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:text-black"}`
            }
          >
            تصفح القضايا
          </NavLink>
          <NavLink
            to="/lawyers"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-medium transition ${isActive ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:text-black"}`
            }
          >
            تصفح المحامين
          </NavLink>
        </div>
        {/* Left - Icons */}
        <div className="flex items-center gap-6 text-gray-500">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-xl cursor-pointer hover:text-blue-600 transition"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-xl cursor-pointer hover:text-blue-600 transition"
          />
          <FontAwesomeIcon
            icon={faBell}
            className="text-xl cursor-pointer hover:text-blue-600 transition"
          />
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-xl text-blue-600 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
