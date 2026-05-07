import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#hero" className="text-xl font-bold flex items-center group">
            <span className="text-foreground group-hover:text-primary transition-colors">
              Alasoadura<span className="text-primary">.</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground text-center md:text-left">
             Frontend-Focused Fullstack Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Anikulapo" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/tobialasoadura" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:alasoaduratobiloba@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <a 
            href="#hero" 
            className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;