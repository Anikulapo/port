import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for sequenced animations
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-text-line",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          buttonsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-5xl mx-auto z-10 flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <div ref={textRef} className="space-y-2 mb-6">
          <p className="hero-text-line text-sm md:text-base font-medium text-primary tracking-widest uppercase mb-4">
            Alasoadura Oluwatobiloba
          </p>
          <h1 className="hero-text-line text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Frontend-Focused <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Fullstack Engineer
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p 
          ref={subtitleRef} 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I engineer scalable, user-centric web applications and internal systems 
          using React, Next.js, and Python. Passionate about building seamless, 
          high-performance digital experiences.
        </p>

        {/* CTAs and Socials */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#projects" className="cosmic-button flex items-center gap-2 group">
            View My Work
            <ArrowDown className="group-hover:translate-y-1 transition-transform" size={18} />
          </a>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/Anikulapo" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/tobialasoadura" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:alasoaduratobiloba@gmail.com" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>

      </div>
      
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
