import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ShieldCheck, ArrowUpRight, Search, FileBadge, Calendar, X, ExternalLink } from "lucide-react";
import { certificatesList, personalInfo } from "../data/portfolioData";
import { CertificateItem } from "../types";

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredCerts = certificatesList.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="certificates" className="py-20 bg-[#0a0a0a] border-t border-b border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-brand-500 font-mono text-xs font-semibold uppercase tracking-[0.2em] block mb-1">
              Verified Qualifications
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-500" />
              <span>Certifications & Credentials</span>
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 w-4.5 h-4.5 text-white/45" />
            <input 
              type="text" 
              placeholder="Search 17+ credentials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-mono"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group bg-white/5 border border-white/10 rounded-sm p-5 shadow-2xs hover:border-brand-500/40 hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-500 border border-brand-500/20">
                    {cert.year}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-brand-500 opacity-65 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-display font-bold text-white text-sm tracking-wide leading-snug mt-3 group-hover:text-brand-500 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-white/50 font-sans mt-1">
                  {cert.issuer}
                </p>
              </div>

              <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between text-[10px] font-mono text-white/40">
                <span className="flex items-center gap-1">
                  <FileBadge className="w-3.5 h-3.5 text-brand-500" />
                  <span>VIEW CREDENTIAL</span>
                </span>
                <span className="text-brand-500 font-semibold flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Open Viewer</span>
                  <ArrowUpRight className="w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12 bg-white/5 rounded-sm border border-dashed border-white/10">
            <p className="text-sm font-sans text-white/60">No credentials match your search term. Try looking for "Power BI" or "Google".</p>
          </div>
        )}

        {/* Certificate Simulation View Tracker */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[#0e0e0e] border border-white/15 w-full max-w-3xl rounded-sm shadow-2xl relative overflow-hidden font-sans"
              >
                {/* Header Close Control */}
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute right-4 top-4 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 transition-colors z-10 cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>

                {/* Simulated Certificate UI Card */}
                <div className="p-6 sm:p-12 relative border-[10px] border-double border-brand-500/25 m-2 rounded-sm bg-[#111111]">
                  {/* Decorative background watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                    <Award className="w-96 h-96 text-white" />
                  </div>

                  {/* Header logos and seals */}
                  <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8">
                    <div>
                      <span className="text-[10px] font-semibold tracking-widest text-[#00ff88] font-mono">VERIFIED CREDENTIAL</span>
                      <h4 className="text-lg font-display font-medium text-white mt-1 flex items-center gap-1.5 uppercase font-bold tracking-wider">
                        <Award className="w-5 h-5 text-brand-500" />
                        <span>Professional Qualification</span>
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-white/50">ISSUED IN: {selectedCert.year}</span>
                    </div>
                  </div>

                  {/* Certificate Content text */}
                  <div className="text-center space-y-4 my-8">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/40">
                      THIS CERTIFIES THAT
                    </p>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white border-b border-white/5 max-w-lg mx-auto pb-2 capitalize tracking-wide">
                      G.H. Mohiuddin Ahmad Munna
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-white/70 max-w-md mx-auto leading-relaxed">
                      has successfully met all programmatic standards and completed all academic and practical testing criteria required to achieve the certification course of:
                    </p>
                    <h4 className="text-base sm:text-lg font-display font-bold text-[#00ff88] tracking-tight leading-snug px-6 max-w-xl mx-auto">
                      {selectedCert.title}
                    </h4>
                    <p className="text-[10px] font-mono text-white/40">
                      Issued and verified by the authorized organization
                    </p>
                    <p className="text-xs font-semibold text-brand-500 font-mono tracking-widest uppercase bg-brand-500/10 border border-brand-500/20 inline-block px-3 py-1 rounded-sm">
                      {selectedCert.issuer}
                    </p>
                  </div>

                  {/* Footer & Signature Simulation */}
                  <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-8 mt-10 gap-6">
                    <div className="text-center sm:text-left">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 font-mono">VERIFICATION ID</p>
                      <p className="text-xs font-mono text-white/80 mt-1 uppercase tracking-wider">AIS-MUNNA-{selectedCert.id.toUpperCase()}-2026</p>
                    </div>

                    {/* Neon Medal Visual Seal */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-14 h-14 bg-brand-500/10 rounded-full flex items-center justify-center border-4 border-dashed border-brand-500 text-brand-500 shadow-md">
                        <Award className="w-6 h-6 text-brand-500" />
                      </div>
                      <span className="text-[8px] font-mono font-bold tracking-widest text-[#00ff88] uppercase mt-1">SECURE VERIFIED</span>
                    </div>

                    <div className="text-center sm:text-right font-mono">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">STATUS</p>
                      <p className="text-xs text-brand-500 font-bold mt-1 uppercase flex items-center justify-center sm:justify-end gap-1">
                        <span className="w-2 h-2 rounded-full bg-brand-500 inline-block animate-ping"></span>
                        <span>ACTIVE & VALID</span>
                      </p>
                    </div>
                  </div>

                </div>

                {/* Action button bar */}
                <div className="bg-[#121212] border-t border-white/10 p-4 flex flex-col sm:flex-row sm:justify-end gap-3 rounded-b-sm">
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 font-mono font-bold uppercase tracking-wider bg-brand-500 hover:bg-brand-600 text-[#0a0a0a] text-xs rounded-sm transition-colors border-none"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View LinkedIn Panel</span>
                  </a>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 font-mono font-medium max-sm:w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs rounded-sm transition-colors cursor-pointer"
                  >
                    Close Viewer
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
