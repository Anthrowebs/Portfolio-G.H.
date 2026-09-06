import React from "react";
import { motion } from "motion/react";
import { User, Shield, CheckCircle, Globe2, BookOpen, Clock } from "lucide-react";
import { personalInfo, coreCompetencies, memberships, languages } from "../data/portfolioData";
import { AboutSilhouette } from "./ProfileFallback";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-5">
          <div>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight flex items-center gap-2">
              <User className="w-6 h-6 text-brand-500" />
              <span>Professional Profile</span>
            </h2>
          </div>
          <p className="text-white/40 text-xs font-mono mt-2 md:mt-0 tracking-wider">
            AnthroWebs / Academic-Digital Liaison
          </p>
        </div>

        {/* Structured Grid info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Column 1: Secondary Academic Photo Frame */}
          <div className="lg:col-span-4 flex flex-col w-full">
            <motion.div variants={itemVariants} className="h-full">
              <AboutSilhouette />
            </motion.div>
          </div>

          {/* Column 2: Extensive Profile Statement & Languages */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div variants={itemVariants} className="prose text-white/80 font-sans leading-relaxed text-sm">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-500 first-letter:mr-3 first-letter:float-left">
                {personalInfo.profileSummary}
              </p>
            </motion.div>

            {/* Language Proficiency Panel */}
            <motion.div variants={itemVariants} className="p-4 bg-white/5 border border-white/10 rounded-sm mt-6">
              <h3 className="font-display font-bold text-white text-xs mb-3 flex items-center gap-2 tracking-wider uppercase">
                <Globe2 className="w-4 h-4 text-brand-500" />
                <span>Language Proficiency</span>
              </h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex flex-col border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                    <span className="font-semibold text-white text-xs font-mono">{lang.name}</span>
                    <span className="text-[11px] text-white/50 font-sans mt-0.5">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 3: Key Competencies & Memberships */}
          <div className="lg:col-span-4 space-y-6">
            {/* Core Competencies Box */}
            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-sm p-4.5">
              <h3 className="font-display font-bold text-white text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-500" />
                <span>Competency Areas</span>
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {coreCompetencies.slice(0, 10).map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-brand-500 rounded-full mt-1.5 shrink-0" />
                    <span className="text-xs font-sans text-white/70 font-medium leading-normal">{comp}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Memberships Panel */}
            <motion.div variants={itemVariants} className="border border-white/10 rounded-sm p-4.5 bg-[#121212] shadow-sm">
              <h3 className="font-display font-bold text-white text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-500" />
                <span>Memberships</span>
              </h3>
              <div className="space-y-3">
                {memberships.slice(0, 5).map((member, idx) => (
                  <div key={idx} className="flex gap-2 justify-between items-start">
                    <div>
                      <h4 className="text-[11px] font-semibold text-white font-mono tracking-tight leading-tight">
                        {member.organisation}
                      </h4>
                      <p className="text-white/50 text-[10px] font-sans mt-0.5">{member.role}</p>
                    </div>
                    <span className="text-[9px] font-mono whitespace-nowrap bg-brand-500/10 text-brand-500 px-1.5 py-0.5 rounded-sm border border-brand-500/20 flex items-center gap-0.5">
                      <Clock className="w-2 h-2" />
                      <span>{member.period.split(" ")[0]}</span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Qualification Sub-section */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="mb-8">
            <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-500" />
              <span>Educational Qualification</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-between hover:border-brand-500/50 transition-colors">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-500 font-bold">MSS (Anthropology)</span>
                <h4 className="font-display text-sm font-bold text-white mt-1">Shahjalal University of Science & Technology</h4>
                <p className="text-xs text-white/50 font-sans mt-1">University (SUST)</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs text-white/50 font-mono">
                <span>PASSING YEAR: 2026 Expected</span>
                <span className="bg-brand-500/10 text-brand-500 px-2 py-0.5 rounded-sm border border-brand-500/20">Enrolled</span>
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-between hover:border-brand-500/50 transition-colors">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-500 font-bold">BSS (Anthropology)</span>
                <h4 className="font-display text-sm font-bold text-white mt-1">Shahjalal University of Science & Technology</h4>
                <p className="text-xs text-white/50 font-sans mt-1">University (SUST)</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs text-white/50 font-mono">
                <span>PASSING YEAR: 2025</span>
                <span className="bg-emerald-500/10 text-brand-500 px-2 py-0.5 rounded-sm border border-emerald-500/20 font-semibold">3.44 / 4.00</span>
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-between hover:border-brand-500/50 transition-colors">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-500 font-bold">HSC (Science)</span>
                <h4 className="font-display text-sm font-bold text-white mt-1">Jalalabad Cantonment Public School & College</h4>
                <p className="text-xs text-white/50 font-sans mt-1">Sylhet Board</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs text-white/50 font-mono">
                <span>PASSING YEAR: 2019</span>
                <span className="bg-brand-500/10 text-brand-500 px-2 py-0.5 rounded-sm border border-brand-500/20 font-semibold">GPA: 5.00 / 5.00</span>
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-between hover:border-brand-500/50 transition-colors">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-500 font-bold">SSC (Science)</span>
                <h4 className="font-display text-sm font-bold text-white mt-1">Chhatak Cement Factory High School</h4>
                <p className="text-xs text-white/50 font-sans mt-1">Sylhet Board</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs text-white/50 font-mono">
                <span>PASSING YEAR: 2017</span>
                <span className="bg-brand-500/10 text-brand-500 px-2 py-0.5 rounded-sm border border-brand-500/20 font-semibold">GPA: 5.00 / 5.00</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
