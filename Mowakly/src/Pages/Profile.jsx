import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSpecialtyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="min-h-screen bg-[#fafafa] flex flex-col font-sans"
      dir="rtl"
    >
      <Navbar disableActiveCases={true} />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-200 overflow-hidden">
          {/* Header Tabs */}
          <div className="flex justify-between items-center border-b border-gray-200 px-8 bg-white">
            <div className="text-xl font-bold text-gray-800 py-4 hidden md:block">
              حسابي
            </div>
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("personal")}
                className={`py-4 font-bold text-sm transition border-b-4 ${
                  activeTab === "personal"
                    ? "border-gray-800 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                البيانات الشخصية
              </button>
              <button
                onClick={() => setActiveTab("professional")}
                className={`py-4 font-bold text-sm transition border-b-4 ${
                  activeTab === "professional"
                    ? "border-gray-800 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                بيانات الموقع
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-12">
            {activeTab === "personal" && (
              <div className="flex flex-col-reverse md:flex-row justify-between gap-12">
                <form
                  className="flex-1 space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      الاسم الأول*
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-gray-400 text-right transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      اسم العائلة*
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-gray-400 text-right transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-gray-400 text-right transition bg-white"
                    />
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                        الجنس
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-gray-400 text-right transition bg-white"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                        تاريخ الميلاد
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-gray-400 text-right transition bg-white text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-4 px-12 rounded-lg transition duration-300">
                      حفظ
                    </button>
                  </div>
                </form>

                {/* Avatar area */}
                <div className="flex justify-center md:justify-end items-start md:pl-12">
                  <label className="w-40 h-40 bg-[#0070c0] rounded-full flex items-center justify-center text-white text-7xl shadow-lg relative overflow-hidden cursor-pointer hover:opacity-90 transition group">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faUser} className="mt-4" />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-bold text-white">
                        تغيير الصورة
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoChange}
                    />
                  </label>
                </div>
              </div>
            )}

            {activeTab === "professional" && (
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      التخصص*
                    </label>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsSpecialtyOpen(!isSpecialtyOpen)}
                        className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-gray-400 text-right transition bg-white flex justify-between items-center"
                      >
                        <span className={selectedSpecialty ? "text-gray-900" : "text-gray-400"}>
                          {selectedSpecialty || "اختر التخصص..."}
                        </span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-500"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {isSpecialtyOpen && (
                        <div className="absolute top-full mt-1 right-0 w-full bg-white border border-gray-100 rounded-lg shadow-lg py-2 flex flex-col text-sm text-gray-700 z-50">
                          {["قانون تجاري", "قانون جنائي", "قانون عائلي"].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setSelectedSpecialty(option);
                                setIsSpecialtyOpen(false);
                              }}
                              className="px-4 py-3 hover:bg-gray-50 transition w-full text-right"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      المسمي الوظيفي*
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-gray-400 text-right transition bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                    نبذة...
                  </label>
                  <textarea
                    rows="10"
                    className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-gray-400 text-right transition bg-white resize-y"
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-4">
                  <div className="flex flex-col gap-6 flex-1 max-w-sm ml-auto">
                    <div className="text-right">
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        نوع الحساب
                      </label>
                      <div className="border border-gray-300 rounded-md bg-white divide-y divide-gray-200">
                        <label className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50">
                          <span className="text-sm text-gray-700">
                            صاحب قضية
                          </span>
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded cursor-pointer"
                          />
                        </label>
                        <label className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50">
                          <span className="text-sm text-gray-700">
                            محامي مستقل
                          </span>
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded cursor-pointer"
                          />
                        </label>
                        <label className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50">
                          <span className="text-sm text-gray-700">
                            متاح للتوظيف
                          </span>
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded cursor-pointer"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-6 pt-12">
                  {/* <div className="flex items-center justify-center gap-3">
                    <label
                      className="text-sm font-bold text-gray-500 cursor-not-allowed"
                      htmlFor="verified"
                    >
                      حساب موثق
                    </label>
                    <input
                      type="checkbox"
                      id="verified"
                      checked={false} // Replace with your actual DB/state value (e.g., user.isVerified)
                      readOnly
                      disabled
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded cursor-not-allowed disabled:opacity-50"
                    />
                  </div> */}

                  <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-3 px-12 rounded-lg transition duration-300 w-full md:w-auto">
                    حفظ
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
