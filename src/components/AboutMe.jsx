import { Briefcase, Code, Award, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const experiences = [
    {
    role: "Frontend Engineer",
    company: "Bito Corp",
    date: "12/2025 – Present",
    domain: "Enterprise Platforms",
    points: [
      "Architected and deployed responsive internal systems including invoicing workflows and learning management systems (LMS).",
      "Engineered reusable component systems in React, Next.js, and TypeScript, translating complex client business rules into fluid UX.",
      "Optimized client-side state and caching workflows to streamline operational productivity and overall company performance.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "WithHalal",
    date: "07/2026 – Present",
    domain: "Backend & Systems",
    points: [
      "Worked on backend auditing microservices using NestJS, Express, and TypeScript to track and verify business financial activity.",
      "Identified and resolved system-level bottlenecks, enhancing backend reliability, error handling, and transactional logging.",
      "Collaborated on application architecture and relational database models to implement scalable API fixes and features.",
    ],
  },

  {
    role: "Back End Development Intern",
    company: "The Crow’s Agribusiness Consult Ltd.",
    date: "01/2026 – 03/2026",
    domain: "Agritech Backend",
    points: [
      "Designed and implemented backend services using Django and Flask.",
      "Developed RESTful APIs and relational database models for business applications.",
    ],
  },
  {
    role: "Frontend Development Intern",
    company: "Crop2Cash",
    date: "03/2025 – 05/2025",
    domain: "Agritech UI/UX",
    points: [
      "Developed production-ready, accessible UI components using React.js and Tailwind CSS.",
      "Collaborated closely with QA and engineering peers on debugging, testing, and improving core application stability.",
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
          {/* Left Column: Summary, Education & Leadership */}
          <div className="lg:col-span-5 space-y-8">
            <div className="about-animate space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Code className="text-primary" /> Engineering Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I am a Software Engineer driven by the intersection of rigorous backend architecture and fluid, responsive user interfaces. 
                With hands-on experience delivering enterprise internal platforms at Bito Corp and financial auditing systems at WithHalal, 
                I specialize in <span className="text-foreground font-medium">TypeScript, React/Next.js, NestJS, and Django</span> to engineer maintainable, high-impact systems.
              </p>
            </div>

            {/* Education Card */}
            <div className="about-animate space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="text-primary" /> Education
              </h3>
              <div className="p-5 rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-foreground">Bachelor of Computer Science</h4>
                    <p className="text-sm text-primary font-medium mt-0.5">University of Ibadan</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full">
                    2023 – Present
                  </span>
                </div>
              </div>
            </div>

            {/* Leadership Card */}
            <div className="about-animate space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="text-primary" /> Leadership & Activities
              </h3>
              <div className="p-5 rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm">
                <h4 className="font-semibold text-foreground">NACOS Student Representative Council</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span><strong className="text-foreground">Chief Whip</strong> (2024 / 2025)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span><strong className="text-foreground">Deputy Chief Whip</strong> (2023 / 2024)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="about-animate pt-2 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="cosmic-button inline-flex items-center justify-center text-center shadow-lg shadow-primary/20"
              >
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1qylbTYrsW5xt7AR376uuAqWjFGtQ8hwY/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 rounded-full border border-border/80 text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300 text-center bg-card/50 inline-flex items-center justify-center"
              >
                View Full Resume
              </a>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="about-animate mb-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Briefcase className="text-primary" /> Technical Experience
              </h3>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:-translate-x-px md:before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/60 before:via-border before:to-transparent">
              {experiences.map((exp, idx) => (
                <div key={idx} className="about-animate relative flex items-start gap-4 sm:gap-6 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-white shadow-md shrink-0 z-10">
                    <Briefcase size={16} />
                  </div>
                  
                  <div className="flex-1 p-6 rounded-xl border border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h4 className="font-bold text-lg text-foreground">{exp.role}</h4>
                      <span className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full flex items-center gap-1 w-fit">
                        <Calendar size={12} />
                        {exp.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {exp.domain}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2.5 leading-relaxed">
                          <span className="text-primary mt-1 select-none font-bold">›</span>
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
