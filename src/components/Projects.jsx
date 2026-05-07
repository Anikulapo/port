import { ExternalLink, ArrowRight, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    id: 1,
    img: "/images/mini.png", // Assuming this image exists based on previous code
    category: "Frontend",
    link: "https://mini-commerce-bay-delta.vercel.app/",
    title: "Mini-Commerce Platform",
    description:
      "A high-performance e-commerce platform with dynamic filtering, advanced search capabilities, and seamless cart functionality.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Zustand", "TanStack Query"],
  },
  {
    id: 2,
    img: "/images/ecom.png", // Reusing image
    category: "Frontend",
    link: "https://crymsum.vercel.app/",
    title: "Developer Portfolio",
    description:
      "A responsive, animated portfolio showcasing technical skills and engineering projects with a focus on modern UI/UX principles.",
    tags: ["React.js", "Tailwind CSS", "Vite", "GSAP"],
  },
  {
    id: 3,
    img: "/images/mojito.png", // Reusing image as placeholder for backend
    category: "Frontend",
    link: "#",
    title: "Scalable Backend Systems",
    description:
      "Engineered URL shortener and marketplace backend architectures focusing on REST APIs, complex CRUD functionality, and scalable patterns.",
    tags: ["Python", "Django", "Flask", "PostgreSQL", "REST API"],
  },
  {
    id: 4,
    img: "/images/mojito.png", // Reusing image as placeholder for backend
    category: "Frontend",
    link: "#",
    title: "Scalable Backend Systems",
    description:
      "Engineered URL shortener and marketplace backend architectures focusing on REST APIs, complex CRUD functionality, and scalable patterns.",
    tags: ["Python", "Django", "Flask", "PostgreSQL", "REST API"],
  },
  {
    id: 5,
    img: "/images/cart.png",
    category: "Frontend",
    link: "https://carto-demo.vercel.app/",
    title: "Carto UI Demo",
    description: "An interactive web interface showcasing creative tools with smooth UI, fluid animations, and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind", "GSAP"]
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mt-4 mx-auto md:mx-0 rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl">
              A selection of recent work highlighting my expertise in building scalable, 
              fullstack applications and pixel-perfect user interfaces.
            </p>
          </div>
          <a
            href="https://github.com/Anikulapo"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
          >
            View GitHub <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.15)] flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden bg-secondary/20">
                {/* Decorative category badge */}
                <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-md border border-border px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
                
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-secondary/50 text-secondary-foreground px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/50 flex justify-between items-center mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://github.com/Anikulapo" // Link to main github or specific repo if we had it
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <a
            href="https://github.com/Anikulapo"
            className="cosmic-button inline-flex items-center gap-2 group"
            target="_blank"
            rel="noreferrer"
          >
            Check My Github
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={16}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
