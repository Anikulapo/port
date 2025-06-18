import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Tobi
            </span>{" "}
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Alasoadura
            </span>
          </h1>
        </div>
        <p className="text-lg md:text-xl mt-5 text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I'm a passionate and detail-oriented Frontend Developer with a strong
          foundation in HTML, CSS, JavaScript, and React. I specialize in
          building responsive, user-friendly interfaces that prioritize
          performance and accessibility
        </p>

        <div className="opacity-0 animate-fade-in-delay-3 pt-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>

        <a href="#contact">
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
          >
            <span className="">Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary " />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
