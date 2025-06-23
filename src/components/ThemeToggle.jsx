// Example usage in ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <button
        onClick={toggleTheme}
        className={`relative max-sm:hidden 
     z-50  rounded-full 
      transition-colors duration-300 focus:outline-hidden cursor-pointer

      `}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>

{/* Mobile */}
      <button
        onClick={toggleTheme}
        className={`fixed md:hidden 
       right-2   z-50 p-2 rounded-full 
      transition-colors duration-300 focus:outline-hidden cursor-pointer
      ${isScrolled ? "top-4" : "top-6"}
      `}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-yellow-300"  />
        ) : (
          <Moon className="h-5 w-5 text-blue-900" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
