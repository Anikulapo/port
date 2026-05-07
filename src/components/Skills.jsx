import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const skillsData = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "GSAP"],
  backend: ["Python", "Django", "Flask", "SQL", "PostgreSQL", "MySQL"],
  tools: ["Redux Toolkit", "Zustand", "TanStack Query", "Git", "Postman", "Vercel"],
};

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & Database" },
  { id: "tools", label: "Tools & State Management" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { y: 20, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.4, 
          stagger: 0.05, 
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]); // Re-animate on category change

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return [
        ...skillsData.frontend.map(s => ({ name: s, cat: "frontend" })),
        ...skillsData.backend.map(s => ({ name: s, cat: "backend" })),
        ...skillsData.tools.map(s => ({ name: s, cat: "tools" }))
      ];
    }
    return skillsData[activeCategory].map(s => ({ name: s, cat: activeCategory }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, encompassing frontend 
            frameworks, backend architectures, and modern development tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                    : "bg-background text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="skill-card flex items-center justify-center p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:border-primary/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
