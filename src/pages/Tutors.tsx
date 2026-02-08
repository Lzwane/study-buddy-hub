import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tutors = [
  { name: "David Mokoena", modules: ["BMN101 — Business Management", "BMN201 — Strategic Management"] },
  { name: "Palesa Sithole", modules: ["ACP101 — Accounting Principles", "ACP201 — Financial Accounting"] },
  { name: "Tshepo Mahlangu", modules: ["CSC201 — Computer Science", "CSC301 — Software Engineering"] },
  { name: "Refilwe Tau", modules: ["MAT101 — Mathematics", "MAT201 — Applied Mathematics"] },
  { name: "Bongani Cele", modules: ["ENG101 — English Communication"] },
  { name: "Nomvula Mabaso", modules: ["LAW201 — Law of Contract", "LAW301 — Criminal Law"] },
  { name: "Kgosi Letsatsi", modules: ["ECO101 — Economics", "ECO201 — Microeconomics"] },
  { name: "Lindiwe Shabalala", modules: ["PSY101 — Psychology", "PSY201 — Developmental Psychology"] },
];

const Tutors = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="gradient-primary py-16 md:py-20">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-8 w-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-white">
              Our Tutors
            </h1>
          </div>
          <p className="text-white/90 max-w-xl mx-auto">
            Connect with our qualified peer tutors for academic support in your modules.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {tutors.map((tutor) => (
              <div
                key={tutor.name}
                className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold font-heading shrink-0">
                    {tutor.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="font-bold font-heading">{tutor.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tutor.modules.map((mod) => (
                    <Badge key={mod} variant="secondary" className="text-xs rounded-lg">
                      {mod}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tutors;
