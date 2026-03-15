import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, User, Mail, BookOpen, Hash, Calendar, Phone, BookText } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const StudyBuddy = () => {
  const [form, setForm] = useState({ name: "", email: "", studentNumber: "", course: "", yearLevel: "", phone: "", module: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "8ef4d83b-8265-49b6-9f37-262730c1942b", // <-- PASTE KEY HERE
          subject: "New Study Buddy Request",
          from_name: "Study Buddy Hub",
          "Student Name": form.name,
          "Email Address": form.email,
          "Phone Number": form.phone,
          "Student Number": form.studentNumber,
          "Course": form.course,
          "Year Level": form.yearLevel,
          "Module Name": form.module
        }),
      });

      if (response.ok) {
        toast.success("Request sent! We'll help you find a study buddy soon.");
        setForm({ name: "", email: "", studentNumber: "", course: "", yearLevel: "", phone: "", module: "" });
      } else {
        toast.error("Failed to send request.");
      }
    } catch (error) {
      toast.error("Server connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative bg-gradient-to-r from-indigo-700 to-indigo-500 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center text-white">
          <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4 tracking-tight">Find Your Study Group</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Studying is always better together. Fill out the form below and we'll connect you with peers in your course.
          </p>
        </div>
      </section>

      <section className="py-16 -mt-10">
        <div className="container max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
             <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl font-bold font-heading mb-2 text-slate-800">Be My Study Buddy</h2>
                <p className="text-muted-foreground mb-8">Tell us what you're studying so we can find your perfect match.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input placeholder="Full Name" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-indigo-500/20" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input placeholder="Student Email" type="email" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-indigo-500/20" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        <div className="relative">
                            <Hash className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input placeholder="Student Number" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-indigo-500/20" required value={form.studentNumber} onChange={(e) => setForm({...form, studentNumber: e.target.value})} />
                        </div>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input placeholder="Phone Number" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-indigo-500/20" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                        </div>
                    </div>

                    <div className="relative">
                        <BookOpen className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <Input placeholder="Course (e.g. BSc)" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-indigo-500/20" required value={form.course} onChange={(e) => setForm({...form, course: e.target.value})} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        <div className="relative">
                            <BookText className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input placeholder="Module Name (e.g. Anatomy)" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-indigo-500/20" required value={form.module} onChange={(e) => setForm({...form, module: e.target.value})} />
                        </div>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input placeholder="Year Level (e.g. 2nd Year)" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-indigo-500/20" required value={form.yearLevel} onChange={(e) => setForm({...form, yearLevel: e.target.value})} />
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50">
                        {loading ? "Sending..." : "Find My Buddy"}
                    </button>
                </form>
             </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StudyBuddy;