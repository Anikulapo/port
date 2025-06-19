import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

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
  const {isDarkMode} = useTheme()
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
      className={`fixed w-full z-40 transition-all duration-300 px-1 pr-6 md:pr-10 md:px-5
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

        <button onClick={handleClick} className="z-50 md:hidden ml-10" aria-label={isOpen ? "Close Menu": "Open Menu"}>
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className={` stroke-[3] transition-all duration-300 origin-center
                ${isDarkMode? "stroke-white" : "stroke-black"}
                ${
                isOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className={` stroke-[3] transition-all duration-300 
                ${isDarkMode? "stroke-white" : "stroke-black"}
                ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              className={` stroke-[3] transition-all duration-300 origin-center 
                ${isDarkMode? "stroke-white" : "stroke-black"}
                ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </svg>
        </button>

        <div
          className={`absolute w-screen h-screen inset-0  backdrop-blur-md z-40 flex justify-center items-center
            transform duration-700
            ${
              isOpen ? "translate-y-[0]" : "translate-y-[-100%]"
            }
            ${
              isScrolled ?  "bg-background" : "bg-background/95"
            }
            `}
        >
          <div className="flex flex-col space-y-8 text-xl w-full">
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
