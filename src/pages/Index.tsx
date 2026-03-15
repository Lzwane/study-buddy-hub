import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, FolderOpen, Heart, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const resourcesData = [
  { name: "MBChB", link: "https://drive.google.com/drive/folders/1iX_TdhbW-nbhjw_ZgJDW6eNRKxYniuz1?usp=drive_link" },
  { name: "Bachelor of Science", link: "https://drive.google.com/drive/folders/1piwQRSm7GYppj8qpfccmhYKCYzqvQbGV?usp=drive_link" },
  { name: "Bachelor of Science ECP 1 - 2", link: "https://drive.google.com/drive/folders/1hOQ3Ue4-tgfJFE0V6bQi99MMclrURlGT?usp=drive_link" },
  { name: "BSc Dietetics", link: "https://drive.google.com/drive/folders/1ppz8BHHsphtH0tkTRsOrmtQQz35BkYP-?usp=drive_link" },
  { name: "Bachelor of Nursing", link: "https://drive.google.com/drive/folders/1_nWDD039UDpUAgcNRqxOgz8CPCumpbZO?usp=drive_link" },
  { name: "Bachelor of Occupational Therapy", link: "https://drive.google.com/drive/folders/1WxQtqOvaDCEBoaN4ArUBetoasdQ3aVuS?usp=drive_link" },
  { name: "Bachelor of Science in Physiotherapy", link: "https://drive.google.com/drive/folders/171GU_0lyxGigp68K6EvXFX0LnZ8VCTeS?usp=drive_link" }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <section className="relative gradient-primary py-24 md:py-32 overflow-hidden flex-1 flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        
        <div className="container relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
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
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="px-8 py-4 rounded-xl bg-white text-primary font-bold shadow-lg hover:bg-white/90 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                  <FolderOpen className="w-5 h-5" />
                  Browse Resources
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-2 rounded-xl shadow-xl border-none animate-in fade-in zoom-in-95 duration-200">
                {resourcesData.map((course) => (
                  <DropdownMenuItem key={course.name} asChild>
                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer py-3 px-4 rounded-lg font-medium hover:bg-slate-50 transition-colors w-full flex items-center">
                      {course.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/book-club" className="px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 hover:border-white transition-all">
              Join Book Club
            </Link>
          </div>
        </div>
      </section>

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

      {/* Blue & Slate Theme Disclaimer Section */}
      <section className="py-12 bg-slate-50">
        <div className="container max-w-4xl">
          <div className="bg-blue-50/60 border border-blue-100 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Decorative background icons */}
            <div className="absolute -top-10 -right-10 opacity-20 pointer-events-none">
              <ShieldAlert className="w-40 h-40 text-blue-300" />
            </div>
            <div className="absolute -bottom-10 -left-10 opacity-20 pointer-events-none">
              <Heart className="w-32 h-32 text-blue-300" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
                <ShieldAlert className="w-6 h-6 text-blue-500" />
                A Little Disclaimer
              </h3>
              <p className="text-slate-600 leading-relaxed text-md max-w-2xl mx-auto font-medium">
                Study Buddy is a student-driven initiative lovingly created to make sharing and finding Sefako Makgatho Health Sciences University (SMU) study materials a breeze! 
                <br/><br/>
                Please keep in mind that <strong>we do not own, create, or hold any copyright</strong> to the notes, past papers, textbooks, or slides linked on this platform. All educational materials belong strictly to their respective authors, lecturers, and the university. We are simply here to help organize them so we can all study a little smarter. Share responsibly, ace those exams, and be kind! 💙
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;