import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PostCase = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">نشر حالتك القانونية...</h1>
          <p className="text-gray-600 text-lg">صف احتياجاتك القانونية واحصل على عروض أسعار من محامين مؤهلين.</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
          <Formik
            initialValues={{
              title: "",
              description: "",
              category: "قانون شركات",
              budget: "",
              deadline: ""
            }}
            validate={values => {
              const errors = {};
              if (!values.title) errors.title = "مطلوب";
              if (!values.description) errors.description = "مطلوب";
              if (!values.category) errors.category = "مطلوب";
              if (!values.budget) errors.budget = "مطلوب";
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Form Values:", values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-6 text-right">
                
                {/* Title */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">عنوان حالتك*</label>
                  <Field 
                    type="text" 
                    name="title" 
                    placeholder="مراجعة عقد اتفاقية البرمجيات..."
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition"
                  />
                  <ErrorMessage name="title" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">وصف حالتك*</label>
                  <Field 
                    as="textarea" 
                    name="description" 
                    rows="6"
                    placeholder="صف مشكلتك القانونية بالتفصيل، قم بتضمين السياق والمستندات المتعلقة بها وما الذي تحتاجه من المحامي..."
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition resize-none"
                  />
                  <ErrorMessage name="description" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Category & Budget Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">الفئة القانونية *</label>
                    <Field as="select" name="category" className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition appearance-none cursor-pointer">
                      <option value="قانون شركات">قانون شركات</option>
                      <option value="قانون جنائي">قانون جنائي</option>
                      <option value="قانون عائلي">قانون عائلي</option>
                    </Field>
                    <ErrorMessage name="category" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">الميزانية (بالدولار الأمريكي) *</label>
                    <Field 
                      type="number" 
                      name="budget" 
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition"
                    />
                    <ErrorMessage name="budget" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">موعد التسليم</label>
                  <Field 
                    type="date" 
                    name="deadline" 
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition text-gray-600"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                  <button 
                    type="button"
                    className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition"
                  >
                    الغاء
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-[#ffc107] hover:bg-[#e0a800] text-white font-bold rounded-lg transition flex items-center justify-center gap-2"
                  >
                    نشر
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                </div>

              </Form>
            )}
          </Formik>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostCase;
