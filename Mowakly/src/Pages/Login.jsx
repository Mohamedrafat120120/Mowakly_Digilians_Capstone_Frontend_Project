import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import logo from '../assets/images/navbar logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const GuestNavbar = () => (
  <nav className="w-full bg-white border-b border-gray-200 relative z-50">
    <div className="container mx-auto flex items-center justify-between px-4 py-2">
      {/* Right - Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="w-40" />
      </Link>
      {/* Middle - Links */}
      <div className="flex items-center gap-4 text-sm font-medium">
        <Link to="/cases" className="text-gray-600 hover:text-black">تصفح القضايا</Link>
        <Link to="/lawyers" className="text-gray-600 hover:text-black">تصفح المحامين</Link>
      </div>
      {/* Left - Auth Buttons */}
      <div className="flex items-center gap-4">
        <Link to="/login" className="px-6 py-2 text-sm border border-gray-300 font-medium rounded-md hover:bg-gray-50 transition">
          تسجيل الدخول
        </Link>
        <Link to="/register" className="px-6 py-2 text-sm bg-[#333] text-white font-medium rounded-md hover:bg-black transition">
          ابدأ
        </Link>
      </div>
    </div>
  </nav>
);

const Login = () => {
  const [role, setRole] = useState('client'); // 'client' or 'lawyer'

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans" dir="rtl">
      <GuestNavbar />

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-16 flex flex-col items-center">
        
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4 text-yellow-500">
            <FontAwesomeIcon icon={faScaleBalanced} className="text-5xl" />
          </div>
          <h1 className="text-4xl font-bold mb-4">أهلاً بعودتك</h1>
          <p className="text-gray-600 text-sm">
            سجل دخول لحسابك في موكلي.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 mb-12">
          
          {/* Toggle Tab */}
          <div className="flex justify-center mb-10 mt-2">
            <div className="flex bg-gray-100 rounded-lg p-1 w-full max-w-xs">
              <button 
                onClick={() => setRole('client')}
                className={`flex-1 flex flex-col items-center justify-center py-2 rounded-md transition duration-200 ${role === 'client' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <FontAwesomeIcon icon={faUser} className={`text-xl mb-1 ${role === 'client' ? 'text-blue-500' : 'text-gray-400'}`} />
                <span className="font-bold text-sm">مستخدم</span>
              </button>
              
              <button 
                onClick={() => setRole('lawyer')}
                className={`flex-1 flex flex-col items-center justify-center py-2 rounded-md transition duration-200 ${role === 'lawyer' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <FontAwesomeIcon icon={faScaleBalanced} className={`text-xl mb-1 ${role === 'lawyer' ? 'text-gray-700' : 'text-gray-400'}`} />
                <span className="font-bold text-sm">محامي</span>
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 text-right">البريد الالكتروني</label>
              <input type="email" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 text-right">الرقم السري</label>
              <input type="password" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
            </div>

            <div className="pt-4 pb-2 text-center flex justify-center w-full">
              <button type="submit" className="w-[80%] py-3 border border-yellow-400 text-yellow-500 font-bold rounded-md hover:bg-yellow-50 transition text-sm">
                تسجيل الدخول
              </button>
            </div>

            <div className="text-center text-xs font-bold text-gray-500 pt-2">
              <span>ليس لدي حساب بالفعل؟ </span>
              <Link to="/register" className="text-yellow-500 hover:underline">إنشاء حساب</Link>
            </div>

          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
