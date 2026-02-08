import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-muted/30 mt-auto">
    <div className="container py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <BookOpen className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold font-heading gradient-text">STUDY BUDDY</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/book-club" className="hover:text-foreground transition-colors">Book Club</Link>
          <Link to="/executive-team" className="hover:text-foreground transition-colors">Executive Team</Link>
          <Link to="/tutors" className="hover:text-foreground transition-colors">Tutors</Link>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Study Buddy SMU. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
