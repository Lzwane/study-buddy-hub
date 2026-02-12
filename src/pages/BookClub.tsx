import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, PenTool, User, Mail, Hash, Book, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { API_URL } from "@/config";

const BookClub = () => {
  const [form, setForm] = useState({ name: "", email: "", studentNumber: "", genre: "", reason: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'Book Club Signup' }),
      });

      if (response.ok) {
        toast.success("Welcome to the club! We've received your details.");
        setForm({ name: "", email: "", studentNumber: "", genre: "", reason: "" });
      } else {
        toast.error("Failed to sign up.");
      }
    } catch (error) {
      toast.error("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="gradient-primary py-16 md:py-20">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-white">
              Kutlwano Book Club
            </h1>
          </div>
          <p className="text-white/90 max-w-2xl mx-auto text-lg font-medium">
            Where stories come alive and minds connect.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Left Content */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold font-heading text-slate-800">More Than Just Books</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Kutlwano Book Club is a warm and welcoming space where university students come together through a shared love for reading, creative writing, and meaningful conversations. It invites every voice, encouraging curiosity, self-expression, and thoughtful engagement with ideas and stories.
                </p>
                
                <div className="space-y-4 mt-6">
                    {[
                        { icon: BookOpen, title: "Reading Sessions", desc: "Dive into curated novels." },
                        { icon: PenTool, title: "Creative Writing", desc: "Unleash your inner author." },
                        { icon: Users, title: "Community", desc: "Connect with fellow bookworms." },
                    ].map((item) => (
                        <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white border shadow-sm hover:shadow-md transition-all">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">{item.title}</h3>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative">
                <div className="absolute top-0 right-0 p-3 bg-yellow-400 rounded-bl-2xl rounded-tr-2xl text-xs font-bold text-yellow-900 shadow-sm">
                    OPEN FOR 2026
                </div>
                <h2 className="text-2xl font-bold font-heading mb-6">Member Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <Input
                            placeholder="Full Name"
                            className="pl-10 h-11 rounded-xl bg-slate-50 border-slate-200"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                    </div>
                    
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <Input
                            placeholder="Email Address"
                            type="email"
                            className="pl-10 h-11 rounded-xl bg-slate-50 border-slate-200"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <Hash className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input
                                placeholder="Student No."
                                className="pl-10 h-11 rounded-xl bg-slate-50 border-slate-200"
                                required
                                value={form.studentNumber}
                                onChange={(e) => setForm({ ...form, studentNumber: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <Book className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input
                                placeholder="Fav Genre"
                                className="pl-10 h-11 rounded-xl bg-slate-50 border-slate-200"
                                required
                                value={form.genre}
                                onChange={(e) => setForm({ ...form, genre: e.target.value })}
                            />
                        </div>
                    </div>
                    
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <Textarea
                            placeholder="Why do you want to join? (Optional)"
                            value={form.reason}
                            onChange={(e) => setForm({ ...form, reason: e.target.value })}
                            className="pl-10 min-h-[100px] rounded-xl bg-slate-50 border-slate-200 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
                    >
                        {loading ? "Registering..." : "Join the Club"}
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

export default BookClub;