import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    name: "Home",
    link: "#hero",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
  },
  {
    id: 3,
    name: "Skills",
    link: "#skills",
  },
  {
    id: 4,
    name: "Projects",
    link: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 px-5
                ${
                  isScrolled
                    ? "py-5 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-7"
                }
        `}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Tobi's</span> Portfolio
          </span>
        </a>

        {/*deskstop  nav list */}
        <div className="hidden md:flex space-x-8">
          {items.map((nav) => (
            <a
              key={nav.id}
              href={nav.link}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {nav.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button onClick={handleClick} className="z-100 md:hidden" aria-label={isOpen ? "Close Menu": "Open Menu"}>
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className={`stroke-white stroke-[3] transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className={`stroke-white stroke-[3] transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              className={`stroke-white stroke-[3] transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </svg>
        </button>

        <div
          className={`
          fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center
          transtion-all duration-700 
          md:hidden space-x-8 ${isOpen? "translate-0  pointer-events-auto": "pointer-events-none translate-y-[-100%]"}`}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {items.map((nav) => (
              <a
                key={nav.id}
                href={nav.link}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
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
