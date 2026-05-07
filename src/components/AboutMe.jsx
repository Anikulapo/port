import { Briefcase, Code, Award, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const experiences = [
   {
    role: "Frontend Development Intern",
    company: "Crop2Cash",
    date: "2025",
    points: [
      "Developed production-ready UI components using React.js and Tailwind CSS",
      "Collaborated in debugging and improving application stability",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Bito Corp",
    date: "2025 – Present",
    points: [
      "Engineered scalable frontend applications and internal systems",
      "Contributed to invoicing, analytics, and learning management platforms",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "The Crow’s Agribusiness Consult Ltd.",
    date: "2026",
    points: [
      "Built backend services using Django and Flask",
      "Designed RESTful APIs and relational database models",
    ],
  },
];

const AboutMe = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-animate",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="about-animate mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 mx-auto md:mx-0 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Summary & Leadership */}
          <div className="lg:col-span-5 space-y-8">
            <div className="about-animate space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Code className="text-primary" /> Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Frontend-Focused Fullstack Software Engineer skilled in React.js, Next.js, 
                TypeScript, Django, and Flask. I have a proven track record of building 
                scalable web applications and robust internal systems that solve complex 
                business challenges.
              </p>
            </div>

            <div className="about-animate space-y-4 pt-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Award className="text-primary" /> Leadership
              </h3>
              <div className="gradient-border p-6 rounded-xl bg-card/50">
                <h4 className="font-semibold text-lg">NACOS SRC</h4>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Chief Whip (2024/2025)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Deputy Chief Whip (2023/2024)
                  </li>
                </ul>
              </div>
            </div>

            <div className="about-animate pt-4 flex flex-col md:flex-row  gap-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a href="https://drive.google.com/file/d/11TtP_ApYHjzp-Q8OhGNlBUQHfrCG7sJ9/view?usp=sharing" target="blank" download className="cosmic-button">
                Download Resume
              </a>
            </div>

            
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="about-animate mb-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Briefcase className="text-primary" /> Experience
              </h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {experiences.map((exp, idx) => (
                <div key={idx} className="about-animate relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Briefcase size={16} />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h4 className="font-bold text-lg">{exp.role}</h4>
                      <span className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full flex items-center gap-1 w-fit">
                        <Calendar size={12} />
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
