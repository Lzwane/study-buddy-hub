import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const schoolsData = [
  {
    name: "School of Science & Technology",
    courses: [
      { name: "BSc 1", link: "https://drive.google.com/drive/folders/1U5V3peLt_kcCpZyc7QKR-xFCibUl6h8g?usp=drive_link" },
      { name: "BSc ECP 1", link: "#" },
      { name: "BSc ECP 2", link: "#" },
      { name: "BSc 2 / BSc ECP 3", link: "#" },
      { name: "BSc 3 / BSc ECP 4", link: "#" },
    ]
  },
  {
    name: "School of Medicine",
    courses: [
      { name: "Radiology 1", link: "#" }, { name: "Radiology 2", link: "#" }, { name: "Radiology 3", link: "#" }, { name: "Radiology 4", link: "#" },
      { name: "MBChB 1", link: "#" }, { name: "MBChB ECP 1", link: "#" }, { name: "MBChB ECP 2", link: "#" },
      { name: "MBChB 2 / ECP 3", link: "#" }, { name: "MBChB 3 / ECP 4", link: "#" }, { name: "MBChB 6 / ECP 7", link: "#" },
    ]
  },
  {
    name: "School of Pharmacy",
    courses: Array.from({ length: 5 }, (_, i) => ({ name: `Pharmacy ${i + 1}`, link: "#" }))
  },
  {
    name: "School of Dentistry",
    courses: [
        ...Array.from({ length: 3 }, (_, i) => ({ name: `OH ${i + 1}`, link: "#" })),
        ...Array.from({ length: 4 }, (_, i) => ({ name: `BDT ${i + 1}`, link: "#" })),
        ...Array.from({ length: 6 }, (_, i) => ({ name: `BDS ${i + 1}`, link: "#" })),
    ]
  },
  {
    name: "School of Health Care Sciences",
    courses: [
        {name: "OT (1-4)", link: "#"}, {name: "Diet (1-4)", link: "#"}, 
        {name: "Nursing (1-4)", link: "#"}, {name: "Physio (1-4)", link: "#"},
        {name: "Speech (1-4)", link: "#"}, {name: "Audiology (1-4)", link: "#"}
    ]
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative gradient-primary py-24 md:py-32 overflow-hidden flex-1 flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        
        <div className="container relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Replaced Icon with Logo Image */}
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur shadow-xl overflow-hidden">
               <img src="/LOGO.jpeg" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
              STUDY BUDDY
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Your go-to platform for accessing and sharing study materials at Sefako Makgatho Health Sciences University. Connect with fellow students and excel in your studies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            
            {/* Dropdown for Resources */}
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="px-8 py-4 rounded-xl bg-white text-primary font-bold shadow-lg hover:bg-white/90 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                  <FolderOpen className="w-5 h-5" />
                  Browse Resources
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2 rounded-xl shadow-xl border-none animate-in fade-in zoom-in-95 duration-200">
                {schoolsData.map((school) => (
                  <DropdownMenuSub key={school.name}>
                    <DropdownMenuSubTrigger className="rounded-lg py-3 cursor-pointer">
                      <span>{school.name}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="max-h-[300px] overflow-y-auto p-1 rounded-xl shadow-xl">
                        {school.courses.map((course) => (
                          <DropdownMenuItem key={course.name} asChild>
                            <a 
                              href={course.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="cursor-pointer py-2 rounded-lg"
                            >
                              {course.name}
                            </a>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/book-club" className="px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 hover:border-white transition-all">
              Join Book Club
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-heading mb-6 gradient-text">About Study Buddy</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Study Buddy provides continuous academic support, leadership development for mentors and tutors, and comprehensive access to essential study materials. We ensure students have the tools to fully participate in their studies.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            In collaboration with the SMU Library, Study Buddy hosts the Kutlwano Book Club promoting reading and intellectual engagement, organises study drives with exam preparation strategies, and food drives during peak academic periods to support student wellbeing.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;