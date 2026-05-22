import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faGem, 
  faStar, 
  faSeedling,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

const Subscriptions = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans" dir="rtl">
      <Navbar isGuest={false} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            باقات موكلي للمحامين
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 leading-tight">
            اختر الباقة المناسبة لتنمية أعمالك
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            ارتقِ بممارستك القانونية مع باقات موكلي المصممة خصيصاً لتلبية احتياجات المحامين والمكاتب القانونية من كافة الأحجام.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            <button 
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${isAnnual ? 'bg-slate-800 text-white shadow-md' : 'text-gray-500 hover:text-slate-800'}`}
              onClick={() => setIsAnnual(true)}
            >
              سنوي <span className="text-[10px] bg-yellow-500 text-slate-900 px-2 py-0.5 rounded-full ml-1 font-black inline-block">وفر 20%</span>
            </button>
            <button 
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!isAnnual ? 'bg-slate-800 text-white shadow-md' : 'text-gray-500 hover:text-slate-800'}`}
              onClick={() => setIsAnnual(false)}
            >
              شهري
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Basic Tier */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500 mb-4">
                <FontAwesomeIcon icon={faSeedling} className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">الباقة الأساسية</h3>
              <p className="text-sm text-gray-400">للمحامين المستقلين في بداية مسيرتهم.</p>
            </div>
            
            <div className="mb-8">
              <div className="text-4xl font-black text-slate-800 flex items-baseline gap-1">
                {isAnnual ? 'مجاناً' : 'مجاناً'}
              </div>
              <div className="text-sm text-gray-400 mt-1">مدى الحياة</div>
            </div>

            <ul className="flex flex-col gap-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-0.5 text-base" />
                <span>ملف شخصي عام في دليل المحامين</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-0.5 text-base" />
                <span>التقديم على 3 قضايا شهرياً</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-0.5 text-base" />
                <span>نظام المراسلة الأساسي</span>
              </li>
            </ul>

            <Link to="/payment" className="w-full py-3.5 border-2 border-gray-200 text-slate-700 rounded-xl font-bold text-center hover:border-slate-800 hover:text-slate-800 transition">
              ابدأ الآن مجاناً
            </Link>
          </div>

          {/* Professional Tier (Highlighted) */}
          <div className="bg-[#252525] rounded-3xl p-8 border border-[#333] shadow-2xl relative flex flex-col h-full md:-my-4 z-10 overflow-hidden transform md:scale-105">
            <div className="absolute top-0 right-0 bg-yellow-500 text-slate-900 text-xs font-black px-4 py-1 rounded-bl-xl">
              الأكثر شعبية
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 opacity-[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="mb-6 relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-yellow-500 mb-4 backdrop-blur-sm border border-white/5">
                <FontAwesomeIcon icon={faStar} className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">الباقة الاحترافية</h3>
              <p className="text-sm text-gray-400">للمحامين المحترفين الباحثين عن التميز.</p>
            </div>
            
            <div className="mb-8 relative z-10">
              <div className="text-4xl font-black text-white flex items-baseline gap-1">
                {isAnnual ? '2,500' : '250'} <span className="text-lg font-bold text-gray-400">ج.م</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">{isAnnual ? 'سنوياً' : 'شهرياً'}</div>
            </div>

            <ul className="flex flex-col gap-4 mb-8 flex-1 relative z-10">
              <li className="flex items-start gap-3 text-sm text-gray-200">
                <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500 mt-0.5 text-base" />
                <span>علامة المحامي الموثق (Verified Badge)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-200">
                <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500 mt-0.5 text-base" />
                <span>التقديم على عدد لامحدود من القضايا</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-200">
                <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500 mt-0.5 text-base" />
                <span>ظهور متقدم في نتائج بحث العملاء</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-200">
                <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500 mt-0.5 text-base" />
                <span>دعم فني ذو أولوية</span>
              </li>
            </ul>

            <Link to="/payment" className="w-full py-3.5 bg-yellow-500 text-slate-900 rounded-xl font-bold text-center hover:bg-yellow-400 transition shadow-[0_0_20px_rgba(234,179,8,0.2)] relative z-10 flex items-center justify-center gap-2">
              اشترك الآن
              <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            </Link>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-slate-800 mb-4">
                <FontAwesomeIcon icon={faGem} className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">باقة الأعمال</h3>
              <p className="text-sm text-gray-400">للمكاتب القانونية والشركات الكبرى.</p>
            </div>
            
            <div className="mb-8">
              <div className="text-4xl font-black text-slate-800 flex items-baseline gap-1">
                {isAnnual ? '8,000' : '800'} <span className="text-lg font-bold text-gray-400">ج.م</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">{isAnnual ? 'سنوياً' : 'شهرياً'}</div>
            </div>

            <ul className="flex flex-col gap-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-slate-800 mt-0.5 text-base" />
                <span>جميع ميزات الباقة الاحترافية</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-slate-800 mt-0.5 text-base" />
                <span>إدارة فريق عمل (حتى 5 محامين)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-slate-800 mt-0.5 text-base" />
                <span>بانر إعلاني مميز لشركتك في الرئيسية</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-slate-800 mt-0.5 text-base" />
                <span>مدير حساب مخصص للدعم 24/7</span>
              </li>
            </ul>

            <Link to="/payment" className="w-full py-3.5 border-2 border-slate-800 text-slate-800 rounded-xl font-bold text-center hover:bg-slate-800 hover:text-white transition">
              تواصل للمبيعات
            </Link>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Subscriptions;
