import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

// Mock data for cases
const cases = [
  {
    id: 1,
    title: "مراجعة عقود لشركة تقنية ناشئة",
    description: "مطلوب محام لمراجعة اتفاقية SaaS بين شركة ناشئة وعميل مؤسسي كبير...",
    status: "متاح"
  },
  {
    id: 2,
    title: "استشارة بشأن الطلاق وحضانة الأطفال",
    description: "استشارة طلاق وحضانة أطفال",
    status: "متاح"
  },
  {
    id: 3,
    title: "تسجيل علامة تجارية",
    description: "تسجيل علامة تجارية لعلامة استهلاكية جديدة في مصر ودول الخليج...",
    status: "متاح"
  }
];

const CaseCard = ({ caseItem }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row justify-between items-center hover:shadow-md transition gap-4">
      {/* Right side: Info */}
      <div className="flex-1 text-right flex flex-col md:flex-row md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2 justify-start md:justify-start">
            <h3 className="font-bold text-xl text-gray-900">{caseItem.title}</h3>
            {caseItem.status && (
              <span className="bg-[#e6fbf4] text-[#1eb582] px-4 py-1 rounded-full text-xs font-bold border border-[#bdf3e0]">
                {caseItem.status}
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm">{caseItem.description}</p>
        </div>
      </div>

      {/* Left side: Action Button */}
      <div>
        <Link 
          to={`/case/${caseItem.id}`}
          className="border border-gray-300 bg-white text-gray-700 px-8 py-2 rounded-lg hover:bg-gray-50 transition font-medium text-sm inline-block"
        >
          دخول
        </Link>
      </div>
    </div>
  );
};

const BrowseCases = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10 text-right">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">تصفح القضايا القانونية..</h1>
          
          {/* Search Bar */}
          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="ابحث عن الحالات . . ." 
                className="w-full bg-transparent outline-none text-right placeholder-gray-400"
              />
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="relative">
              <select className="appearance-none bg-transparent outline-none text-gray-700 pr-2 pl-8 cursor-pointer">
                <option>الكل</option>
              </select>
            </div>
            <button className="bg-white border border-gray-200 text-gray-800 px-8 py-2 rounded-md hover:bg-gray-50 transition font-medium">
              بحث
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrowseCases;
