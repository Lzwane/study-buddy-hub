import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-muted/30 mt-auto">
    <div className="container py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Replaced Icon with Logo Image */}
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg">
             <img src="/LOGO.jpeg" alt="Logo" className="h-full w-full object-cover" />
          </div>
          <span className="font-bold font-heading gradient-text">STUDY BUDDY</span>
        </div>
        
        {/* Updated Links to match Navbar */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/executive-team" className="hover:text-foreground transition-colors">Executive Team</Link>
          <Link to="/book-club" className="hover:text-foreground transition-colors">Kutlwano Book Club</Link>
          <Link to="/announcements" className="hover:text-foreground transition-colors">Announcements</Link>
          <Link to="/tutoring" className="hover:text-foreground transition-colors">Tutoring</Link>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Study Buddy SMU. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;