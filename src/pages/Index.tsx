import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourceRepository from "@/components/ResourceRepository";
import { BookOpen, Users, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BookOpen,
    title: "Study Materials",
    description: "Access past papers, notes, and assignments for all modules to boost your academic success.",
  },
  {
    icon: Users,
    title: "Peer Mentorship",
    description: "Connect with experienced tutors and mentors who provide structured academic support.",
  },
  {
    icon: Lightbulb,
    title: "Kutlwano Book Club",
    description: "Join our reading community in collaboration with the SMU Library for intellectual growth.",
  },
  {
    icon: Heart,
    title: "Student Wellbeing",
    description: "Study drives with academic tips and food drives during exam season to support you.",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative gradient-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white">
              STUDY BUDDY
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            A student-led programme enhancing academic success at SMU through peer mentorship, tutoring, and access to essential study materials.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#resources" className="px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors">
              Browse Resources
            </a>
            <Link to="/book-club" className="px-6 py-3 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">
              Join Book Club
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-card p-6 rounded-2xl border hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary mb-4">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold font-heading text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">About Study Buddy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Study Buddy provides continuous academic support, leadership development for mentors and tutors, and comprehensive access to essential study materials — including past examination papers, detailed academic notes, and practice assignments. Stationery is provided through sponsor support, ensuring students have the tools to fully participate in their studies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In collaboration with the SMU Library, Study Buddy hosts the Kutlwano Book Club promoting reading and intellectual engagement, organises study drives with exam preparation strategies, and food drives during peak academic periods to support student wellbeing.
          </p>
        </div>
      </section>

      {/* Resources */}
      <div id="resources">
        <ResourceRepository />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
