import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2D2D2D] text-white py-12 px-8 mt-12 w-full" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 border-b border-gray-600 pb-8">
        
        {/* Column 1: Platform */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-white">المنصة</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">تصفح المحامين</a></li>
            <li><a href="#" className="hover:text-white transition">تصفح الوظائف</a></li>
            <li><a href="#" className="hover:text-white transition">نشر وظيفة</a></li>
            <li><a href="#" className="hover:text-white transition">الأسعار</a></li>
          </ul>
        </div>

        {/* Column 2: Terms and Policies */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-white">الشروط والسياسات</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">شروط الاستخدام</a></li>
            <li><a href="#" className="hover:text-white transition">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-white transition">سياسة ملفات تعريف الارتباط</a></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-white">الدعم</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">مركز المساعدة</a></li>
            <li><a href="#" className="hover:text-white transition">تواصل معنا</a></li>
            <li><a href="#" className="hover:text-white transition">المدونة</a></li>
            <li><a href="#" className="hover:text-white transition">الشئون القانونية</a></li>
          </ul>
        </div>

        {/* Column 4: Logo & Text */}
        <div className="text-left flex flex-col items-end">
          <div className="text-4xl font-bold mb-4 text-white">وكــلــي</div>
          <p className="text-gray-300 text-sm text-right">
            منصة مصرية رائدة لسوق الخدمات<br />
            القانونية<br />
            تربط العملاء بمحامين موثوقين.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-400">
        <p>جميع الحقوق محفوظة MOWAKLY 2026 ©</p>
        <p>صنع بـ واسطة موكلي في القاهرة,مصر</p>
      </div>
    </footer>
  );
};

export default Footer;
