import { Briefcase, Code, Code2 } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold pt-10">
              Passionate FrontEnd Developer & Creative Problem-Solver
            </h3>
            <p className="text-muted-foreground">
              My goal is to craft seamless web experiences that not only look
              great but also function flawlessly across devices. Currently a
              Computer Science student at the University of Ibadan, I combine
              academic knowledge with hands-on project experience to continually
              improve my skills.
            </p>

            <p className="text-muted-foreground">
              I’m a fast learner who thrives on solving real-world problems
              through clean, maintainable code and modern development practices.
              Whether working independently or collaborating with a team, I’m
              driven by a commitment to delivering high-quality work and growing
              as a professional developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button px-6 py-2">
                Get In Touch
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1cU4F8g2ZvzDe18g3e2CWqYTSidNt1dCR/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    I build fast, responsive, and user-friendly web interfaces
                    using modern technologies like React, Next.js, Tailwind CSS,
                    and TypeScript. I focus on creating smooth user experiences
                    and clean, maintainable code.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Project Collaboration
                  </h4>
                  <p className="text-muted-foreground">
                    I work efficiently within teams using Git and agile
                    workflows, managing tasks from planning to deployment while
                    maintaining clear communication and adaptability through
                    feedback-driven iterations.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Skill */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    State & API Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Skilled in using tools like Redux Toolkit, Zustand, and
                    TanStack Query for efficient state management and seamless
                    API integration to deliver dynamic, data-driven
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
