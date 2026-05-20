import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import lens from "../assets/images/icons/lens1.svg";
import content from "../assets/images/icons/content1.svg";
import copyWriting from "../assets/images/icons/copy-writing 1.svg";
import justice from "../assets/images/icons/justice 1.svg";
import checkedIcon from "../assets/images/icons/checked (1) 2.svg";
import companyIcon from "../assets/images/icons/company 1.svg";
import researchIcon from "../assets/images/icons/research 1.svg";
import applyIcon from "../assets/images/icons/apply 1.svg";
import askQuestionIcon from "../assets/images/icons/ask-question 1.svg";
import portfolioIcon from "../assets/images/icons/portfolio 1.svg";
import certificateIcon from "../assets/images/icons/certificate 1.svg";
import correctIcon from "../assets/images/icons/correct 1.svg";
import woman1 from "../assets/images/icons/woman 1.svg";
import woman2 from "../assets/images/icons/woman (1) 1.svg";
import man2 from "../assets/images/icons/man 2.svg";
// Mock data for lawyers
const topLawyers = [
  {
    id: 1,
    name: "نادية فاروق",
    specialty: "قانون عائلي",
    badge: "أفضل خبير",
    badgeColor: "bg-blue-50 text-blue-600",
    description:
      "متخصصة في قانون الأسرة وتتعامل بمسؤولية مع قضايا الطلاق، والحضانة، والتخطيط العقاري...",
    rating: "4.7/5",
    stars: 4,
    avatar: woman1,
  },
  {
    id: 2,
    name: "عمر خليل",
    specialty: "قانون جنائي",
    badge: "نجم صاعد",
    badgeColor: "bg-yellow-50 text-yellow-600",
    description:
      "مدعي عام سابق تحول إلى محامي دفاع، متخصص في القضايا الجنائية البارزة...",
    rating: "4.8/5",
    stars: 5,
    avatar: man2,
  },
  {
    id: 3,
    name: "سارة الحسن",
    specialty: "قانون شركات",
    badge: "الأعلى تقييماً",
    badgeColor: "bg-green-50 text-green-600",
    description:
      "أكثر من 15 عاماً من الخبرة في تقديم الاستشارات لشركات 'فورتشن 500' في مجالات الاندماج والاستحواذ وحوكمة الشركات.",
    rating: "4.9/5",
    stars: 5,
    avatar: woman2,
  },
];

// Mock data for cases
const latestCases = [
  {
    id: 1,
    title: "مراجعة عقود لشركة تقنية ناشئة",
    description:
      "مطلوب محام لمراجعة اتفاقية SaaS بين شركة ناشئة وعميل مؤسسي كبير...",
    status: "متاح",
  },
  {
    id: 2,
    title: "استشارة بشأن الطلاق وحضانة الأطفال",
    description: "استشارة طلاق وحضانة أطفال",
    status: "متاح",
  },
  {
    id: 3,
    title: "تسجيل علامة تجارية",
    description:
      "تسجيل علامة تجارية لعلامة استهلاكية جديدة في مصر ودول الخليج...",
    status: "متاح",
  },
];

