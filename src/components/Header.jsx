import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const items = [
  { id: 1, name: "Home", link: "#hero" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Skills", link: "#skills" },
  { id: 4, name: "Projects", link: "#projects" },
  { id: 5, name: "Contact", link: "#contact" },
];

const Header = () => {
  const { isDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 px-4 md:px-8 border-b border-transparent
        ${isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-border/50 shadow-sm" : "py-6"}
      `}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold flex items-center group">
          <span className="relative z-10 text-foreground group-hover:text-primary transition-colors">
            Alasoadura<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav List */}
        <div className="hidden md:flex gap-8 items-center justify-center">
          {items.map((nav) => (
            <a
              key={nav.id}
              href={nav.link}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
            >
              {nav.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="pl-4 border-l border-border/50">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav Toggle & Theme */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle className="md:hidden" />
          
          <button
            onClick={handleClick}
            className="z-50 relative p-2"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-foreground transition-all duration-300 origin-right ${isOpen ? "w-6 -rotate-45 -translate-y-[2px]" : "w-6"}`}></span>
              <span className={`h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`}></span>
              <span className={`h-0.5 bg-foreground transition-all duration-300 origin-right ${isOpen ? "w-6 rotate-45 translate-y-[2px]" : "w-4"}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 w-full h-screen bg-background/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out
            ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        >
          <div className="flex flex-col space-y-8 text-2xl text-center w-full px-6">
            {items.map((nav, index) => (
              <a
                key={nav.id}
                href={nav.link}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
                style={{
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${isOpen ? index * 100 : 0}ms`,
                  transitionProperty: 'transform, opacity, color'
                }}
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
