import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";

const executives = [
  { name: "Andiswa Mabuya", position: "Chairperson" },
  { name: "TBA", position: "Deputy Chairperson" },
  { name: "Kurhula Mthombeni", position: "Secretary" },
  { name: "Sfisokuhle Magagula", position: "Deputy Secretary" },
  { name: "Unathi Radebe", position: "Treasurer" },
  { name: "Musa Mabaso", position: "Logistics & Library Liaison" },
  { name: "Lusanda Mbalati", position: "Academic Officer" },
  { name: "Zethembe Phenyane", position: "Head School Coordinator" },
  { name: "Musa Mulaudzi", position: "School Rep: Medicine" },
  { name: "Perseverence Mathebula", position: "School Rep: Health Care" },
  { name: "Tefo Mokwatedi", position: "School Rep: Science & Tech" },
];

const ExecutiveTeam = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="gradient-primary py-16 md:py-20">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-8 w-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-white">
              Executive Team
            </h1>
          </div>
          <p className="text-white/90 max-w-xl mx-auto">
            Meet the dedicated student leaders driving Study Buddy forward.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {executives.map((exec) => (
              <div
                key={exec.name}
                className="bg-card border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold font-heading">
                  {exec.name === "TBA" ? "?" : exec.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-bold font-heading">{exec.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{exec.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExecutiveTeam;