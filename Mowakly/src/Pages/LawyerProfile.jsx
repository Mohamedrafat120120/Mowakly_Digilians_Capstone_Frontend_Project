import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowRight, 
  faStar as faStarSolid, 
  faLocationDot, 
  faBriefcase,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular, faCheckCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const LawyerProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6 text-right">
          <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-800 transition flex items-center gap-2 text-sm font-medium cursor-pointer">
            <FontAwesomeIcon icon={faArrowRight} />
            رجوع
          </button>
        </div>

        {/* Top Header Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Right side: Info */}
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden shrink-0">
              <FontAwesomeIcon icon={faUser} className="text-blue-500 text-4xl" />
            </div>
            
            {/* Details */}
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">سارة الحسن</h1>
              <p className="text-sm text-blue-500 mb-3">قانون شركات</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStarSolid} />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-800">4.9/5</span>
                <span className="text-xs text-gray-500">(12 تقييم)</span>
              </div>

              {/* Stats badges */}
              <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faLocationDot} className="text-red-500" />
                  <span>القاهرة، مصر</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faBriefcase} className="text-yellow-500" />
                  <span>15 عاماً</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                  <span>26 حالة مكتملة</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left side: Action Button */}
          <div className="mt-6 md:mt-0">
            <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-50 transition font-medium text-sm shadow-sm">
              <FontAwesomeIcon icon={faCommentDots} />
              مراسلة
            </button>
          </div>
        </div>

        {/* Main Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Content (Right side in RTL) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-right">
              <h2 className="text-xl font-bold text-gray-900 mb-4">نبذة..</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                أكثر من 15 عاماً من الخبرة في تقديم الاستشارات لشركات "فورتشن 500" في مجالات الاندماج والاستحواذ وحوكمة الشركات.
              </p>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-right">
              <h2 className="text-xl font-bold text-gray-900 mb-6">التقييمات (2)</h2>
              
              <div className="flex flex-col gap-6">
                {/* Review 1 */}
                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-gray-800 text-sm mb-2">مهدي غ.</h3>
                  <div className="flex text-yellow-400 text-xs mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStarSolid} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    كانت سارة رائعة. راجعت عقدنا المكون من 60 صفحة في غضون 48 ساعة مع تعليقات تفصيلية.
                  </p>
                </div>

                {/* Review 2 */}
                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-gray-800 text-sm mb-2">فاطمة ك.</h3>
                  <div className="flex text-yellow-400 text-xs mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStarSolid} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    يتمتعون بمهنية عالية ومعرفة واسعة. ساعدونا في إتمام عملية استحواذ معقدة.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar (Left side in RTL) */}
          <div className="flex flex-col gap-6">
            
            {/* Languages */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-right">
              <h2 className="text-lg font-bold text-gray-900 mb-4">اللغات</h2>
              <div className="flex gap-2">
                <span className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs font-medium">العربية</span>
                <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-xs font-medium border border-gray-200">الإنجليزية</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-right">
              <h2 className="text-lg font-bold text-gray-900 mb-6">إحصائيات سريعة</h2>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">حالات مكتملة</span>
                  <span className="font-bold text-gray-800">28</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">سنة خبرة</span>
                  <span className="font-bold text-gray-800">10</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">وقت رد</span>
                  <span className="font-bold text-gray-800">&gt;1 ساعة</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">تقييم ناجح</span>
                  <span className="font-bold text-gray-800">85%</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LawyerProfile;
