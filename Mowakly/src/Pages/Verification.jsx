import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldHalved, 
  faCheckCircle, 
  faFileAlt, 
  faUpload 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faClock, 
  faQuestionCircle 
} from '@fortawesome/free-regular-svg-icons';

const DocumentUploadBox = ({ title }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:border-yellow-400 hover:shadow-md flex flex-col h-48">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400 text-xs flex items-center gap-1.5 font-medium">
          <FontAwesomeIcon icon={faClock} />
          في انتظار الرفع
        </span>
        <span className="font-bold text-slate-800 text-sm">{title}</span>
      </div>
      
      {/* Upload Area */}
      <label className="flex-1 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors group">
        <div className="text-gray-400 mb-2 group-hover:text-yellow-500 transition-colors">
          <FontAwesomeIcon icon={faUpload} className="text-lg" />
        </div>
        <span className="text-sm font-bold text-slate-700 mb-1">
          {file ? file.name : "اضغط لرفع الملف"}
        </span>
        <span className="text-[10px] text-gray-400 font-medium tracking-wide">
          10MB ,PNG, JPG
        </span>
        <input 
          type="file" 
          accept=".png,.jpg,.jpeg" 
          className="hidden" 
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

const Verification = () => {
  const documents = [
    "إثبات الاشتراك السنوي",
    "ترخيص مزاولة المهنة",
    "بطاقة النقابة",
    "شهادة القيد",
    "الرقم القومي (ظهر)",
    "الرقم القومي (وجه)",
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans" dir="rtl">
      <Navbar isGuest={false} />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        
        {/* Title Section */}
        <div className="flex flex-col items-end mb-10 text-right">
          <div className="flex items-center gap-2 text-blue-600 mb-4 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            <span className="text-xs font-bold">نظام التوثيق الاحترافي</span>
            <FontAwesomeIcon icon={faShieldHalved} className="text-xs" />
          </div>
          <h1 className="text-3xl font-black text-slate-800 mb-3">
            توثيق بيانات الحساب
          </h1>
          <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
            يرجى رفع المستندات التالية لإكمال ملفك الشخصي. سيتم مراجعة البيانات من قبل فريقنا المختص وتوثيق حسابك بالعلامة الزرقاء لزيادة ثقة العملاء.
          </p>
        </div>

        {/* Upload Section Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-medium">
            في انتظار الرفع
          </span>
          <h2 className="font-bold text-slate-800 text-lg">توثيق الحساب</h2>
        </div>

        {/* Upload Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {documents.map((doc, idx) => (
            <DocumentUploadBox key={idx} title={doc} />
          ))}
        </div>

        {/* Actions & Help */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-b border-gray-200 py-6 mb-12">
          <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium mb-4 sm:mb-0">
            <FontAwesomeIcon icon={faQuestionCircle} />
            هل تواجه مشكلة في الرفع؟ <span className="underline underline-offset-4">تواصل مع الدعم الفني</span>
          </a>
          <button className="bg-gray-300 text-white font-bold py-3 px-8 rounded-lg cursor-not-allowed w-full sm:w-auto text-sm transition-colors hover:bg-gray-400">
            بدء عملية التوثيق
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col items-end text-right">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="font-bold text-slate-800">لماذا يجب علي التوثيق؟</h3>
              <div className="text-blue-600 text-xl">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-loose">
              الحسابات الموثقة هي الوحيدة المسموح لها بالتقديم على القضايا والطلبات القانونية داخل المنصة، كما تحصل على نسبة ظهور أعلى بنسبة 40% في نتائج البحث، مما يزيد من ثقة العملاء ويساعد المحامين على الوصول إلى عدد أكبر من الباحثين عن الخدمات القانونية.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col items-end text-right">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="font-bold text-slate-800">ماذا يحدث بعد الرفع؟</h3>
              <div className="text-gray-600 text-xl">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-loose">
              يستغرق التدقيق اليدوي من قبل فريق الجودة ما بين 24 إلى 48 ساعة عمل كحد أقصى قبل ظهور شارة التوثيق.
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Verification;
