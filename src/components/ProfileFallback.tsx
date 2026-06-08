import React from "react";
import { Upload, Trash2, Aperture, Award } from "lucide-react";

interface FallbackProps {
  onFileSelect: (file: File) => void;
  isDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  title: string;
}

export function HeroSilhouette({
  onFileSelect,
  isDragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  title
}: FallbackProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div 
      id="hero-silhouette-container"
      onClick={handleContainerClick}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`relative w-full aspect-square md:aspect-[4/5] bg-gradient-to-b from-white/5 to-[#111111] rounded-sm border-2 overflow-hidden group cursor-pointer transition-all ${
        isDragOver 
          ? "border-brand-500 bg-brand-500/10 scale-[1.01]" 
          : "border-white/10 hover:border-brand-500/40"
      }`}
    >
      <input 
        id="hero-file-upload-input"
        type="file" 
        ref={fileInputRef} 
        onChange={handleInputChange} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Technical decorative lines */}
      <div className="absolute top-3 left-3 text-[9px] font-mono text-white/30 tracking-widest uppercase">
        REF: SYS_AVATAR_PRIMARY
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[9px] font-mono text-brand-500">
        <Aperture className="w-3.5 h-3.5 animate-spin-slow" />
        <span>STANDBY</span>
      </div>

      {/* Styled vector illustration of the user (glasses, goatee, suit) */}
      <div className="w-full h-full flex flex-col items-center justify-center p-8 relative z-10 select-none">
        <div className="w-48 h-48 md:w-56 md:h-56 relative text-white/15 group-hover:text-brand-500/25 transition-colors duration-500">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Outer neon halo circle */}
            <circle cx="100" cy="90" r="68" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="90" r="76" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            
            {/* Shoulders / Suit */}
            <path d="M45 165 C45 140, 70 125, 100 125 C130 125, 155 140, 155 165 C155 175, 150 185, 150 190 L50 190 C50 185, 45 175, 45 165 Z" fill="currentColor" opacity="0.4" />
            
            {/* White/light collar outline representation */}
            <path d="M85 125 L100 145 L115 125 C100 127 100 127 85 125 Z" fill="#000" />
            <path d="M85 125 L100 145 L115 125 C100 127 100 127 85 125 Z" stroke="currentColor" strokeWidth="1" />
            
            {/* Tie representation */}
            <path d="M96 145 L104 145 L108 178 L100 186 L92 178 Z" fill="currentColor" opacity="0.8" />
            <line x1="94" y1="152" x2="102" y2="160" stroke="#000" strokeWidth="1" />
            <line x1="94" y1="162" x2="104" y2="172" stroke="#000" strokeWidth="1" />

            {/* Neck */}
            <rect x="90" y="105" width="20" height="22" rx="2" fill="currentColor" opacity="0.3" />

            {/* Head/Face structure */}
            <path d="M72 85 C72 65, 80 50, 100 50 C120 50, 128 65, 128 85 C128 108, 120 115, 100 115 C80 115, 72 108, 72 85 Z" fill="currentColor" opacity="0.75" />

            {/* Hair */}
            <path d="M70 78 C65 67, 72 45, 100 45 C128 45, 135 67, 130 78 C128 72, 122 52, 100 52 C78 52, 72 72, 70 78 Z" fill="#000" />
            {/* Slick side part hair details */}
            <path d="M80 52 C90 48, 110 48, 120 52 C125 55, 115 50, 100 52 C85 53, 80 52, 80 52 Z" fill="currentColor" />

            {/* Glasses (representing thick stylish frames) */}
            <rect x="76" y="70" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="2.5" />
            <rect x="104" y="70" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="2.5" />
            <line x1="96" y1="76" x2="104" y2="76" stroke="currentColor" strokeWidth="2.5" />
            {/* Side frames */}
            <path d="M76 74 L70 74" stroke="currentColor" strokeWidth="1.5" />
            <path d="M124 74 L130 74" stroke="currentColor" strokeWidth="1.5" />

            {/* Eyes behind glasses */}
            <circle cx="86" cy="76" r="2.5" fill="#000" />
            <circle cx="114" cy="76" r="2.5" fill="#000" />

            {/* Nose representing glasses bridge */}
            <path d="M98 76 L98 88 L102 88" stroke="currentColor" strokeWidth="1" opacity="0.5" />

            {/* Goatee / Beard */}
            {/* Gentle moustache */}
            <path d="M88 98 C92 95, 108 95, 112 98 C108 97, 92 97, 88 98 Z" fill="#000" />
            {/* Circle chin goatee */}
            <path d="M85 102 C85 116, 115 116, 115 102 C108 114, 92 114, 85 102 Z" fill="#000" />
            {/* Soul patch */}
            <rect x="97" y="101" width="6" height="6" rx="1" fill="#000" />
            
            {/* Friendly outline mouth */}
            <path d="M93 100 C96 102, 104 102, 107 100" stroke="#000" strokeWidth="1" />
          </svg>
        </div>

        {/* Action Call text inside card */}
        <div className="text-center mt-5 space-y-1.5 relative pointer-events-none">
          <p className="text-xs font-mono text-brand-500 font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Upload className="w-3.5 h-3.5 animate-bounce" />
            <span>{title}</span>
          </p>
          <p className="text-[11px] text-white/50 font-sans max-w-[240px] mx-auto leading-normal">
            Drag & drop your portrait photo here, or click anywhere inside the card to browse files.
          </p>
          <p className="text-[9px] text-white/35 font-mono">
            Optimized, secure client-side storage (.jpg, .png)
          </p>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute bottom-2 left-2 text-[10px] text-white/20 font-mono tracking-wider">
        PORTFOLIO HOSTING AGENT
      </div>
      <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
        <span className="text-[10px] text-brand-500 font-mono tracking-wider font-semibold">ONLINE</span>
      </div>
    </div>
  );
}

