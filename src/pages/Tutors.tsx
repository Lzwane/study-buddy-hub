import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, User, Mail, BookOpen, Hash } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { API_URL } from "@/config";

const Tutors = () => {
  const [form, setForm] = useState({ name: "", email: "", studentNumber: "", course: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'Tutoring Request' }),
      });

      if (response.ok) {
        toast.success("Request received! A tutor will contact you shortly.");
        setForm({ name: "", email: "", studentNumber: "", course: "" });
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

      <section className="relative gradient-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center text-white">
          <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4 tracking-tight">
            Unlock Your Potential
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Struggling with a module? You're not alone. Our peer tutoring program connects you with high-performing senior students who have walked the same path. Get personalized guidance, clear up confusing concepts, and boost your grades—all for free.
          </p>
        </div>
      </section>

      <section className="py-16 -mt-10">
        <div className="container max-w-2xl">
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl font-bold font-heading mb-2 text-slate-800">Request a Tutor</h2>
                <p className="text-muted-foreground mb-8">Fill in your details below and we'll match you with the perfect study buddy.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input 
                                placeholder="Full Name" 
                                className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                required 
                                value={form.name}
                                onChange={(e) => setForm({...form, name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input 
                                placeholder="Email Address" 
                                type="email" 
                                className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                required 
                                value={form.email}
                                onChange={(e) => setForm({...form, email: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div className="relative">
                            <Hash className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input 
                                placeholder="Student Number" 
                                className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                required 
                                value={form.studentNumber}
                                onChange={(e) => setForm({...form, studentNumber: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <BookOpen className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input 
                                placeholder="Module Code (e.g. CSC201)" 
                                className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                required 
                                value={form.course}
                                onChange={(e) => setForm({...form, course: e.target.value})}
                            />
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Matching you..." : "Find My Tutor"}
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

export default Tutors;