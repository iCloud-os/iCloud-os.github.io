"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#1c1c1c]/80 backdrop-blur-md">
      <Link href="/" aria-label="Navigate to icloud.com home page" className="flex items-center gap-1">
        {/* Apple Logo */}
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.502 10.537c-.022-2.238 1.827-3.31 1.91-3.362-.84-1.226-2.142-1.393-2.608-1.413-.952-.097-1.872.563-2.358.563-.486 0-1.237-.549-2.033-.534-.898.015-1.728.522-2.19 1.328-1.563 2.711-.4 6.73 1.122 8.935.744 1.077 1.63 2.288 2.794 2.244.939-.038 1.295-.607 2.431-.607 1.137 0 1.454.607 2.448.588 1.21-.02 1.988-1.096 2.729-2.177.86-1.249 1.215-2.457 1.237-2.52-.027-.012-2.376-.912-2.4-3.617l-.082.572zM10.485 3.938c.618-.749 1.036-1.79.922-2.828-.891.036-1.972.594-2.612 1.344-.574.665-1.078 1.727-.943 2.746.995.078 2.011-.506 2.633-1.262z" fill="white"/>
        </svg>
        {/* iCloud text */}
        <span className="text-white text-[20px] font-normal tracking-tight">iCloud</span>
      </Link>
      <button
        type="button"
        className="w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200"
        title="Help"
        aria-label="Help"
        aria-haspopup="menu"
      >
        {/* Help Icon (three dots) */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="11" r="2" fill="white"/>
          <circle cx="11" cy="11" r="2" fill="white"/>
          <circle cx="18" cy="11" r="2" fill="white"/>
        </svg>
      </button>
    </header>
  );
}
