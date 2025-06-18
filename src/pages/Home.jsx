import ThemeToggle from "../components/ThemeToggle.jsx";
import StarBackground from "../components/Starbackground.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contacts from "../components/Contacts.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Header></Header>
      {/* Main Content */}
      <main>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contacts/>
        
      </main>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default Home;
