import { useState, useEffect } from "react";
import { Menu, X, Award, MapPin, Linkedin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { href: "#about", label: "Profile" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#certificates", label: "Credentials" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple intersection highlights
      const sections = ["hero", "about", "skills", "experience", "certificates", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        
        {/* Name Logo Link */}
        <a href="#hero" className="flex flex-col group py-1">
          <span className="font-display font-medium text-white group-hover:text-brand-500 transition-colors tracking-tight text-sm sm:text-base leading-snug">
            G.H. Mohiuddin Ahmad Munna<span className="text-brand-500">.</span>
          </span>
          <span className="text-[10px] font-mono text-white/50 group-hover:text-brand-500 transition-colors leading-none uppercase tracking-[0.2em] mt-0.5">
            Researcher & Analyst
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-mono font-medium tracking-wide uppercase transition-colors relative py-1 ${
                activeSection === link.href.substring(1)
                  ? "text-brand-500"
                  : "text-white/60 hover:text-brand-500"
              }`}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded" />
              )}
            </a>
          ))}

          {/* Social direct action */}
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-500 hover:bg-brand-600 text-[#0a0a0a] text-xs font-mono font-bold rounded-sm transition-colors border-none"
          >
            <Linkedin className="w-3.5 h-3.5 fill-[#0a0a0a] stroke-[#0a0a0a]" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
        </button>

      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0c0c]/95 backdrop-blur-lg border-b border-white/10 absolute top-full left-0 right-0 py-4 px-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-xs font-mono font-bold tracking-wider uppercase py-2 border-b border-white/5 last:border-none ${
                activeSection === link.href.substring(1)
                  ? "text-brand-500"
                  : "text-white/60"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-[#0a0a0a] py-2.5 rounded-sm text-xs font-mono font-bold"
          >
            <Linkedin className="w-4 h-4 fill-current" />
            <span>CONNECT ON LINKEDIN</span>
          </a>
        </div>
      )}
    </nav>
  );
}
