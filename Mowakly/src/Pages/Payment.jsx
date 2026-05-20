import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faCreditCard, 
  faLock, 
  faCalendarAlt, 
  faShieldAlt, 
  faInfoCircle 
} from '@fortawesome/free-solid-svg-icons';

const InputField = ({ label, type = "text", placeholder, icon }) => (
  <div className="flex flex-col mb-5 relative">
    <label className="block text-sm font-bold text-slate-700 mb-2 text-right">{label}</label>
    <div className="relative">
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full border border-gray-200 bg-white rounded-xl p-3 outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-right transition-all text-slate-800 placeholder-gray-300"
        dir="ltr"
      />
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
    </div>
  </div>
);

const Payment = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans" dir="rtl">
      <Navbar isGuest={false} />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
        
        {/* Title Section */}
        <div className="text-right mb-10">
          <h1 className="text-3xl font-black text-slate-800 mb-2">إتمام عملية الاشتراك</h1>
          <p className="text-gray-500 text-sm">
            يرجى إدخال تفاصيل الدفع والفوترة لتفعيل عضويتك المهنية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Right Column: Forms */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Billing Info Card */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-gray-100 p-5 flex items-center justify-end gap-3">
                <h2 className="font-bold text-slate-800 text-lg">معلومات الفوترة</h2>
                <FontAwesomeIcon icon={faUser} className="text-gray-400" />
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <div className="md:col-start-2">
                    <InputField label="الاسم الكامل" placeholder="أحمد محمد علي" />
                  </div>
                  <div className="md:col-start-1 md:row-start-1">
                    <InputField label="البريد الإلكتروني" type="email" placeholder="lawyer@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 text-right">عنوان الفوترة</label>
                  <div className="flex flex-col gap-3">
                    <input 
                      type="text" 
                      placeholder="شارع التحرير، الدقي، الجيزة"
                      className="w-full border border-gray-200 bg-white rounded-xl p-3 outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-right transition-all text-slate-800" 
                    />
                    <input 
                      type="text" 
                      className="w-full border border-gray-200 bg-gray-50/50 rounded-xl p-3 outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 text-right transition-all text-slate-800" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card Details Card */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-gray-100 p-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="h-6 w-10 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">VISA</div>
                  <div className="h-6 w-10 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">MC</div>
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-slate-800 text-lg">تفاصيل البطاقة البنكية</h2>
                  <FontAwesomeIcon icon={faCreditCard} className="text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="mb-5">
                  <InputField 
                    label="رقم البطاقة" 
                    placeholder="0000 0000 0000 0000" 
                    icon={faLock}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <div className="md:col-start-2">
                    <InputField 
                      label="تاريخ الانتهاء" 
                      placeholder="MM/YY" 
                      icon={faCalendarAlt}
                    />
                  </div>
                  <div className="md:col-start-1 md:row-start-1">
                    <InputField 
                      label="(CVC) رمز التحقق" 
                      placeholder="123" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Left Column: Summary & Notes */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Order Summary */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 relative overflow-hidden">
              
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                  اشتراك احترافي
                </div>
              </div>
              
              <h2 className="font-black text-2xl text-slate-800 mb-6 text-right">ملخص الطلب</h2>
              
              <div className="flex flex-col gap-4 text-sm font-medium mb-6">
                <div className="flex justify-between items-center text-slate-600 border-b border-gray-50 pb-3">
                  <span>اشتراك سنوي</span>
                  <span className="text-gray-500 text-xs">نوع العملية</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 border-b border-gray-50 pb-3">
                  <span className="font-bold text-slate-800">2,500 ج.م</span>
                  <span className="text-gray-500 text-xs">سعر الباقة</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 border-b border-gray-50 pb-3">
                  <span className="font-bold text-slate-800">350 ج.م</span>
                  <span className="text-gray-500 text-xs">الضريبة (14%)</span>
                </div>
              </div>

              {/* Discount Code */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 mb-2 text-right">كود الخصم</label>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
                    تطبيق
                  </button>
                  <input 
                    type="text" 
                    placeholder="أدخل الكود" 
                    className="flex-1 border border-gray-200 bg-white rounded-lg p-2 outline-none focus:border-slate-800 text-right text-sm"
                  />
                </div>
              </div>

              <div className="border-t-2 border-dashed border-gray-100 my-6"></div>

              {/* Total */}
              <div className="flex justify-between items-end mb-8">
                <div className="text-2xl font-black text-slate-800 flex items-baseline gap-1">
                  2,850 <span className="text-lg">ج.م</span>
                </div>
                <div className="text-sm font-bold text-slate-800">الإجمالي الكلي</div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-[#252525] text-white font-bold py-4 rounded-xl hover:bg-black transition-colors mb-4 shadow-lg shadow-black/10">
                تأكيد الدفع والاشتراك الآن
              </button>

              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
                <span>دفع آمن ومشفر 100%</span>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>

            </div>

            {/* Important Notes */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-end gap-2 mb-4 text-slate-800">
                <h3 className="font-bold text-sm">ملاحظات هامة</h3>
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <ul className="text-right text-xs text-gray-500 leading-loose flex flex-col gap-2 dir-rtl">
                <li className="flex items-center justify-end gap-2">
                  <span>سيتم تفعيل مميزات المحامي الموثق فور نجاح العملية.</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>يمكنك إلغاء التجديد التلقائي من إعدادات الحساب في أي وقت.</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>تطبق الشروط والأحكام الخاصة بمنصة موكلي.</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Payment;
