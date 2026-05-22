import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPaperPlane,
  faPaperclip,
  faSmile,
  faArrowRight,
  faEllipsisV,
  faPhone,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

const mockContacts = [
  { id: 1, name: "أحمد محمود", role: "عميل", lastMessage: "هل يمكنك مراجعة العقد غداً؟", time: "10:30 ص", unread: 2, online: true, avatar: "https://i.pravatar.cc/150?img=11" },
  { id: 2, name: "محمد صلاح", role: "محامي", lastMessage: "تم إرسال المستندات المطلوبة.", time: "أمس", unread: 0, online: false, avatar: "https://i.pravatar.cc/150?img=12" },
  { id: 3, name: "سارة خالد", role: "عميل", lastMessage: "شكراً لك على جهودك في القضية.", time: "الإثنين", unread: 0, online: true, avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 4, name: "شركة الأمل للتجارة", role: "شركة", lastMessage: "نحتاج استشارة قانونية بخصوص الضرائب.", time: "12 مايو", unread: 1, online: false, avatar: "https://i.pravatar.cc/150?img=14" },
];

const mockChatHistory = [
  { id: 1, senderId: 1, text: "السلام عليكم، أستاذ.", time: "10:15 ص" },
  { id: 2, senderId: 'me', text: "وعليكم السلام ورحمة الله، أهلاً بك أستاذ أحمد. كيف يمكنني مساعدتك اليوم؟", time: "10:20 ص" },
  { id: 3, senderId: 1, text: "لدي عقد شراكة جديد أود منك مراجعته قبل التوقيع.", time: "10:25 ص" },
  { id: 4, senderId: 1, text: "هل يمكنك مراجعة العقد غداً؟", time: "10:30 ص" },
];

const Messages = () => {
  const [activeChatId, setActiveChatId] = useState(mockContacts[0].id);
  const [messageText, setMessageText] = useState("");

  // Mobile view logic: if an active chat is selected, show it and hide sidebar.
  // On desktop, both are always shown.
  const isChatActive = activeChatId !== null;

  const activeContact = mockContacts.find(c => c.id === activeChatId) || mockContacts[0];

  return (
    <div className="h-screen bg-[#f8f9fa] flex flex-col font-sans overflow-hidden" dir="rtl">
      <Navbar isGuest={false} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 flex overflow-hidden h-full">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm flex w-full overflow-hidden">

          {/* Sidebar - Contacts List */}
          <div className={`${isChatActive ? 'hidden md:flex' : 'flex'} flex-col w-full md:w-80 lg:w-96 border-l border-gray-100 bg-white`}>
            {/* Sidebar Header */}
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-slate-800 mb-4">الرسائل</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن محادثة..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-10 text-sm focus:outline-none focus:border-slate-400 focus:bg-white transition"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>

            {/* Contacts List */}
            <div className="flex-1 overflow-y-auto">
              {mockContacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => setActiveChatId(contact.id)}
                  className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-50 hover:bg-gray-50 transition ${activeChatId === contact.id ? 'bg-blue-50/50 border-l-4 border-l-blue-500' : 'border-l-4 border-l-transparent'}`}
                >
                  <div className="relative">
                    <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-slate-800 text-sm truncate">{contact.name}</h3>
                      <span className="text-[10px] text-gray-400 whitespace-nowrap">{contact.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500 truncate pr-1">{contact.lastMessage}</p>
                      {contact.unread > 0 && (
                        <div className="bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                          {contact.unread}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Chat Area */}
          <div className={`${!isChatActive ? 'hidden md:flex' : 'flex'} flex-col flex-1 bg-[#fcfcfc]`}>

            {/* Chat Header */}
            {activeContact && (
              <div className="h-16 px-6 border-b border-gray-100 bg-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                  <button
                    className="md:hidden text-gray-500 hover:text-slate-800 p-2 ml-1"
                    onClick={() => setActiveChatId(null)}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <div className="relative">
                    <img src={activeContact.avatar} alt={activeContact.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                    {activeContact.online && (
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">{activeContact.name}</h3>
                    <p className="text-[11px] text-gray-500">{activeContact.online ? 'متصل الآن' : 'غير متصل'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-400">
                  <button className="hover:text-slate-700 transition"><FontAwesomeIcon icon={faPhone} /></button>
                  <button className="hover:text-slate-700 transition"><FontAwesomeIcon icon={faVideo} /></button>
                  <button className="hover:text-slate-700 transition"><FontAwesomeIcon icon={faEllipsisV} /></button>
                </div>
              </div>
            )}

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              <div className="text-center text-xs text-gray-400 my-4">
                اليوم
              </div>

              {mockChatHistory.map((msg) => {
                const isMe = msg.senderId === 'me';
                return (
                  <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[75%] md:max-w-[60%] rounded-2xl px-5 py-3 shadow-sm relative ${isMe ? 'bg-slate-800 text-white rounded-tr-none' : 'bg-white border border-gray-100 text-slate-700 rounded-tl-none'}`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <span className={`text-[10px] mt-1 block text-left ${isMe ? 'text-gray-400' : 'text-gray-400'}`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-2 py-1.5 focus-within:border-slate-400 focus-within:bg-white transition-all">
                <button className="w-10 h-10 rounded-full text-gray-400 hover:text-slate-700 flex items-center justify-center transition shrink-0">
                  <FontAwesomeIcon icon={faSmile} className="text-lg" />
                </button>
                <button className="w-10 h-10 rounded-full text-gray-400 hover:text-slate-700 flex items-center justify-center transition shrink-0">
                  <FontAwesomeIcon icon={faPaperclip} className="text-lg" />
                </button>

                <input
                  type="text"
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1 bg-transparent border-none focus:outline-none px-2 text-sm text-slate-700"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />

                <button className={`w-10 h-10 rounded-full flex items-center justify-center transition shrink-0 ${messageText.trim() ? 'bg-yellow-500 text-slate-900 hover:bg-yellow-400' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                  <FontAwesomeIcon icon={faPaperPlane} className="rotate-180" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
};

export default Messages;
