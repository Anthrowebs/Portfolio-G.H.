import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Milestone, Award, Users, Mail, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { researchExperience, leadershipEngagement, conferencePresentations, references } from "../data/portfolioData";

type TabType = "research" | "leadership" | "conferences" | "references";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabType>("research");

  const tabOptions = [
    { id: "research" as TabType, label: "Research Projects", icon: <Briefcase className="w-4 h-4" /> },
    { id: "leadership" as TabType, label: "Leadership & Engagement", icon: <Milestone className="w-4 h-4" /> },
    { id: "conferences" as TabType, label: "Conference Presentations", icon: <Award className="w-4 h-4 text-amber-500" /> },
    { id: "references" as TabType, label: "Academic References", icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <section id="experience" className="py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-5">
          <div>
            <span className="text-brand-500 font-mono text-xs font-semibold uppercase tracking-[0.2em] block mb-1">
              Professional Journey
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-brand-500" />
              <span>Experience & Engagement</span>
            </h2>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-3">
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-brand-500 text-[#0a0a0a] font-bold shadow-lg"
                  : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* RESEARCH PROJECTS */}
            {activeTab === "research" && (
              <motion.div
                key="research"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {researchExperience.map((exp) => (
                  <div key={exp.id} className="relative pl-6 sm:pl-8 border-l-2 border-white/10 hover:border-brand-500 transition-colors py-1 group">
                    {/* Circle marker */}
                    <span className="absolute -left-[9px] top-2.5 w-4 h-4 bg-[#0d0d0d] border-2 border-brand-500 rounded-full group-hover:bg-brand-500 transition-colors z-10" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="text-xs font-mono font-medium text-brand-500 bg-[#121212] px-2 py-0.5 rounded-sm border border-white/10">
                          {exp.role}
                        </span>
                        <h4 className="text-lg font-display font-bold text-white mt-2 leading-snug">
                          {exp.organisation}
                        </h4>
                      </div>
                      
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm w-fit">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </span>
                    </div>

                    <div className="mt-2.5">
                      <div className="text-sm font-sans text-white/80 italic border-l-4 border-brand-500/50 bg-white/5 p-3 rounded-sm leading-relaxed mb-3">
                        <strong className="text-brand-500 not-italic font-bold text-[10px] uppercase block tracking-widest font-mono">PROJECT DETAIL:</strong> 
                        "{exp.project}"
                      </div>
                      
                      <ul className="space-y-2 text-sm text-white/70 font-sans list-disc list-outside pl-4">
                        {exp.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* LEADERSHIP & PROFESSIONAL ENGAGEMENT */}
            {activeTab === "leadership" && (
              <motion.div
                key="leadership"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {leadershipEngagement.map((lead) => (
                  <div key={lead.id} className="relative pl-6 sm:pl-8 border-l-2 border-white/10 hover:border-brand-500 transition-colors py-1 group">
                    {/* Circle marker */}
                    <span className="absolute -left-[9px] top-2.5 w-4 h-4 bg-[#0d0d0d] border-2 border-brand-500 rounded-full group-hover:bg-brand-500 transition-colors z-10" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="text-xs font-mono font-medium text-brand-500 bg-[#121212] px-2 py-0.5 rounded-sm border border-white/10">
                          {lead.title}
                        </span>
                        <h4 className="text-lg font-display font-bold text-white mt-2 leading-snug">
                          {lead.organisation}
                        </h4>
                      </div>
                      
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm w-fit">
                        <Calendar className="w-3 h-3" />
                        <span>{lead.period}</span>
                      </span>
                    </div>

                    <div className="mt-3">
                      <ul className="space-y-2 text-sm text-white/70 font-sans list-disc list-outside pl-4">
                        {lead.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CONFERENCE PRESENTATIONS */}
            {activeTab === "conferences" && (
              <motion.div
                key="conferences"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {conferencePresentations.map((conf) => (
                  <div key={conf.id} className="border border-white/10 bg-white/5 rounded-sm p-6 shadow-xs flex flex-col justify-between hover:border-brand-500/40 transition-colors">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <span className="text-xs font-mono font-medium bg-[#121212] text-brand-500 border border-white/10 px-2.5 py-0.5 rounded-sm">
                          {conf.role}
                        </span>
                        <span className="text-[11px] font-mono text-white/40 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{conf.date}</span>
                        </span>
                      </div>

                      <h4 className="font-display font-medium text-white text-lg sm:text-xl">
                        {conf.conferenceName}
                      </h4>
                      <p className="text-xs font-mono text-white/45 mt-1">{conf.location}</p>

                      <div className="mt-4 bg-[#121212] border border-white/10 rounded-sm p-3.5 shadow-2xs">
                        <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest font-mono">Presenting Paper:</p>
                        <p className="text-sm font-sans text-brand-500 font-medium italic mt-1 leading-snug">
                          "{conf.paperTitle}"
                        </p>
                      </div>

                      <ul className="space-y-2 text-xs text-white/60 font-sans list-disc pl-4 mt-4">
                        {conf.bullets.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-mono text-brand-500 font-semibold flex items-center gap-1 uppercase tracking-wider">
                      <span>Scientific Speaker Panel</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* REFERENCES */}
            {activeTab === "references" && (
              <motion.div
                key="references"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {references.map((ref, idx) => (
                  <div key={idx} className="border border-white/10 bg-white/5 shadow-xs rounded-sm p-6 relative hover:border-brand-500/40 transition-colors">
                    <span className="absolute right-4 top-2 text-white/5 text-8xl font-serif font-bold pointer-events-none mb-1 select-none">
                      ”
                    </span>
                    
                    <h4 className="font-display font-bold text-lg text-white">
                      {ref.name}
                    </h4>
                    <p className="text-xs font-mono text-brand-500 font-semibold uppercase tracking-widest mt-1">
                      {ref.role}
                    </p>
                    <p className="text-xs font-sans text-white/50 mt-0.5">
                      {ref.dept}, {ref.institution}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-white/70">
                      <a href={`tel:${ref.phone}`} className="flex items-center gap-2 hover:text-brand-500 transition-colors w-fit">
                        <Phone className="w-3.5 h-3.5 text-brand-500" />
                        <span>{ref.phone}</span>
                      </a>
                      <a href={`mailto:${ref.email}`} className="flex items-center gap-2 hover:text-brand-500 transition-colors w-fit">
                        <Mail className="w-3.5 h-3.5 text-brand-500" />
                        <span>{ref.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
