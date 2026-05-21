import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/navbar logo.png";
import emailIcon from "../assets/images/icons/email 1.svg";
import notificationIcon from "../assets/images/icons/notification (3) 1.svg";
import searchIcon from "../assets/images/icons/search-interface-symbol 1.svg";
import userIcon from "../assets/images/icons/user 11.svg";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCreditCard, faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faChartPie,
  faArrowRightFromBracket,
  faBars,
  faTimes,
  faThLarge,
  faScaleBalanced,
  faFileContract,
  faUserShield,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ disableActiveCases, isGuest = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const messageRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
      if (messageRef.current && !messageRef.current.contains(event.target)) {
        setIsMessageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 relative z-[40]" dir="rtl">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Right - Burger & Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="text-gray-600 hover:text-black transition p-2"
              aria-label="Open Menu"
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-32 md:w-40"
              />
            </Link>
          </div>

          {/* Middle - Links (Hidden on small screens) */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Left - Auth Buttons or Icons */}
          {isGuest ? (
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className="px-6 py-2 text-sm border border-gray-300 font-medium rounded-md hover:bg-gray-50 transition">
                تسجيل الدخول
              </Link>
              <Link to="/register" className="px-6 py-2 text-sm bg-[#333] text-white font-medium rounded-md hover:bg-black transition">
                ابدأ
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4 md:gap-6">
              <img
                src={searchIcon}
                alt="Search"
                className="hidden md:block w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
              />

              {/* Message Icon with Dropdown */}
              <div className="relative" ref={messageRef}>
                <img
                  src={emailIcon}
                  alt="Email"
                  className="hidden md:block w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
                  onClick={() => {
                    setIsMessageOpen(!isMessageOpen);
                    setIsNotificationOpen(false);
                    setIsDropdownOpen(false);
                  }}
                />
                {isMessageOpen && (
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 rounded-lg shadow-lg py-2 flex flex-col text-sm text-gray-700 z-50">
                    <div className="px-4 py-3 border-b border-gray-50 font-bold text-right text-gray-800">الرسائل</div>
                    <div className="px-4 py-12 text-center text-gray-400 text-xs font-medium">لا توجد رسائل جديدة</div>
                    <Link to="/messages" className="px-4 py-3 text-center text-blue-600 hover:bg-gray-50 font-bold border-t border-gray-50 mt-2 transition" onClick={() => setIsMessageOpen(false)}>عرض كل الرسائل</Link>
                  </div>
                )}
              </div>

              {/* Notification Icon with Dropdown */}
              <div className="relative" ref={notificationRef}>
                <img
                  src={notificationIcon}
                  alt="Notifications"
                  className="hidden md:block w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
                  onClick={() => {
                    setIsNotificationOpen(!isNotificationOpen);
                    setIsMessageOpen(false);
                    setIsDropdownOpen(false);
                  }}
                />
                {isNotificationOpen && (
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 rounded-lg shadow-lg py-2 flex flex-col text-sm text-gray-700 z-50">
                    <div className="px-4 py-3 border-b border-gray-50 font-bold text-right text-gray-800">الإشعارات</div>
                    <div className="px-4 py-12 text-center text-gray-400 text-xs font-medium">لا توجد إشعارات جديدة</div>
                    <Link to="/notifications" className="px-4 py-3 text-center text-blue-600 hover:bg-gray-50 font-bold border-t border-gray-50 mt-2 transition" onClick={() => setIsNotificationOpen(false)}>عرض كل الإشعارات</Link>
                  </div>
                )}
              </div>

              {/* User Icon with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <img
                  src={userIcon}
                  alt="User"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                    setIsMessageOpen(false);
                    setIsNotificationOpen(false);
                  }}
                />

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-10 left-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 flex flex-col text-sm text-gray-700 z-50">
                    <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition w-full text-right">
                      <span>لوحة التحكم</span>
                      <FontAwesomeIcon icon={faChartPie} className="text-gray-400" />
                    </button>
                    <Link to="/profile" className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition w-full text-right">
                      <span>حسابي الشخصي</span>
                      <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                    </Link >
                    <Link to="/subscriptions" className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition w-full text-right">
                      <span>الاشتراكات</span>
                      <FontAwesomeIcon icon={faCreditCard} className="text-gray-400" />
                    </Link>
                    <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition w-full text-right border-t border-gray-100 mt-1 pt-3">
                      <span>تسجيل الخروج</span>
                      <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-gray-400" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Slide-out Drawer (RTL aligned, opens from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        dir="rtl"
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-100">
          <img src={logo} alt="Logo" className="w-28" />
          <button onClick={() => setIsDrawerOpen(false)} className="text-gray-400 hover:text-gray-700 transition p-2">
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          </button>
        </div>

        <div className="flex flex-col py-6 px-4 gap-2 overflow-y-auto">
          <Link to="/" className="md:hidden flex items-center justify-start gap-4 px-4 py-3 hover:bg-gray-50 rounded-xl transition text-right group" onClick={() => setIsDrawerOpen(false)}>
            <FontAwesomeIcon icon={faThLarge} className="text-gray-400 group-hover:text-slate-800 text-lg w-6" />
            <span className="font-bold text-gray-600 group-hover:text-slate-800">الرئيسية</span>
          </Link>
          <Link to="/lawyers" className="md:hidden flex items-center justify-start gap-4 px-4 py-3 hover:bg-gray-50 rounded-xl transition text-right group" onClick={() => setIsDrawerOpen(false)}>
            <FontAwesomeIcon icon={faScaleBalanced} className="text-gray-400 group-hover:text-slate-800 text-lg w-6" />
            <span className="font-bold text-gray-600 group-hover:text-slate-800">المحامون</span>
          </Link>
          <Link to="/cases" className="md:hidden flex items-center justify-start gap-4 px-4 py-3 hover:bg-gray-50 rounded-xl transition text-right group" onClick={() => setIsDrawerOpen(false)}>
            <FontAwesomeIcon icon={faFileContract} className="text-gray-400 group-hover:text-slate-800 text-lg w-6" />
            <span className="font-bold text-gray-600 group-hover:text-slate-800">القضايا</span>
          </Link>
          <Link to="/verification" className="flex items-center justify-start gap-4 px-4 py-3 hover:bg-gray-50 rounded-xl transition text-right group" onClick={() => setIsDrawerOpen(false)}>
            <FontAwesomeIcon icon={faUserShield} className="text-gray-400 group-hover:text-slate-800 text-lg w-6" />
            <span className="font-bold text-gray-600 group-hover:text-slate-800">التحقق من الهوية</span>
          </Link>
          <Link to="/messages" className="md:hidden flex items-center justify-start gap-4 px-4 py-3 hover:bg-gray-50 rounded-xl transition text-right group" onClick={() => setIsDrawerOpen(false)}>
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 group-hover:text-slate-800 text-lg w-6" />
            <span className="font-bold text-gray-600 group-hover:text-slate-800">الرسائل</span>
          </Link>
          <Link to="/notifications" className="md:hidden flex items-center justify-start gap-4 px-4 py-3 hover:bg-gray-50 rounded-xl transition text-right group" onClick={() => setIsDrawerOpen(false)}>
            <FontAwesomeIcon icon={faBell} className="text-gray-400 group-hover:text-slate-800 text-lg w-6" />
            <span className="font-bold text-gray-600 group-hover:text-slate-800">الإشعارات</span>
          </Link>
          <Link to="/support" className="flex items-center justify-start gap-4 px-4 py-3 hover:bg-gray-50 rounded-xl transition text-right group" onClick={() => setIsDrawerOpen(false)}>
            <FontAwesomeIcon icon={faHeadset} className="text-gray-400 group-hover:text-slate-800 text-lg w-6" />
            <span className="font-bold text-gray-600 group-hover:text-slate-800">الدعم</span>
          </Link>
        </div>

        {/* Auth Buttons for Small/Medium Screens in Drawer */}
        {isGuest && (
          <div className="md:hidden flex flex-col px-4 py-4 gap-3 border-t border-gray-100 mt-auto mb-6">
            <Link to="/login" className="text-center px-4 py-3 text-sm border border-gray-300 font-bold rounded-lg hover:bg-gray-50 transition text-gray-700" onClick={() => setIsDrawerOpen(false)}>
              تسجيل الدخول
            </Link>
            <Link to="/register" className="text-center px-4 py-3 text-sm bg-[#333] text-white font-bold rounded-lg hover:bg-black transition" onClick={() => setIsDrawerOpen(false)}>
              ابدأ
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
