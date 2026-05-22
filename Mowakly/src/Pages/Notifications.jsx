import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell, 
  faEnvelope, 
  faFileContract, 
  faCheckCircle, 
  faInfoCircle,
  faCheckDouble
} from '@fortawesome/free-solid-svg-icons';

const initialNotifications = [
  { 
    id: 1, 
    type: "message", 
    title: "رسالة جديدة", 
    message: "تلقيت رسالة جديدة من المحامي أحمد محمود بخصوص استشارتك.", 
    time: "منذ ساعتين", 
    isRead: false 
  },
  { 
    id: 2, 
    type: "case", 
    title: "تحديث في القضية", 
    message: "تم تحديد موعد الجلسة القادمة لقضيتك رقم #12345 لتكون يوم الخميس القادم.", 
    time: "منذ 4 ساعات", 
    isRead: false 
  },
  { 
    id: 3, 
    type: "payment", 
    title: "تأكيد الدفع", 
    message: "تم تأكيد عملية الدفع الخاصة باشتراكك الشهري بنجاح. شكراً لثقتك بنا.", 
    time: "أمس", 
    isRead: true 
  },
  { 
    id: 4, 
    type: "system", 
    title: "تحديث النظام", 
    message: "تم تحديث منصة موكلي بميزات جديدة لتحسين تجربتك.", 
    time: "١٥ مايو", 
    isRead: true 
  },
];

const getIconForType = (type) => {
  switch (type) {
    case 'message': return { icon: faEnvelope, color: 'text-blue-500', bg: 'bg-blue-50' };
    case 'case': return { icon: faFileContract, color: 'text-purple-500', bg: 'bg-purple-50' };
    case 'payment': return { icon: faCheckCircle, color: 'text-green-500', bg: 'bg-green-50' };
    case 'system': return { icon: faInfoCircle, color: 'text-yellow-500', bg: 'bg-yellow-50' };
    default: return { icon: faBell, color: 'text-gray-500', bg: 'bg-gray-50' };
  }
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans" dir="rtl">
      <Navbar isGuest={false} />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <FontAwesomeIcon icon={faBell} className="text-gray-400" />
                الإشعارات
                {unreadCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {unreadCount} جديدة
                  </span>
                )}
              </h1>
              <p className="text-gray-500 text-sm mt-1">تابع أحدث التنبيهات والتحديثات الخاصة بحسابك</p>
            </div>

            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faCheckDouble} />
                تحديد الكل كمقروء
              </button>
            )}
          </div>

          {/* Notifications List */}
          <div className="divide-y divide-gray-100">
            {notifications.length > 0 ? (
              notifications.map((notification) => {
                const iconData = getIconForType(notification.type);
                return (
                  <div 
                    key={notification.id} 
                    onClick={() => markAsRead(notification.id)}
                    className={`p-6 flex items-start gap-4 transition cursor-pointer hover:bg-gray-50 ${!notification.isRead ? 'bg-blue-50/30' : ''}`}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${iconData.bg} ${iconData.color}`}>
                      <FontAwesomeIcon icon={iconData.icon} className="text-xl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 mb-1">
                        <h3 className={`font-bold text-sm sm:text-base ${!notification.isRead ? 'text-slate-800' : 'text-slate-700'}`}>
                          {notification.title}
                        </h3>
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {notification.time}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${!notification.isRead ? 'text-slate-700 font-medium' : 'text-gray-500'}`}>
                        {notification.message}
                      </p>
                    </div>

                    {/* Unread indicator */}
                    {!notification.isRead && (
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shrink-0 mt-2"></div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBell} className="text-3xl text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-1">لا توجد إشعارات</h3>
                <p className="text-gray-500 text-sm">ليس لديك أي إشعارات جديدة في الوقت الحالي.</p>
              </div>
            )}
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Notifications;
