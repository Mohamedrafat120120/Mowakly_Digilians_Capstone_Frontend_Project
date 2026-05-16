import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

// Mock data for lawyers
const lawyers = [
  {
    id: 1,
    name: "عمر خليل",
    specialty: "قانون جنائي",
    description: "مدعي عام سابق تحول إلى محامي دفاع. متخصص في القضايا الجنائية البارزة...",
    rating: "4.8/5",
    badge: "نجم صاعد",
    badgeColor: "bg-orange-50 text-orange-600",
  },
  {
    id: 2,
    name: "سارة الحسن",
    specialty: "قانون شركات",
    description: "أكثر من 15 عاماً من الخبرة في تقديم الاستشارات لشركات \"فورتشن 500\" في مجالات الاندماج والاستحواذ وحوكمة الشركات.",
    rating: "4.9/5",
    badge: "الاعلى تقييماً",
    badgeColor: "bg-green-50 text-green-600",
  },
  {
    id: 3,
    name: "نادية فاروق",
    specialty: "قانون عائلي",
    description: "متخصصة في قانون الأسرة وتتعامل بمسؤولية مع قضايا الطلاق، والحضانة، والتخطيط العقاري...",
    rating: "4.7/5",
    badge: "افضل خبير",
    badgeColor: "bg-yellow-50 text-yellow-600",
  },
  {
    id: 4,
    name: "كريم منصور",
    specialty: "الملكية الفكرية",
    description: "محامي براءات اختراع ومستشار قانوني للشركات الناشئة في مجال التكنولوجيا. عملت مع أكثر من 200 شركة تقنية...",
    rating: "4.8/5",
    badge: "",
    badgeColor: "",
  },
  {
    id: 5,
    name: "ليلى إبراهيم",
    specialty: "قانون العقارات",
    description: "متخصص في معاملات العقارات يتمتع بخبرة واسعة في قانون العقارات المصري...",
    rating: "4.9/5",
    badge: "خبير",
    badgeColor: "bg-gray-100 text-gray-600",
  },
  {
    id: 6,
    name: "أحمد صابر",
    specialty: "قانون العمل",
    description: "خبير في النزاعات العمالية، والفصل التعسفي، والامتثال لقوانين العمل.",
    rating: "4.4/5",
    badge: "",
    badgeColor: "",
  },
  {
    id: 7,
    name: "عمر خليل",
    specialty: "قانون جنائي",
    description: "مدعي عام سابق تحول إلى محامي دفاع. متخصص في القضايا الجنائية البارزة...",
    rating: "4.8/5",
    badge: "نجم صاعد",
    badgeColor: "bg-orange-50 text-orange-600",
  },
  {
    id: 8,
    name: "عمر خليل",
    specialty: "قانون جنائي",
    description: "مدعي عام سابق تحول إلى محامي دفاع. متخصص في القضايا الجنائية البارزة...",
    rating: "4.8/5",
    badge: "نجم صاعد",
    badgeColor: "bg-orange-50 text-orange-600",
  },
  {
    id: 9,
    name: "عمر خليل",
    specialty: "قانون جنائي",
    description: "مدعي عام سابق تحول إلى محامي دفاع. متخصص في القضايا الجنائية البارزة...",
    rating: "4.8/5",
    badge: "نجم صاعد",
    badgeColor: "bg-orange-50 text-orange-600",
  },
];

import { Link } from "react-router-dom";

const LawyerCard = ({ lawyer }) => {
  return (
    <Link to={`/lawyer/${lawyer.id}`} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center relative hover:shadow-md transition block">
      {/* Top section: badge & avatar */}
      <div className="w-full flex justify-between items-start mb-4">
        {lawyer.badge ? (
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${lawyer.badgeColor}`}>
            {lawyer.badge}
          </span>
        ) : (
          <div></div> // Spacer
        )}
        <div className="flex gap-3">
          <div className="text-right">
            <h4 className="font-bold text-lg text-gray-900">{lawyer.name}</h4>
            <p className="text-xs text-blue-500">{lawyer.specialty}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
            <FontAwesomeIcon icon={faUser} className="text-blue-500 text-xl" />
          </div>
        </div>
      </div>

      {/* Middle section: description */}
      <p className="text-sm text-gray-600 mt-2 mb-6 text-right w-full leading-relaxed border-b border-gray-100 pb-4">
        {lawyer.description}
      </p>

      {/* Bottom section: rating */}
      <div className="w-full flex items-center justify-start gap-1">
        <div className="flex text-yellow-400 text-xs">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} />
          ))}
        </div>
        <span className="text-xs font-bold text-gray-800 mr-2">{lawyer.rating}</span>
      </div>
    </Link>
  );
};

const FindLawyers = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10 text-right">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">ابحث عن محاميك..</h1>
          
          {/* Search Bar */}
          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="ابحث بالاسم أو التخصص ..." 
                className="w-full bg-transparent outline-none text-right placeholder-gray-400"
              />
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="relative">
              <select className="appearance-none bg-transparent outline-none text-gray-700 pr-2 pl-8 cursor-pointer">
                <option>الكل</option>
                <option>جنائي</option>
                <option>شركات</option>
                <option>عقارات</option>
              </select>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                ▼
              </div>
            </div>
            <button className="bg-white border border-gray-200 text-gray-800 px-8 py-2 rounded-md hover:bg-gray-50 transition font-medium">
              بحث
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindLawyers;
