import React from "react";

interface FallbackProps {
  onFileSelect?: (file: File) => void;
  isDragOver?: boolean;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  title?: string;
}

export function HeroSilhouette({}: FallbackProps) {
  return (
    <div 
      id="hero-portrait-frame"
      className="relative w-full aspect-square md:aspect-[4/5] bg-[#0c1015] rounded-sm border border-white/10 overflow-hidden group select-none transition-all"
    >
      {/* Subtly textured background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0" />

      {/* Primary Photo Display */}
      <img 
        src="/portrait_primary.jpg" 
        alt="G.H. Mohiuddin Ahmad Munna" 
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] z-10"
      />
    </div>
  );
}

export function AboutSilhouette({}: FallbackProps) {
  return (
    <div 
      id="about-portrait-frame"
      className="relative w-full aspect-square md:aspect-auto md:h-[450px] bg-[#090b10] rounded-sm border border-white/10 overflow-hidden group select-none transition-all"
    >
      {/* Subtly textured background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0" />

      {/* Secondary Photo Display */}
      <img 
        src="/portrait_secondary.jpg" 
        alt="G.H. Mohiuddin Ahmad Munna - Academic" 
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] z-10"
      />
    </div>
  );
}
