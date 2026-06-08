import { useState } from "react";
import { motion } from "motion/react";
import { Database, Search, Palette, Key, ShieldCheck, Stars, Check } from "lucide-react";
import { technicalSkills } from "../data/portfolioData";

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getIcon = (id: string) => {
    switch (id) {
      case "skills-research":
        return <Database className="w-5 h-5 text-brand-500" />;
      case "skills-design":
        return <Palette className="w-5 h-5 text-brand-500" />;
      case "skills-crm":
        return <Key className="w-5 h-5 text-brand-500" />;
      case "skills-office":
        return <ShieldCheck className="w-5 h-5 text-brand-500" />;
      case "skills-ai":
        return <Stars className="w-5 h-5 text-brand-500" />;
      default:
        return <Database className="w-5 h-5 text-brand-500" />;
    }
  };

  const getCategoryColor = (id: string) => {
    return "border-white/10 bg-white/5 text-white";
  };

  const filteredCategories = selectedCategory === "all" 
    ? technicalSkills 
    : technicalSkills.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] border-t border-b border-white/10 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <span className="text-brand-500 font-mono text-xs font-semibold uppercase tracking-[0.2em] block mb-1">
              Technical Capabilities
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight flex items-center gap-2">
              <Database className="w-6 h-6 text-brand-500" />
              <span>Technical Skills & Tools</span>
            </h2>
          </div>
          
          {/* Quick Category Filters */}
          <div className="flex flex-wrap gap-1.5 mt-4 lg:mt-0 max-w-full">
            <button 
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all font-medium border uppercase tracking-wider cursor-pointer ${
                selectedCategory === "all" 
                  ? "bg-brand-500 text-[#0a0a0a] border-brand-500 shadow-sm" 
                  : "bg-white/5 text-white/70 border-white/10 hover:border-brand-500/50"
              }`}
            >
              All
            </button>
            {technicalSkills.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all font-medium border uppercase tracking-wider cursor-pointer ${
                  selectedCategory === cat.id 
                    ? "bg-brand-500 text-[#0a0a0a] border-brand-500 shadow-sm" 
                    : "bg-white/5 text-white/70 border-white/10 hover:border-brand-500/50"
                }`}
              >
                {cat.name.split(" & ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={category.id} 
              className={`border rounded-sm p-6 bg-white/5 shadow-xs hover:border-brand-500/40 transition-all flex flex-col justify-between ${getCategoryColor(category.id)}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2.5 bg-white/5 rounded-sm shadow-2xs border border-white/10 text-brand-500">
                    {getIcon(category.id)}
                  </span>
                  <h3 className="font-display font-bold text-white text-sm tracking-wide uppercase">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-1.5 py-1 px-2.5 bg-[#121212] rounded-sm border border-white/10 text-xs font-medium text-white/80"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-500" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-3 mt-6 flex justify-between items-center text-[10px] font-mono text-white/40">
                <span>VERIFIED SKILLS</span>
                <span className="text-brand-500 font-semibold uppercase tracking-wider">PROFICIENT</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-text summary highlighting productivity */}
        <div className="mt-10 p-5 bg-white/5 border border-white/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-sm">
              <Stars className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-white">Advanced AI & CRM Orchestration</h4>
              <p className="text-xs text-white/50">Certified in both Google Workspace and CRM marketing/automation structures.</p>
            </div>
          </div>
          <div className="text-xs font-mono font-medium text-brand-500 leading-relaxed md:text-right max-w-md">
            CURRENT FOCUS: LARGE LANGUAGE MODEL PROMPTING, CRM DISCORD WORKFLOWS, AND QUALITATIVE DATABASE ACCELERATION
          </div>
        </div>

      </div>
    </section>
  );
}
