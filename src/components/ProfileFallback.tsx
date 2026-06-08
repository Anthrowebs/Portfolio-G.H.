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
  const [useStaticImage, setUseStaticImage] = React.useState(true);

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
      className={`relative w-full aspect-square md:aspect-[4/5] bg-[#0c1015] rounded-sm border-2 overflow-hidden group cursor-pointer transition-all ${
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

      {/* Static Image Loader with Vector Fallback */}
      {useStaticImage ? (
        <img 
          src="/portrait_primary.jpg" 
          alt="G.H. Mohiuddin Ahmad Munna" 
          referrerPolicy="no-referrer"
          onError={() => setUseStaticImage(false)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-10"
        />
      ) : null}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Technical decorative lines */}
      <div className="absolute top-3 left-3 text-[9px] font-mono text-white/30 tracking-widest uppercase z-20">
        PORTRAIT FRAME: G.H._MUNNA_PRIMARY
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[9px] font-mono text-brand-500 z-20">
        <Aperture className="w-3.5 h-3.5 animate-spin-slow" />
        <span>{useStaticImage ? "STATIC_PHOTO_ACTIVE" : "CERTIFIED_VECTOR"}</span>
      </div>

      {/* High-fidelity full-color vector art representing Mohiuddin Munna based on his real photo */}
      <div className="w-full h-full flex flex-col items-center justify-center p-4 relative z-10 select-none">
        <div className="w-48 h-48 md:w-56 md:h-56 relative group-hover:scale-[1.02] transition-transform duration-500">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded shadow-xl bg-[#fafafa]">
            {/* Soft Studio Background Gradient */}
            <defs>
              <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f3f4f6" />
              </linearGradient>
              <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e9a986" />
                <stop offset="100%" stopColor="#cd855c" />
              </linearGradient>
              <linearGradient id="suitGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e2c4f" />
                <stop offset="100%" stopColor="#0f162c" />
              </linearGradient>
              <linearGradient id="tieGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#18181b" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
              <linearGradient id="lensShine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Base Background */}
            <rect width="200" height="200" fill="url(#bgGrad)" />

            {/* Ambient shadow around shoulders */}
            <path d="M40 180 C40 150, 70 135, 100 135 C130 135, 160 150, 160 180 Z" fill="#000000" opacity="0.05" />

            {/* Shoulders / Suits Jacket representing his exact blazer */}
            <path d="M35 175 C35 152, 60 138, 100 138 C140 138, 165 152, 165 175 L170 200 L30 200 Z" fill="url(#suitGrad)" />
            {/* Blazer Lapels */}
            <path d="M68 138 L90 178 L78 200 L35 175" fill="#131d36" stroke="#2a3d6d" strokeWidth="1" />
            <path d="M132 138 L110 178 L122 200 L165 175" fill="#131d36" stroke="#2a3d6d" strokeWidth="1" />

            {/* White dress shirt collar */}
            <path d="M80 138 L100 162 L120 138 L112 134 L100 138 L88 134 Z" fill="#ffffff" />
            <path d="M80 138 L100 162 L120 138" stroke="#cbd5e1" strokeWidth="1" />

            {/* Diagonal Blue-and-White Striped Tie conforming perfectly */}
            <path d="M96 158 L104 158 L111 200 L89 200 Z" fill="url(#tieGrad)" />
            {/* Tie stripes */}
            <path d="M96 164 L102 170" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            <path d="M94 174 L105 185" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            <path d="M92 184 L108 200" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />

            {/* Neck */}
            <rect x="88" y="112" width="24" height="28" fill="url(#skinGrad)" />
            {/* Neck shadow */}
            <path d="M88 128 C88 128, 100 144, 112 128 L112 138 L88 138 Z" fill="#000000" opacity="0.15" />

            {/* Ear structures */}
            <circle cx="70" cy="95" r="8" fill="#cd855c" />
            <circle cx="70" cy="95" r="5" fill="#e9a986" />
            <circle cx="130" cy="95" r="8" fill="#cd855c" />
            <circle cx="130" cy="95" r="5" fill="#e9a986" />

            {/* Head / Face structure */}
            <path d="M72 88 C72 62, 80 48, 100 48 C120 48, 128 62, 128 88 C128 114, 119 122, 100 122 C81 122, 72 114, 72 88 Z" fill="url(#skinGrad)" />

            {/* Hair - Sleek, parted, short dark styling precisely matching user's photo */}
            <path d="M68 76 C65 64, 71 40, 100 40 C129 40, 135 64, 132 76 C129 64, 122 46, 100 46 C78 46, 71 64, 68 76 Z" fill="url(#hairGrad)" />
            {/* Hair fringe side volume */}
            <path d="M70 70 C72 58, 88 44, 100 44 C112 44, 128 58, 130 70 C125 58, 115 48, 100 50 C85 52, 75 58, 70 70 Z" fill="#09090b" />
            <path d="M96 40 C108 40, 125 45, 130 52 C125 48, 112 44, 100 44 Z" fill="#2d2d30" opacity="0.4" />

            {/* Nose representing bridge */}
            <path d="M97 80 L97 96 L103 96" stroke="#b45309" strokeWidth="1.5" opacity="0.4" />

            {/* Cheeks healthy shading */}
            <circle cx="82" cy="98" r="8" fill="#f43f5e" opacity="0.08" />
            <circle cx="118" cy="98" r="8" fill="#f43f5e" opacity="0.08" />

            {/* Goatee / Bearded mustache look */}
            {/* Mustache */}
            <path d="M85 102 C89 98, 111 98, 115 102 C113 100, 87 100, 85 102 Z" fill="#18181b" />
            {/* Trimmed goatee matching photo precisely */}
            <path d="M82 108 C80 120, 120 120, 118 108 C115 116, 85 116, 82 108 Z" fill="#18181b" />
            {/* Fine mustache connector */}
            <path d="M82 108 C80 102, 85 102, 85 102" stroke="#18181b" strokeWidth="1.5" />
            <path d="M118 108 C120 102, 115 102, 115 102" stroke="#18181b" strokeWidth="1.5" />
            {/* Soul patch under lip */}
            <path d="M97 106 L103 106 L101 112 L99 112 Z" fill="#1b1b1f" />
            {/* Friendly mouth line */}
            <path d="M92 104 C96 106, 104 106, 108 104" stroke="#000000" strokeWidth="1" opacity="0.6" />

            {/* Eyes */}
            <ellipse cx="87" cy="85" rx="5" ry="3" fill="#ffffff" />
            <circle cx="87" cy="85" r="2.5" fill="#1c1917" />
            <circle cx="88.5" cy="83.5" r="0.8" fill="#ffffff" /> {/* Specular light */}

            <ellipse cx="113" cy="85" rx="5" ry="3" fill="#ffffff" />
            <circle cx="113" cy="85" r="2.5" fill="#1c1917" />
            <circle cx="114.5" cy="83.5" r="0.8" fill="#ffffff" /> {/* Specular light */}

            {/* Eyebrows */}
            <path d="M78 78 C82 76, 92 77, 94 81" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
            <path d="M122 78 C118 76, 108 77, 106 81" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />

            {/* Black-rimmed glasses representing his custom glasses style */}
            <rect x="76" y="78" width="22" height="15" rx="3.5" stroke="#18181b" strokeWidth="2.5" />
            <rect x="76" y="78" width="22" height="15" rx="3.5" fill="url(#lensShine)" />
            
            <rect x="102" y="78" width="22" height="15" rx="3.5" stroke="#18181b" strokeWidth="2.5" />
            <rect x="102" y="78" width="22" height="15" rx="3.5" fill="url(#lensShine)" />

            {/* Connection Bridge */}
            <path d="M98 83 H102" stroke="#18181b" strokeWidth="2.5" />
            {/* Outer hinges */}
            <path d="M76 82 L70 82" stroke="#18181b" strokeWidth="1.8" />
            <path d="M124 82 L130 82" stroke="#18181b" strokeWidth="1.8" />
          </svg>
        </div>

        {/* Action Call text inside card */}
        <div className="text-center mt-5 space-y-1 relative pointer-events-none">
          <p className="text-xs font-mono text-brand-500 font-bold uppercase tracking-wider">
            G.H. Mohiuddin Ahmad Munna
          </p>
          <p className="text-[14px] text-white font-sans font-medium">
            Primary Digital Portrait
          </p>
          <p className="text-[11px] text-white/50 font-sans max-w-[240px] mx-auto leading-normal">
            High-fidelity vector artwork representing first-preference business and executive profile.
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
  const [useStaticImage, setUseStaticImage] = React.useState(true);

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
      className={`relative w-full aspect-square md:aspect-auto md:h-[450px] bg-[#090b10] rounded-sm border-2 overflow-hidden group cursor-pointer transition-all ${
        isDragOver 
          ? "border-[#00ff88] bg-[#00ff88]/10 scale-[1.01]" 
          : "border-white/10 hover:border-[#00ff88]/40"
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

      {/* Static Image Loader with Vector Fallback */}
      {useStaticImage ? (
        <img 
          src="/portrait_secondary.jpg" 
          alt="G.H. Mohiuddin Ahmad Munna - Academic" 
          referrerPolicy="no-referrer"
          onError={() => setUseStaticImage(false)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-10"
        />
      ) : null}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Technical details */}
      <div className="absolute top-3 left-3 text-[9px] font-mono text-white/30 tracking-widest uppercase z-20">
        PORTRAIT FRAME: G.H._MUNNA_SECONDARY
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[9px] font-mono text-[#00ff88] z-20">
        <Award className="w-3.5 h-3.5 text-[#00ff88]" />
        <span>{useStaticImage ? "STATIC_PHOTO_ACTIVE" : "ACADEMIC_PORTRAIT"}</span>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center p-4 relative z-10 select-none">
        <div className="w-48 h-48 md:w-56 md:h-56 relative group-hover:scale-[1.02] transition-transform duration-500">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded shadow-xl bg-[#1e141a]">
            {/* Background elements (warm ambient room lighting with vertical bamboo stalks) */}
            <defs>
              <linearGradient id="roomBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#451e29" />
                <stop offset="50%" stopColor="#2c1219" />
                <stop offset="100%" stopColor="#120509" />
              </linearGradient>
              <linearGradient id="bambooGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#14532d" />
              </linearGradient>
              <linearGradient id="armchairGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
              <linearGradient id="suitGrey" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#1f2937" />
              </linearGradient>
              <linearGradient id="skinArm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e9a986" />
                <stop offset="100%" stopColor="#cd855c" />
              </linearGradient>
              <linearGradient id="hairAbout" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#27272a" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
            </defs>

            {/* Base room background */}
            <rect width="200" height="200" fill="url(#roomBg)" />

            {/* Bamboo leaf outlines behind armchair */}
            <path d="M15 40 C10 20, 25 15, 30 5 C32 18, 22 28, 15 40 Z" fill="#14532d" opacity="0.4" />
            <path d="M185 60 C180 35, 195 25, 198 10 C200 24, 190 35, 185 60 Z" fill="#166534" opacity="0.3" />
            <rect x="190" y="20" width="4" height="150" rx="1" fill="url(#bambooGrad)" opacity="0.25" />
            <rect x="5" y="10" width="5" height="150" rx="1" fill="url(#bambooGrad)" opacity="0.2" />

            {/* Red Armchair with dynamic ergonomic curved back and armrest details */}
            <path d="M22 130 C22 90, 32 68, 75 68 C82 68, 118 68, 125 68 C168 68, 178 90, 178 130 L178 200 L22 200 Z" fill="url(#armchairGrad)" stroke="#991b1b" strokeWidth="1" />
            <path d="M22 110 C22 92, 45 80, 75 80" stroke="#7f1d1d" strokeWidth="4" fill="none" opacity="0.4" />
            <path d="M178 110 C178 92, 155 80, 125 80" stroke="#7f1d1d" strokeWidth="4" fill="none" opacity="0.4" />

            {/* Dark Grey Suit with realistic posture (leaning slightly left) */}
            <path d="M45 180 C45 150, 70 134, 105 134 C132 134, 158 150, 158 180 L162 200 L40 200 Z" fill="url(#suitGrey)" />
            {/* Lapels of the suite */}
            <path d="M72 134 L92 172 L78 200 L45 180" fill="#2b323d" stroke="#4b5563" strokeWidth="1" />
            <path d="M130 134 L110 172 L124 200 L158 180" fill="#2b323d" stroke="#4b5563" strokeWidth="1" />

            {/* Light blue check patterned shirt */}
            <path d="M82 134 L101 155 L120 134 L111 130 L101 134 L91 130 Z" fill="#e0f2fe" />
            {/* Tiny checks in shirt patterns */}
            <line x1="88" y1="134" x2="101" y2="148" stroke="#bae6fd" strokeWidth="0.5" />
            <line x1="114" y1="134" x2="101" y2="148" stroke="#bae6fd" strokeWidth="0.5" />

            {/* Blue striped tie matching portrait */}
            <path d="M97 151 L105 151 L108 200 L94 200 Z" fill="#0284c7" />
            <path d="M97 156 L103 162" stroke="#bae6fd" strokeWidth="1" />
            <path d="M96 166 L104 174" stroke="#bae6fd" strokeWidth="1" />
            <path d="M95 176 L105 186" stroke="#bae6fd" strokeWidth="1" />

            {/* Skin Tone of Neck */}
            <rect x="89" y="112" width="24" height="26" fill="url(#skinArm)" />
            {/* Shadow under chin */}
            <path d="M89 122 C89 122, 101 136, 113 122 L113 130 L89 130 Z" fill="#000" opacity="0.15" />

            {/* Head structure slightly tilted on support */}
            <path d="M75 88 C75 64, 82 50, 101 50 C120 50, 127 64, 127 88 C127 112, 119 120, 101 120 C83 120, 75 112, 75 88 Z" fill="url(#skinArm)" />

            {/* Dark hair matching his exact photo hair partition */}
            <path d="M72 78 C69 66, 75 42, 101 42 C127 42, 133 66, 130 78 Z" fill="url(#hairAbout)" />
            <path d="M74 72 C76 59, 91 46, 101 46 C111 46, 125 59, 127 72 Z" fill="#09090b" />
            <path d="M96 42 C108 42, 122 47, 127 53 C122 49, 110 46, 101 46 Z" fill="#2d2d30" opacity="0.4" />

            {/* Eyes */}
            <ellipse cx="88" cy="84" rx="4.5" ry="2.5" fill="#ffffff" />
            <circle cx="88.5" cy="84" r="2.2" fill="#18181b" />
            <circle cx="89.5" cy="82.5" r="0.7" fill="#ffffff" />

            <ellipse cx="112" cy="84" rx="4.5" ry="2.5" fill="#ffffff" />
            <circle cx="111.5" cy="84" r="2.2" fill="#18181b" />
            <circle cx="112.5" cy="82.5" r="0.7" fill="#ffffff" />

            {/* Eyebrows */}
            <path d="M80 77 C84 75, 91 76, 93 80" stroke="#09090b" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M120 77 C116 75, 109 76, 107 80" stroke="#09090b" strokeWidth="1.8" strokeLinecap="round" />

            {/* Glasses styled representing his look */}
            <rect x="78" y="77" width="20" height="14" rx="3" stroke="#18181b" strokeWidth="2.2" />
            <rect x="102" y="77" width="20" height="14" rx="3" stroke="#18181b" strokeWidth="2.2" />
            <path d="M98 82 H102" stroke="#18181b" strokeWidth="2.2" />
            <path d="M78 81 L73 81" stroke="#18181b" strokeWidth="1.5" />
            <path d="M122 81 L127 81" stroke="#18181b" strokeWidth="1.5" />

            {/* Nose representing bridge */}
            <path d="M98 81 L98 94 L103 94" stroke="#a16207" strokeWidth="1.2" opacity="0.4" />

            {/* Mustache and goatee matching photo */}
            <path d="M86 100 C90 97, 108 97, 112 100" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M85 106 C83 115, 115 115, 113 106 L113 103 L85 103 Z" fill="#18181b" opacity="0.9" />
            {/* Friendly smiling line */}
            <path d="M93 102 C96 104, 102 104, 105 102" stroke="#000" strokeWidth="1" opacity="0.5" />

            {/* Armrest / Thoughtful hand gesture supporting chin */}
            {/* Hand supporting chin */}
            <path d="M81 120 L76 112 L73 111 L74 105 C75 103, 78 103, 80 106 L85 112 Z" fill="url(#skinArm)" stroke="#cd855c" strokeWidth="0.8" />
            {/* Arm leaning on backrest */}
            <path d="M48 200 L68 152 L78 116 L84 122 L72 153 L58 200 Z" fill="url(#suitGrey)" stroke="#374151" strokeWidth="0.8" />
            {/* Watch on wrist represented professionally */}
            <rect x="68" y="146" width="6" height="5" rx="1" fill="#f59e0b" transform="rotate(30 68 146)" />
          </svg>
        </div>

        {/* Selection Details */}
        <div className="text-center mt-5 space-y-1 relative pointer-events-none">
          <p className="text-xs font-mono text-[#00ff88] font-bold uppercase tracking-wider">
            G.H. Mohiuddin Ahmad Munna
          </p>
          <p className="text-[14px] text-white font-sans font-medium">
            Research & Academic Portrait
          </p>
          <p className="text-[11px] text-white/50 font-sans max-w-[220px] mx-auto leading-normal">
            Digital illustration in academic library/study space, reflecting your fieldwork and focus.
          </p>
        </div>
      </div>

      <div className="absolute bottom-2 left-2 text-[10px] text-white/20 font-mono tracking-wider">
        SYS_STATUS: ACTIVE
      </div>
      <div className="absolute bottom-2 right-2 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
        <span className="text-[9px] text-[#00ff88] font-mono">PORTRAIT_LOCKED</span>
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
