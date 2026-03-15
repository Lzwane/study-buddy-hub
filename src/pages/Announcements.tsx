import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Megaphone, Sparkles, Calendar, Bell } from "lucide-react";

const studyTips = [
  "Break your study sessions into 25-minute focus intervals (Pomodoro technique).",
  "Teach what you've learned to a peer to reinforce understanding.",
  "Use mnemonics to remember complex lists in Anatomy and Pharmacology.",
  "Stay hydrated! Brain function drops significantly with dehydration.",
];

const Announcements = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="gradient-primary py-16 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm shadow-sm border border-white/20">
                <Megaphone className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold font-heading text-white tracking-tight">Student Hub</h1>
          </div>
          <p className="text-white/90 text-lg font-medium max-w-xl mx-auto">
            Stay up to date with the latest campus news, events, and essential study strategies.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container py-16 grid lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Latest Announcements */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="text-blue-600 h-6 w-6" />
            <h2 className="text-2xl font-bold font-heading text-slate-800">Latest Announcements</h2>
          </div>

          {/* Announcement Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            {/* Context/Text Section */}
            <div className="p-8 pb-6">
                <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>March 2026</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                    Welcome to the New Study Buddy Hub!
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                    We are thrilled to officially launch the new and improved platform for Sefako Makgatho Health Sciences University students! Whether you're looking for study materials, a dedicated study group, or peer tutoring, we've got you covered. Check out the flyer below for more details on our upcoming launch events!
                </p>
            </div>

            {/* Picture Section */}
            <div className="px-8 pb-8">
                <div className="rounded-2xl overflow-hidden border-4 border-slate-50 shadow-inner bg-slate-100">
                    <img 
                        src="/Assets/Announcement1.jpg" 
                        alt="Study Buddy Announcement" 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/800x600?text=Image+not+found.+Check+public/Assets+folder!";
                        }}
                    />
                </div>
            </div>
          </div>
        </div>

        {/* Right Column: Study Tips */}
        <div className="lg:col-span-5 space-y-6 lg:pl-4">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-yellow-500 fill-yellow-500 h-6 w-6" />
            <h2 className="text-2xl font-bold font-heading text-slate-800">Study Tips of the Week</h2>
          </div>
          
          <div className="grid gap-5">
            {studyTips.map((tip, i) => (
              <div 
                key={i} 
                className="bg-white border-l-4 border-yellow-400 p-6 rounded-2xl rounded-l-none shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 font-bold shrink-0">
                        {i + 1}
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed text-md">{tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Need a Study Buddy Call-to-Action */}
          <div className="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
             <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
             <h3 className="font-bold text-xl mb-2">Need a Study Buddy?</h3>
             <p className="text-blue-100 mb-4 text-sm">Don't study alone! Head over to our Study Buddy finder and connect with peers in your course.</p>
             <a href="/study-buddy" className="inline-block px-5 py-2.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm">
                 Find a Partner
             </a>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Announcements;