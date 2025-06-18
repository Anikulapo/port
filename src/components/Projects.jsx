import { ExternalLink } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    img: "/images/ecom.png",
    category: "All",
    subCategory: "E-commerce",
    link: "https://crymsum.vercel.app/",
    title: "Crymsum E-commerce Store",
    description:
      "A fully responsive online storefront built with modern e‑commerce frameworks, featuring product listings, shopping cart, and checkout flow optimized for performance and UX.",
    tags: ["React", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: 2,
    img: "/images/scoot.png",
    category: "All",
    subCategory: "Web Design",
    link: "https://scoot-liart.vercel.app/",
    title: "Scoot Ride-sharing Web Design",
    description:
      "A sleek, mobile-first web design for a ride‑sharing platform with intuitive interface, interactive features, and smooth animations to enhance user engagement.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    img: "/images/nex.png",
    category: "All",
    subCategory: "Landing",
    link: "https://nexcent-hazel.vercel.app/",
    title: "Nexcent Landing Page",
    description:
      "A modern, responsive landing page template with smooth user-centric interactions.",
    tags: ["HTML & CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-muted-foreground ">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience in
          mind. Click on the project titles to view them live.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative w-full h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary/20 border text-secondary-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-end items-end">
                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300
                      absolute bottom-5 right-5
                      "
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Anikulapo"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
