"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay failed, show fallback
        setVideoLoaded(false);
      });
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center pt-20 md:pt-24 pb-6 md:pb-8 px-4">
      {/* Animated Video Hero */}
      <div className="relative w-full max-w-[320px] md:max-w-[430px] h-[290px] md:h-[388px] mb-2 md:mb-4 flex items-center justify-center">
        {/* Fallback animated icons if video doesn't load */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central Avatar */}
          <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 border-4 border-pink-300 flex items-center justify-center shadow-2xl overflow-hidden animate-glow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Face */}
              <ellipse cx="50" cy="55" rx="35" ry="40" fill="#FFE5D0"/>
              {/* Hair */}
              <ellipse cx="50" cy="30" rx="32" ry="25" fill="#2D2D2D"/>
              <ellipse cx="30" cy="40" rx="8" ry="15" fill="#2D2D2D"/>
              <ellipse cx="70" cy="40" rx="8" ry="15" fill="#2D2D2D"/>
              {/* Eyes */}
              <ellipse cx="38" cy="55" rx="4" ry="5" fill="#2D2D2D"/>
              <ellipse cx="62" cy="55" rx="4" ry="5" fill="#2D2D2D"/>
              {/* Eyebrows */}
              <path d="M32 48 Q38 45 44 48" stroke="#2D2D2D" strokeWidth="2" fill="none"/>
              <path d="M56 48 Q62 45 68 48" stroke="#2D2D2D" strokeWidth="2" fill="none"/>
              {/* Glasses */}
              <circle cx="38" cy="55" r="10" stroke="#555" strokeWidth="2" fill="none"/>
              <circle cx="62" cy="55" r="10" stroke="#555" strokeWidth="2" fill="none"/>
              <line x1="48" y1="55" x2="52" y2="55" stroke="#555" strokeWidth="2"/>
              {/* Smile */}
              <path d="M40 70 Q50 80 60 70" stroke="#2D2D2D" strokeWidth="2" fill="none"/>
              {/* Cheeks */}
              <circle cx="28" cy="65" r="5" fill="#FFB6C1" opacity="0.5"/>
              <circle cx="72" cy="65" r="5" fill="#FFB6C1" opacity="0.5"/>
            </svg>
          </div>

          {/* Floating App Icons around avatar */}
          {/* Find My - Top */}
          <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-b from-[#34C759] to-[#248A3D] rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0s" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
              <circle cx="12" cy="10" r="5" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="10" r="2" fill="white"/>
              <path d="M12 15v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Calendar - Top Left */}
          <div className="absolute top-12 md:top-16 left-4 md:left-8 w-11 h-11 md:w-14 md:h-14 bg-[#1c1c1c] rounded-xl md:rounded-2xl flex flex-col items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
            <span className="text-[#FF3B30] text-[8px] md:text-[10px] font-medium">MON</span>
            <span className="text-white text-[14px] md:text-[18px] font-light">10</span>
          </div>

          {/* iCloud - Top Left (small) */}
          <div className="absolute top-6 md:top-8 left-16 md:left-24 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-b from-[#5AC8FA] to-[#007AFF] rounded-md md:rounded-lg flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1s" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="md:w-4 md:h-4">
              <path d="M6 19a4 4 0 01-.87-7.9A5.5 5.5 0 1116.9 9.1 4 4 0 1118 17H6z"/>
            </svg>
          </div>

          {/* Contacts - Right */}
          <div className="absolute top-16 md:top-20 right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-[#636366] rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0.3s" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="md:w-6 md:h-6">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
            </svg>
          </div>

          {/* Photos - Right */}
          <div className="absolute top-28 md:top-32 right-2 md:right-4 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
            <div className="relative w-8 h-8 md:w-10 md:h-10 animate-rotate-slow" style={{ animationDuration: "30s" }}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <div
                  key={deg}
                  className="absolute w-2 h-2 md:w-3 md:h-3 rounded-sm"
                  style={{
                    background: ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#5AC8FA", "#007AFF", "#5856D6", "#FF2D55"][i],
                    transform: `rotate(${deg}deg) translateY(-10px) md:translateY(-14px)`,
                    transformOrigin: "center 10px",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mail - Left */}
          <div className="absolute top-36 md:top-48 left-2 md:left-4 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-b from-[#5AC8FA] to-[#007AFF] rounded-md md:rounded-lg flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0.7s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="md:w-5 md:h-5">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="2"/>
              <path d="M3 7l9 6 9-6" stroke="white" strokeWidth="2"/>
            </svg>
          </div>

          {/* Game Center / Contacts - Bottom */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-black flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1.2s" }}>
              <div className="grid grid-cols-3 gap-0.5 p-1.5 md:p-2">
                {["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#5AC8FA", "#007AFF", "#5856D6", "#FF2D55", "#AF52DE"].map((color, i) => (
                  <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ background: color }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video overlay (try to load video) */}
        <video
          ref={videoRef}
          src="https://ext.same-assets.com/1146199715/3208096540.mp4"
          width={430}
          height={388}
          autoPlay
          playsInline
          loop
          muted
          onLoadedData={() => setVideoLoaded(true)}
          title="Animation showing different users' Memojis surrounded by the icons of the apps the user personally uses most"
          className={`absolute inset-0 w-full h-full object-contain ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        />
      </div>

      {/* iCloud Title */}
      <div className="relative flex flex-col items-center mb-6 md:mb-8">
        {/* Cloud effect background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-full blur-3xl" />
        </div>

        <h1 className="text-[72px] sm:text-[96px] md:text-[120px] font-semibold tracking-tight cloud-text leading-none">
          iCloud
        </h1>
      </div>

      {/* Sign In Button */}
      <button
        type="button"
        className="sign-in-button mb-6 md:mb-8"
      >
        Sign In
      </button>

      {/* Description */}
      <h2 className="text-[#86868b] text-[18px] md:text-[21px] lg:text-[24px] text-center max-w-[500px] md:max-w-[600px] font-normal leading-relaxed px-4">
        The best place for all your photos, files, notes, mail, and more.
      </h2>
    </section>
  );
}