export function AboutSilhouette({
  onFileSelect,
  isDragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  title
}: FallbackProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div 
      id="about-silhouette-container"
      onClick={handleContainerClick}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`relative w-full aspect-square md:aspect-auto md:h-[450px] bg-gradient-to-b from-[#111] to-[#070707] rounded-sm border-2 overflow-hidden group cursor-pointer transition-all ${
        isDragOver 
          ? "border-brand-500 bg-brand-500/10 scale-[1.01]" 
          : "border-white/10 hover:border-brand-500/40"
      }`}
    >
      <input 
        id="about-file-upload-input"
        type="file" 
        ref={fileInputRef} 
        onChange={handleInputChange} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Technical details */}
      <div className="absolute top-3 left-3 text-[9px] font-mono text-white/30 tracking-widest uppercase">
        LOC: SYS_AVATAR_SECONDARY
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[9px] font-mono text-brand-500">
        <Award className="w-3.5 h-3.5 text-brand-500" />
        <span>THOUGHTFUL POSE</span>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center p-8 relative z-10 select-none">
        <div className="w-40 h-40 md:w-48 md:h-48 relative text-white/10 group-hover:text-[#00ff88]/20 transition-colors duration-500">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Grid Halo */}
            <rect x="35" y="35" width="130" height="130" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Sitting pose details (armchair outline, thoughtful hand gesture outline) */}
            {/* Armchair silhouette backrest */}
            <path d="M25 150 C25 100, 35 70, 75 70 C85 70, 115 70, 125 70 C165 70, 175 100, 175 150 L175 180 L25 180 Z" fill="currentColor" opacity="0.25" />
            
            {/* Researcher upper body tilted and chin on hand pose outline */}
            <path d="M50 180 C50 145, 75 125, 110 125 C145 125, 160 145, 160 180 L50 180 Z" fill="currentColor" opacity="0.5" />
            
            {/* Head tilted */}
            <path d="M85 75 C85 55, 93 42, 112 42 C131 42, 138 55, 138 75 C138 96, 131 106, 112 106 C93 106, 85 96, 85 75 Z" fill="currentColor" opacity="0.75" />
            
            {/* Glasses tilted */}
            <rect x="89" y="60" width="18" height="11" rx="1.5" stroke="currentColor" strokeWidth="2" transform="rotate(-6 98 65)" />
            <rect x="113" y="58" width="18" height="11" rx="1.5" stroke="currentColor" strokeWidth="2" transform="rotate(-6 122 63)" />
            
            {/* Goatee outline */}
            <path d="M96 90 C96 102, 120 102, 121 90" stroke="currentColor" strokeWidth="1.5" />
            <path d="M100 90 L108 90" stroke="currentColor" strokeWidth="1" />
            
            {/* Arm gesture raised towards neck/chin */}
            <path d="M135 180 L120 120 L106 102 L112 102 L128 122 L145 180 Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>

        {/* Selection Details */}
        <div className="text-center mt-5 space-y-1.5 relative pointer-events-none">
          <p className="text-xs font-mono text-brand-500 font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Upload className="w-3.5 h-3.5 text-brand-500" />
            <span>{title}</span>
          </p>
          <p className="text-[11px] text-white/50 font-sans max-w-[220px] mx-auto leading-normal">
            Drag & drop an alternative photo here, representing your academic research journey.
          </p>
          <p className="text-[9px] text-[#00ff88] font-mono tracking-widest uppercase">
            Armchair / Thoughtful Pose
          </p>
        </div>
      </div>

      <div className="absolute bottom-2 left-2 text-[10px] text-white/20 font-mono tracking-wider">
        SYS_STATUS: READY
      </div>
      <div className="absolute bottom-2 right-2 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
        <span className="text-[9px] text-[#00ff88] font-mono">STANDBY_SECURE</span>
      </div>
    </div>
  );
}

interface ImageCardProps {
  imageSrc: string;
  onRemove: () => void;
  title: string;
}

export function ImageCard({ imageSrc, onRemove, title }: ImageCardProps) {
  return (
    <div 
      id="profile-image-card"
      className="relative w-full aspect-square md:aspect-[4/5] bg-[#111] rounded-sm border border-white/15 overflow-hidden group shadow-2xl"
    >
      <img 
        src={imageSrc} 
        alt={title} 
        referrerPolicy="no-referrer" 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      {/* Decorative tech gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-70 group-hover:opacity-60 transition-opacity pointer-events-none" />

      {/* Header labels */}
      <div className="absolute top-3 left-3 text-[9px] font-mono text-white/40 tracking-widest uppercase bg-black/60 px-2 py-0.5 rounded-sm border border-white/5">
        {title}
      </div>

      {/* Delete / Change option controls */}
      <div className="absolute bottom-3 right-3 left-3 flex justify-between items-center z-10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-[10px] font-mono text-[#00ff88] font-bold tracking-widest uppercase bg-black/85 px-2 py-1 rounded-sm border border-[#00ff88]/30">
          VERIFIED PORTRAIT
        </span>
        <button 
          id="remove-profile-image-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (confirm("Are you sure you want to remove this profile picture of yourself?")) {
              onRemove();
            }
          }}
          className="p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-sm transition-colors cursor-pointer border-none shadow-lg tooltip"
          title="Delete Personal Picture"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 pointer-events-none group-hover:opacity-0 transition-opacity">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping" />
        <span className="text-[10px] text-brand-500 font-mono tracking-widest uppercase font-semibold text-shadow">ACTIVE</span>
      </div>
    </div>
  );
}
