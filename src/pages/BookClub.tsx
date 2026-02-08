import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, PenTool } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const BookClub = () => {
  const [form, setForm] = useState({ name: "", email: "", studentNumber: "", reason: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for signing up for the Kutlwano Book Club!");
    setForm({ name: "", email: "", studentNumber: "", reason: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
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
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            In collaboration with the SMU Library
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold font-heading mb-4">About the Book Club</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Kutlwano Book Club is a proud initiative of Study Buddy SMU, run in collaboration with the SMU Library. Our mission is to cultivate a vibrant community of readers, writers, and thinkers among students. Through curated reading lists, creative writing workshops, and lively discussion forums, we aim to develop critical thinking, strengthen literacy, and foster a love for learning beyond the classroom.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Whether you're a passionate reader, an aspiring writer, or simply curious about new ideas — Kutlwano Book Club is your space to grow, connect, and explore the world of literature.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: BookOpen, title: "Reading Sessions", desc: "Monthly book discussions on curated novels and non-fiction" },
              { icon: PenTool, title: "Creative Writing", desc: "Workshops and forums for aspiring student writers" },
              { icon: Users, title: "Community", desc: "A supportive network of like-minded student readers" },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl border bg-card text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary mx-auto mb-3">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold font-heading text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Signup Form */}
          <div className="bg-muted/40 border rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold font-heading mb-2">Join the Book Club</h2>
            <p className="text-muted-foreground mb-6">Sign up below to become a member of the Kutlwano Book Club.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl h-11"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl h-11"
                />
              </div>
              <Input
                placeholder="Student Number"
                required
                value={form.studentNumber}
                onChange={(e) => setForm({ ...form, studentNumber: e.target.value })}
                className="rounded-xl h-11"
              />
              <Textarea
                placeholder="Why do you want to join the Book Club? (optional)"
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                className="rounded-xl min-h-[100px]"
              />
              <button
                type="submit"
                className="w-full gradient-primary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookClub;
