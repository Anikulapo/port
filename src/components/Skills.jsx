import { useState } from "react";

const skills = [
  //FrontEnd
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
  },
  {
    name: "Tailwind Css",
    level: 85,
    category: "frontend",
  },

  {
    name: "TypeScript",
    level: 75,
    category: "frontend",
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
  },
  {
    name: "Next Js",
    level: 80,
    category: "frontend",
  },

  //Tools
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
  },
  {
    name: "VS code",
    level: 95,
    category: "tools",
  },
];

const categories = ["all", "frontend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredskills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-5 mt-5">
          {categories.map((cat, key) => (
            <button
              onClick={() => setActiveCategory(cat)}
              key={key}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer 
                  ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/70 text-foreground hover:bg-secondary "
                  }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {filteredskills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover "
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