const StepCard = ({ icon, step, title, desc }) => (
  <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
    <div className="mb-4">{icon}</div>
    <div className="text-yellow-500 text-xs font-bold mb-2">{step}</div>
    <h3 className="font-bold text-lg text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans"
      dir="rtl"
    >
      <Navbar isGuest={true} />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-[#2a2a2a] py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-white block mb-2">
                مُسَاعَدَةٌ قَانُونِيَّةٌ،
              </span>
              <span className="text-yellow-500 block">
                بِشُرُوطِكَ الخَاصَّةِ
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              تواصل مع محامين معتمدين لمراجعة العقود وتمثيلك قانونيًا بسرعة،
              شفافية و أسعار مناسبة.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/lawyers"
                className="bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white font-medium py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2 border border-gray-600 w-full sm:w-auto justify-center"
              >
                <img src={lens} alt="lens" className="w-5 h-5" />
                بحث عن محامي
              </Link>
              <Link
                to="/post-case"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <img src={content} alt="content" className="w-5 h-5" />
                عرض قضيتك
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x-reverse md:divide-x divide-gray-200 text-center">
              <div className="pt-4 md:pt-0">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  &lt; 2 ساعة
                </div>
                <div className="text-gray-500 text-sm">وقت الرد</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  4.9/5
                </div>
                <div className="text-gray-500 text-sm">تقييمات العملاء</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  500+
                </div>
                <div className="text-gray-500 text-sm">خدمات مكتملة</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  1000+
                </div>
                <div className="text-gray-500 text-sm">محامين موثقين</div>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              كيف تبدأ رحلتك مع موكّلي كمستخدم؟
            </h2>
            <p className="text-gray-600 text-sm">
              ثلاث خطوات بسيطة للوصول إلى المساعدة القانونية.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard
              icon={<img src={copyWriting} alt="icon" className="w-14 h-14" />}
              step="الخطوة الاولى"
              title="عرض حالتك."
              desc="اعرض احتياجك القانوني، وتواصل مع محامين مؤهلين يناسبون طلبك."
            />
            <StepCard
              icon={<img src={justice} alt="icon" className="w-14 h-14" />}
              step="الخطوة الثانية"
              title="مراجعة التقديمات"
              desc="قارن بين العروض المقدمة من محامين موثوقين، مع الاطلاع على تقييماتهم، خبراتهم، وأسعارهم."
            />
            <StepCard
              icon={<img src={checkedIcon} alt="icon" className="w-14 h-14" />}
              step="الخطوة الثالثة"
              title="تأكيد المساعدة القانونية"
              desc="قم بتوظيف محاميك، وادفع تكاليفك بأمان عبر المنصة."
            />
          </div>
        </section>

        {/* Firm Journey */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                كيف تبدأ رحلتك مع موكّلي كمحامٍ؟
              </h2>
              <p className="text-gray-600 text-sm">
                ثلاث خطوات بسيطة للوصول إلى فرص قانونية جديدة.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StepCard
                icon={<img src={portfolioIcon} alt="icon" className="w-14 h-14" />}
                step="الخطوة الاولى"
                title="أنشئ ملفك المهني"
                desc="أضف بياناتك، تخصصك، وفريق العمل لبدء الانضمام."
              />
              <StepCard
                icon={<img src={researchIcon} alt="icon" className="w-14 h-14" />}
                step="الخطوة الثانية"
                title="تصفّح القضايا المناسبة"
                desc="استعرض الطلبات القانونية المتوافقة مع تخصصك واهتماماتك."
              />
              <StepCard
                icon={<img src={askQuestionIcon} alt="icon" className="w-14 h-14" />}
                step="الخطوة الثالثة"
                title="قدّم عروضك وابدأ العمل"
                desc="تواصل مع العملاء، قدّم عرضك، وابدأ تقديم خدماتك القانونية."
              />
            </div>
          </div>
        </section>

   

        {/* Top Lawyers */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                المحامين الأعلى تقييماً
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topLawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-full hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col gap-1 items-start">
                      <div
                        className={`px-3 py-1 rounded-full text-[10px] font-bold ${lawyer.badgeColor}`}
                      >
                        {lawyer.badge}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <h3 className="font-bold text-gray-900 text-lg">
                          {lawyer.name}
                        </h3>
                        <p className="text-gray-400 text-xs">
                          {lawyer.specialty}
                        </p>
                      </div>
                      <img
                        src={lawyer.avatar}
                        alt={lawyer.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                      />
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 text-right border-b border-gray-100 pb-6">
                    {lawyer.description}
                  </p>

                  <div className="flex items-center justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={`text-xs ${i < lawyer.stars ? "text-yellow-400" : "text-gray-200"}`}
                      />
                    ))}
                    <span className="text-xs font-bold text-gray-700 mr-2">
                      {lawyer.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Cases */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              احدث الحالات القانونية
            </h2>
            <Link
              to="/cases"
              className="flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-lg hover:bg-white transition text-gray-800 font-bold text-sm bg-transparent"
            >
              الكل
              <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {latestCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex justify-between items-center hover:shadow-md transition"
              >
                <div className="flex-1 text-right">
                  <div className="flex justify-start items-center gap-4 mb-2">
                    <h3 className="font-bold text-xl text-gray-900">
                      {caseItem.title}
                    </h3>
                    <span className="bg-[#e6fbf4] text-[#1eb582] px-4 py-1 rounded-full text-xs font-bold border border-[#bdf3e0]">
                      {caseItem.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {caseItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
