import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/navbar logo.png";
import emailIcon from "../assets/images/icons/email 1.svg";
import notificationIcon from "../assets/images/icons/notification (3) 1.svg";
import searchIcon from "../assets/images/icons/search-interface-symbol 1.svg";
import userIcon from "../assets/images/icons/user 11.svg";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faUser, faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faChartPie, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ disableActiveCases }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
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
        <div className="flex items-center gap-6">
          <img
            src={searchIcon}
            alt="Search"
            className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
          />
          <img
            src={emailIcon}
            alt="Email"
            className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
          />
          <img
            src={notificationIcon}
            alt="Notifications"
            className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
          />
          
          {/* User Icon with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <img
              src={userIcon}
              alt="User"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-10 left-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 flex flex-col text-sm text-gray-700">
                {/* <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition w-full text-right">
                  <span>تغير الوضع</span>
                  <FontAwesomeIcon icon={faMoon} className="text-gray-400" />
                </button> */}
                <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition w-full text-right">
                  <span>لوحة التحكم</span>
                  <FontAwesomeIcon icon={faChartPie} className="text-gray-400" />
                </button>
                <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition w-full text-right">
                  <span>حسابي الشخصي</span>
                  <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                </button>
                <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition w-full text-right">
                  <span>الرصيد</span>
                  <FontAwesomeIcon icon={faCreditCard} className="text-gray-400" />
                </button>
                <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition w-full text-right border-t border-gray-100 mt-1 pt-3">
                  <span>تسجيل الخروج</span>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-gray-400" />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
