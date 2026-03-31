import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-matrix-bg text-matrix-green">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <footer className="border-t border-matrix-green/10 py-8 text-center text-sm text-matrix-green/30">
          <p>
            Built with Next.js // Deployed on Vercel // Matrix Edition
          </p>
          <p className="mt-1 text-matrix-green/20">
            &copy; {new Date().getFullYear()} NEO_DEV // All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
