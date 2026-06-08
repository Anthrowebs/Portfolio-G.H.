/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsGrid from "./components/SkillsGrid";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import ContactForm from "./components/ContactForm";
import { Linkedin, Mail, Phone, Calendar, ArrowUp } from "lucide-react";
import { personalInfo } from "./data/portfolioData";
import { useState, useEffect } from "react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="app" className="relative min-h-screen bg-[#070707] text-white font-sans antialiased selection:bg-brand-500/20 selection:text-brand-500">
      
      {/* Decorative top strip */}
      <div className="h-1 w-full bg-brand-500 fixed top-0 left-0 right-0 z-50 pointer-events-none" />

      {/* Primary Navigation bar */}
      <Navbar />

      <main className="relative">
        {/* Intro Hero Section with visual impact cards */}
        <Hero />

        {/* Professional Statement, Competencies & Academics */}
        <About />

        {/* Multi-category Technological tools index */}
        <SkillsGrid />

        {/* Detailed qualitative study projects timeline */}
        <Experience />

        {/* Interactive gold-tiered 17+ certificate showcase */}
        <Certificates />

        {/* Responsive contact coordinates & localStorage inbox dashboard */}
        <ContactForm />
      </main>

      {/* Footer Details */}
      <footer className="bg-[#050505] text-white/55 py-12 border-t border-white/10 font-sans">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/5 pb-8 mb-8">
            <div className="text-center md:text-left">
              <h4 className="font-display font-medium text-white tracking-tight text-base sm:text-lg">
                G.H. Mohiuddin Ahmad Munna
              </h4>
              <p className="text-xs font-mono text-white/40 mt-1 uppercase tracking-wider">
                Anthropology Research & Data Analytics Systems Agent
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-[#00ff88] transition-colors" title="Launch default email agent">
                Email
              </a>
              <span className="text-brand-500 font-bold">•</span>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-[#00ff88] transition-colors">
                Phone
              </a>
              <span className="text-brand-500 font-bold">•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/35 text-[11px] font-mono">
            <p>
              © {new Date().getFullYear()} G.H. Mohiuddin Ahmad Munna. All intellectual properties verified.
            </p>
            <p className="flex items-center gap-1.5">
              <span>Sylhet, Bangladesh</span>
              <span className="text-brand-500">•</span>
              <span>AnthroWebs Core v1.2</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll Top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-brand-500 hover:bg-brand-600 text-[#0a0a0a] rounded-sm shadow-lg transition-transform hover:-translate-y-1 active:scale-95 duration-200 cursor-pointer z-40 border border-[#00ff88]/30 font-bold"
          title="Scroll back up"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </button>
      )}

    </div>
  );
}
