import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, PenTool, User, Mail, Hash, Book, MessageSquare, Sparkles, Heart, Search, BookMarked } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const genres = [
  { title: "Sci-Fi & Fantasy", icon: Sparkles, desc: "Explore magical realms, futuristic worlds, and boundless imagination." },
  { title: "Romance", icon: Heart, desc: "Dive into heartwarming and deeply emotional love stories." },
  { title: "Mystery & Thriller", icon: Search, desc: "Unravel puzzles and keep yourself on the edge of your seat." },
  { title: "Non-Fiction", icon: BookMarked, desc: "Biographies, history, self-help, and real-world insights." }
];

const BookClub = () => {
  const [form, setForm] = useState({ name: "", email: "", studentNumber: "", genre: "", reason: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "60005193-28bf-4370-a8ce-98fbd289b357", // <-- PASTE KEY HERE
          subject: "New Book Club Registration",
          from_name: "Study Buddy Hub",
          "Student Name": form.name,
          "Email Address": form.email,
          "Student Number": form.studentNumber,
          "Favorite Genre": form.genre,
          "Reason to Join": form.reason || "None provided"
        }),
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
    <div className="flex flex-col min-h-screen bg-purple-50/30">
      <Navbar />

      <section className="bg-gradient-to-br from-purple-900 via-purple-700 to-fuchsia-600 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center text-white">
          <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20 shadow-xl">
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4 tracking-tight drop-shadow-md">
            Kutlwano Book Club
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto font-medium">
            Where stories come alive, minds connect, and the joy of reading is shared.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Info & Genres */}
            <div className="lg:col-span-7 space-y-10">
                <div>
                    <h2 className="text-3xl font-bold font-heading text-purple-900 mb-4">More Than Just Books</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Kutlwano Book Club is a warm and welcoming space where university students come together through a shared love for reading, creative writing, and meaningful conversations. It invites every voice, encouraging curiosity, self-expression, and thoughtful engagement with ideas and stories.
                    </p>
                </div>
                
                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { icon: BookOpen, title: "Reading Sessions", desc: "Dive into curated novels together." },
                        { icon: PenTool, title: "Creative Writing", desc: "Unleash your inner author." },
                        { icon: Users, title: "Community", desc: "Connect with fellow bookworms." },
                        { icon: MessageSquare, title: "Discussions", desc: "Deep dive into plot twists & themes." }
                    ].map((item) => (
                        <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                            <div className="p-3 bg-purple-100 rounded-xl text-purple-700 shrink-0">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">{item.title}</h3>
                                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Genres */}
                <div>
                    <h2 className="text-2xl font-bold font-heading text-purple-900 mb-6 flex items-center gap-2">
                        <Sparkles className="text-purple-600" />
                        Genres We Explore
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {genres.map((genre) => (
                            <div key={genre.title} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 p-[2px] transition-all hover:scale-[1.02]">
                                <div className="h-full w-full rounded-[14px] bg-white p-5">
                                    <genre.icon className="h-8 w-8 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-bold text-slate-800 mb-1">{genre.title}</h3>
                                    <p className="text-sm text-slate-500">{genre.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-5 sticky top-24">
                <div className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-purple-900/10 border border-purple-100 relative">
                    <div className="absolute top-0 right-8 px-4 py-2 bg-gradient-to-b from-purple-500 to-fuchsia-500 rounded-b-xl text-xs font-bold text-white shadow-md">
                        OPEN FOR 2026
                    </div>
                    
                    <h2 className="text-2xl font-bold font-heading mb-2 text-purple-950 mt-4">Join the Club</h2>
                    <p className="text-slate-500 mb-8 text-sm">Fill out the details below to become an official member.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="relative">
                            <User className="absolute left-3.5 top-3.5 h-5 w-5 text-purple-300" />
                            <Input placeholder="Full Name" className="pl-11 h-12 rounded-xl bg-purple-50/50 border-purple-100 focus:ring-purple-500/30" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </div>
                        
                        <div className="relative">
                            <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-purple-300" />
                            <Input placeholder="Email Address" type="email" className="pl-11 h-12 rounded-xl bg-purple-50/50 border-purple-100 focus:ring-purple-500/30" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <Hash className="absolute left-3.5 top-3.5 h-5 w-5 text-purple-300" />
                                <Input placeholder="Student No." className="pl-11 h-12 rounded-xl bg-purple-50/50 border-purple-100 focus:ring-purple-500/30" required value={form.studentNumber} onChange={(e) => setForm({ ...form, studentNumber: e.target.value })} />
                            </div>
                            <div className="relative">
                                <Book className="absolute left-3.5 top-3.5 h-5 w-5 text-purple-300" />
                                <Input placeholder="Fav Genre" className="pl-11 h-12 rounded-xl bg-purple-50/50 border-purple-100 focus:ring-purple-500/30" required value={form.genre} onChange={(e) => setForm({ ...form, genre: e.target.value })} />
                            </div>
                        </div>
                        
                        <div className="relative">
                            <MessageSquare className="absolute left-3.5 top-3.5 h-5 w-5 text-purple-300" />
                            <Textarea placeholder="Why do you want to join? (Optional)" value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} className="pl-11 pt-3.5 min-h-[120px] rounded-xl bg-purple-50/50 border-purple-100 focus:ring-purple-500/30 resize-none" />
                        </div>

                        <button type="submit" disabled={loading} className="w-full h-14 bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70">
                            {loading ? "Registering..." : "Become a Member"}
                        </button>
                    </form>
                </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookClub;