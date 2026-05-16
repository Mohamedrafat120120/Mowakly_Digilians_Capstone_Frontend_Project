import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowRight, 
  faArrowLeft,
  faBriefcase,
  faSackDollar,
  faCalendarAlt,
  faUserTie,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CaseDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans" dir="rtl">
      <Navbar disableActiveCases={true} />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6 text-right">
          <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-800 transition flex items-center gap-2 text-sm font-medium cursor-pointer">
            <FontAwesomeIcon icon={faArrowRight} />
            رجوع
          </button>
        </div>

        {/* Top Case Details Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6 flex flex-col items-start md:items-center md:flex-row justify-between">
          
          {/* Right side: Case Info */}
          <div className="w-full text-right md:w-3/4">
            <h1 className="text-xl font-bold text-gray-900 mb-4">مراجعة عقد لشركة تقنية ناشئة</h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 mb-6 font-medium">
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faBriefcase} className="text-blue-500" />
                <span className="text-blue-500">قانون شركات</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faSackDollar} className="text-yellow-500" />
                <span>$100 - $200</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-red-500" />
                <span>25 أغسطس 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faUserTie} className="text-blue-400" />
                <span>7 عروض</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faClock} className="text-gray-400" />
                <span>نُشر قبل يومين</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
              نحتاج إلى محام لمراجعة اتفاقية برمجيات كخدمة (SaaS) مع شركتنا الناشئة وعميل مؤسسي كبير. تتألف الاتفاقية من حوالي 45 صفحة.
            </p>
          </div>

          {/* Left side: Status Badge */}
          <div className="mt-4 md:mt-0 flex self-start md:self-auto">
            <span className="bg-[#e6fbf4] text-[#1eb582] px-6 py-2 rounded-full text-sm font-bold border border-[#bdf3e0]">
              متاح
            </span>
          </div>

        </div>

        {/* Main Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Form Content (Right side in RTL, span 2) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-right">قدّم عرضك..</h2>
              
              <Formik
                initialValues={{ offerAmount: "", offerDescription: "" }}
                validate={values => {
                  const errors = {};
                  if (!values.offerAmount) errors.offerAmount = "مطلوب";
                  if (!values.offerDescription) errors.offerDescription = "مطلوب";
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("Offer Submitted:", values);
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="flex flex-col gap-5 text-right">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">مبلغ عرضك ($)</label>
                      <Field 
                        type="number" 
                        name="offerAmount"
                        className="w-full border border-gray-300 rounded-md p-3 text-sm outline-none focus:border-blue-500 transition"
                      />
                      <ErrorMessage name="offerAmount" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">عرضك</label>
                      <Field 
                        as="textarea"
                        name="offerDescription"
                        rows="6"
                        className="w-full border border-gray-300 rounded-md p-3 text-sm outline-none focus:border-blue-500 transition resize-none"
                      />
                      <ErrorMessage name="offerDescription" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ffc107] hover:bg-[#e0a800] text-white font-bold py-3 rounded-md transition flex items-center justify-center gap-2 mt-2"
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                      تأكيد عرضك
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Sidebar (Left side in RTL, span 1) */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-right">
              <h2 className="text-xl font-bold text-gray-900 mb-6">ملخص الوظيفة</h2>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">العميل</span>
                  <span className="font-bold text-gray-800 text-sm">شركة تيكفينتشر ذ.م.م.</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">الميزانية</span>
                  <span className="font-bold text-gray-800 text-sm">500 - 800 دولار</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">الموعد النهائي</span>
                  <span className="font-bold text-gray-800 text-sm">25 أبريل 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">التصنيف</span>
                  <span className="font-bold text-gray-800 text-sm">قانون الشركات</span>
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

export default CaseDetails;
