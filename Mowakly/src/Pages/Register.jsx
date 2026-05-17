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

const ScanIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7V4h3M20 7V4h-3M4 17v3h3M20 17v3h-3" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9v.01" />
  </svg>
);

const ImageUploadBox = ({ label }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2 text-right">{label}</label>
      <label className="w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition relative overflow-hidden bg-white">
        {preview ? (
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center">
            <ScanIcon />
            <span className="text-[10px] text-gray-400 mt-2 font-medium">اختر صورة أو التقطها</span>
          </div>
        )}
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

const Register = () => {
  const [role, setRole] = useState('client'); // 'client' or 'lawyer'

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans" dir="rtl">
      <GuestNavbar />

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-12 flex flex-col items-center">
        
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="inline-block px-8 py-2 border border-yellow-400 text-yellow-500 font-medium rounded-md mb-6">
            إنشاء حساب
          </div>
          <div className="flex justify-center mb-2 text-yellow-500">
            <FontAwesomeIcon icon={faScaleBalanced} className="text-5xl" />
          </div>
          <h1 className="text-4xl font-bold mb-4">إنشاء حساب</h1>
          <p className="text-gray-600 text-sm">
            انضم إلى سوق الخدمات القانونية<br />الرائد في مصر.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 mb-12 relative">
          <div className="absolute top-8 right-8 text-xl font-bold text-gray-800">أنا...</div>
          
          {/* Toggle */}
          <div className="flex justify-center gap-6 mb-8 mt-12">
            <button 
              onClick={() => setRole('client')}
              className={`flex flex-col items-center justify-center w-40 h-28 rounded-lg border transition ${role === 'client' ? 'border-gray-300 bg-[#f5f7f9]' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${role === 'client' ? 'bg-blue-100 text-blue-500' : 'bg-gray-100 text-gray-400'}`}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <span className="font-bold text-sm">مستخدم</span>
              <span className="text-[10px] text-gray-500 mt-1">ابحث عن محام وأنشئ قضيتك</span>
            </button>
            
            <button 
              onClick={() => setRole('lawyer')}
              className={`flex flex-col items-center justify-center w-40 h-28 rounded-lg border transition ${role === 'lawyer' ? 'border-gray-300 bg-[#f5f7f9]' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${role === 'lawyer' ? 'bg-blue-100 text-blue-500' : 'bg-gray-100 text-gray-400'}`}>
                <FontAwesomeIcon icon={faScaleBalanced} />
              </div>
              <span className="font-bold text-sm">محامي</span>
              <span className="text-[10px] text-gray-500 mt-1">ابحث عن قضايا واعرض خدماتك</span>
            </button>
          </div>

          {/* Form */}
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-right">الاسم كاملاً</label>
                <input type="text" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-right">البريد الإلكتروني</label>
                <input type="email" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-right">رقم الهاتف</label>
                <input type="tel" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-right">المحافظة</label>
                <input type="text" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
              </div>

              {role === 'lawyer' && (
                <>
                  <ImageUploadBox label="الكارنية المهني" />
                  <ImageUploadBox label="البطاقة القومية" />

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">العنوان</label>
                    <input type="text" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
                  </div>
                  
                  <ImageUploadBox label="الصورة الشخصية" />

                  <div className="row-span-2 flex flex-col h-full">
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">نبذة عنك.</label>
                    <textarea className="w-full flex-1 border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition resize-none min-h-[100px]"></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">الرقم السري</label>
                    <input type="password" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">تأكيد الرقم السري</label>
                    <input type="password" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
                  </div>
                </>
              )}

              {role === 'client' && (
                <>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">العنوان</label>
                    <input type="text" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">الرقم السري</label>
                    <input type="password" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">تأكيد الرقم السري</label>
                    <input type="password" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-gray-400 text-right transition" />
                  </div>
                </>
              )}
            </div>

            <div className="pt-10 pb-2 text-center flex justify-center w-full">
              <button type="submit" className="w-[80%] md:w-[60%] lg:w-[40%] py-3 border border-yellow-400 text-yellow-500 font-bold rounded-md hover:bg-yellow-50 transition text-sm">
                إنشاء حساب
              </button>
            </div>

            <div className="text-center text-xs font-bold text-gray-500 pt-2">
              <span>لديك حساب بالفعل؟ </span>
              <Link to="/login" className="text-yellow-500 hover:underline">تسجيل الدخول</Link>
            </div>

          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
