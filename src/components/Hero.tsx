import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Award } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useProfileImage, HERO_IMAGE_KEY } from "../lib/imageStorage";
import { HeroSilhouette, ImageCard } from "./ProfileFallback";

export default function Hero() {
  const { image, updateImage, removeImage } = useProfileImage(HERO_IMAGE_KEY, "hero");
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = (file: File) => {
    updateImage(file, () => {
      // Success
    }, (err) => {
      alert(err);
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 bg-gradient-to-b from-[#0a0a0a] to-[#121212] overflow-hidden border-b border-white/10">
      {/* Abstract geometric background ornament with low visibility */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-500" fill="currentColor">
          <circle cx="80" cy="20" r="30" />
          <path d="M0,80 L100,40 L100,100 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Hero Left Content */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-brand-500 rounded-sm text-xs font-mono font-medium tracking-wide border border-white/10 w-fit">
              <Award className="w-3.5 h-3.5" />
              <span>Google & Gemini Certified Professional</span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tight text-white leading-tight">
                G.H. Mohiuddin <span className="text-brand-500 font-bold block">Ahmad Munna</span>
              </h1>
              <p className="text-base md:text-xl font-sans text-white/70 font-light max-w-2xl leading-relaxed">
                Social Researcher, WordPress Developer, and Web Designer specializing in qualitative methodologies, strategic project management, and AI-assisted workflows.
              </p>
            </motion.div>

            {/* Quick badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 text-xs font-mono text-white/50">
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm text-brand-500 font-medium">#Anthropology_Research</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm text-brand-500 font-medium">#WordPress_Developer</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm text-brand-500 font-medium">#Web_Designer</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm text-brand-500 font-medium">#Project_Management</span>
            </motion.div>

            {/* Direct Contact Details Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 text-white/80 font-sans text-sm">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-brand-500 transition-colors w-fit group">
                <span className="p-2 bg-white/5 rounded-sm border border-white/10 group-hover:border-brand-500 transition-colors"><Mail className="w-4 h-4 text-brand-500" /></span>
                <span className="font-mono text-xs">{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 hover:text-brand-500 transition-colors w-fit group">
                <span className="p-2 bg-white/5 rounded-sm border border-white/10 group-hover:border-brand-500 transition-colors"><Phone className="w-4 h-4 text-brand-500" /></span>
                <span className="font-mono text-xs">{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 w-fit">
                <span className="p-2 bg-white/5 rounded-sm border border-white/10"><MapPin className="w-4 h-4 text-brand-500" /></span>
                <span className="font-mono text-xs">{personalInfo.location}</span>
              </div>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-500 transition-colors w-fit group">
                <span className="p-2 bg-white/5 rounded-sm border border-white/10 group-hover:border-brand-500 transition-colors"><Linkedin className="w-4 h-4 text-brand-500" /></span>
                <span className="underline decoration-dotted text-brand-500 text-xs font-mono">LinkedIn Profile</span>
              </a>
            </motion.div>

            {/* CTA action cluster */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-[#0a0a0a] font-mono font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-xs"
              >
                <span>Hire / Collaborate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#experience" 
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 shadow-xs font-mono font-medium uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all text-xs"
              >
                <span>Explore Research Work</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Right Column (Avatar and Stats) */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            <motion.div variants={itemVariants}>
              {image ? (
                <ImageCard 
                  imageSrc={image} 
                  onRemove={removeImage} 
                  title="G.H. Mohiuddin Ahmad Munna" 
                />
              ) : (
                <HeroSilhouette
                  onFileSelect={handleFileSelect}
                  isDragOver={isDragOver}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  title="Primary Portfolio Portrait"
                />
              )}
            </motion.div>

            {/* Academic & Tech Profile Stats */}
            <motion.div 
              variants={itemVariants} 
              className="bg-white/5 border border-white/10 rounded-sm shadow-2xl p-6 relative"
            >
              {/* Top decorative dot cluster */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
              </div>

              <h3 className="font-display font-bold text-white text-base tracking-wider uppercase border-b border-white/10 pb-3 mb-4">
                Academic & Tech Profile
              </h3>

              <div className="space-y-4 font-sans text-sm">
                <div className="p-3 bg-white/5 rounded-sm flex items-center justify-between border border-white/5">
                  <div>
                    <p className="text-[10px] font-mono text-white/40 block tracking-widest uppercase">UNIVERSITY PROJECTS</p>
                    <p className="font-display font-bold text-white text-lg">4 Academic Studies</p>
                  </div>
                  <span className="text-brand-500 font-mono text-[10px] bg-brand-500/10 border border-brand-500/20 px-2 py-0.5 rounded-sm font-semibold tracking-wider">ACTIVE</span>
                </div>

                <div className="p-3 bg-white/5 rounded-sm flex items-center justify-between border border-white/5">
                  <div>
                    <p className="text-[10px] font-mono text-white/40 block tracking-widest uppercase">CREDENTIAL RESUME</p>
                    <p className="font-display font-bold text-white text-lg">17 Professional Certs</p>
                  </div>
                  <span className="text-[#00ff88] font-mono text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-sm font-semibold tracking-wider">VERIFIED</span>
                </div>

                <div className="p-3 bg-white/5 rounded-sm flex items-center justify-between border border-white/5">
                  <div>
                    <p className="text-[10px] font-mono text-white/40 block tracking-widest uppercase">CURRENT ENROLLMENT</p>
                    <p className="font-display font-medium text-white/80 text-sm">MSS (Anthropology) - SUST</p>
                  </div>
                </div>

                <div className="p-3 bg-brand-500/10 border border-brand-500/20 rounded-sm text-center">
                  <p className="text-[10px] font-semibold text-brand-500 font-mono tracking-widest uppercase">ASPIRE LEADERS ALUMNUS 2025</p>
                  <p className="text-xs text-white/60 font-light mt-0.5">Competitive Global Leadership (USA)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
