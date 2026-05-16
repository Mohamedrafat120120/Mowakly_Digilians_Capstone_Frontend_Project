import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/navbar logo.png";
const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Right - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="display-flex align-items-center justify-content-center w-40 " />
        </div>
        {/* Middle - Links */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="px-4 py-2 text-gray-600 hover:text-black transition"
          >
            تصفح القضايا
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-medium"
          >
            تصفح المحامين
          </a>
        </div>
        {/* Left - Icons */}
        <div className="flex items-center gap-6 text-gray-500">
          <FontAwesomeIcon
            icon={faUser}
            className="text-xl text-blue-600 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faBell}
            className="text-xl cursor-pointer hover:text-blue-600 transition"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-xl cursor-pointer hover:text-blue-600 transition"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-xl cursor-pointer hover:text-blue-600 transition"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
