"use client";

export default function FeatureTiles() {
  return (
    <section className="w-full max-w-[1068px] mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* First Tile - Apps and Data */}
        <div className="tile-card bg-[#2c2c2e] rounded-[20px] overflow-hidden">
          {/* App Icons Grid */}
          <div className="w-full aspect-[2/1] relative overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#2c2c2e] flex items-center justify-center p-6 md:p-8">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-[350px]">
              {/* Mail Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#1E90FF] to-[#006BB3] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              {/* Photos Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#FF9500] via-[#FF2D55] to-[#5856D6] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" fill="white"/>
                  <path d="M12 2L12 5M12 19L12 22M2 12L5 12M19 12L22 12M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* Notes Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#FFCC00] to-[#FF9500] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="3" width="14" height="18" rx="2" fill="white"/>
                  <line x1="8" y1="8" x2="16" y2="8" stroke="#FF9500" strokeWidth="1.5"/>
                  <line x1="8" y1="12" x2="16" y2="12" stroke="#FF9500" strokeWidth="1.5"/>
                  <line x1="8" y1="16" x2="12" y2="16" stroke="#FF9500" strokeWidth="1.5"/>
                </svg>
              </div>
              {/* Find My Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#34C759] to-[#248A3D] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="10" r="6" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="10" r="2" fill="white"/>
                  <path d="M12 16v5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* Calendar Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#FF3B30] to-[#C41E3A] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" fill="white"/>
                  <rect x="3" y="4" width="18" height="5" fill="#FF3B30"/>
                  <text x="12" y="18" textAnchor="middle" fill="#333" fontSize="9" fontWeight="600">17</text>
                </svg>
              </div>
              {/* Reminders Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#007AFF] to-[#0055B3] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h2 className="text-white text-[18px] md:text-[21px] font-semibold mb-3 md:mb-4 leading-snug">
              Easily access apps and data from your iPhone on the web
            </h2>
            <p className="text-[#86868b] text-[15px] md:text-[17px] leading-relaxed">
              iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you&apos;re always up to date.
            </p>
          </div>
        </div>

        {/* Second Tile - iCloud+ */}
        <div className="tile-card bg-[#2c2c2e] rounded-[20px] overflow-hidden">
          {/* iCloud+ Icons */}
          <div className="w-full aspect-[2/1] relative overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#2c2c2e] flex items-center justify-center p-6 md:p-8">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-[350px]">
              {/* Cloud Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#5AC8FA] to-[#007AFF] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19a4 4 0 01-.87-7.9A5.5 5.5 0 1116.9 9.1 4 4 0 1118 17H6z" fill="white"/>
                </svg>
              </div>
              {/* Storage Icon */}
              <div className="app-icon w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#5856D6] via-[#AF52DE] to-[#FF2D55] rounded-2xl flex items-center justify-center shadow-lg cursor-pointer">
                <div className="text-white text-center">
                  <div className="text-xs md:text-sm font-bold">12TB</div>
                </div>
              </div>
              {/* Privacy Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#30D158] to-[#248A3D] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="10" width="14" height="10" rx="2" fill="white"/>
                  <path d="M8 10V7a4 4 0 118 0v3" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              {/* Home Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#FF9F0A] to-[#FF6B00] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12l9-9 9 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              {/* Hide My Email Icon */}
              <div className="app-icon w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#64D2FF] to-[#0A84FF] rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8l9 6 9-6" stroke="white" strokeWidth="2" fill="none"/>
                  <rect x="2" y="6" width="20" height="12" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h2 className="text-white text-[18px] md:text-[21px] font-semibold mb-3 md:mb-4 leading-snug">
              More storage, plus features to protect your privacy and connect with friends
            </h2>
            <p className="text-[#86868b] text-[15px] md:text-[17px] leading-relaxed">
              Upgrade to iCloud+ to get more storage, plan events with Apple Invites, and have peace of mind with privacy features like iCloud Private Relay, Hide My Email, and HomeKit Secure Video. You can even share your subscription with your family.{" "}
              Learn more at{" "}
              <a
                href="https://apple.com/icloud"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
                aria-label="apple.com/icloud (opens in a new tab)"
              >
                apple.com/icloud
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
