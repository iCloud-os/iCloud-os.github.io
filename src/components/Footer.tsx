"use client";

const footerLinks = [
  {
    label: "System Status",
    href: "https://www.apple.com/support/systemstatus/",
  },
  {
    label: "Privacy Policy",
    href: "https://www.apple.com/legal/privacy/",
  },
  {
    label: "Terms & Conditions",
    href: "https://www.apple.com/legal/internet-services/icloud/",
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 border-t border-white/10">
      <div className="max-w-[1068px] mx-auto">
        <div className="flex flex-col items-center gap-4 text-[12px]">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {footerLinks.map((link, index) => (
              <span key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  aria-label={`${link.label} (opens in a new tab)`}
                >
                  {link.label}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="text-[#86868b] mx-2">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[#86868b]">
            Copyright © 2026 Apple Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
