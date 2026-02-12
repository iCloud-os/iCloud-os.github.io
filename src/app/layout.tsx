import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iCloud",
  description: "Log in to iCloud to access your photos, mail, notes, documents and more. Sign in with your Apple Account or create a new account to start using Apple services.",
  icons: {
    icon: "https://ext.same-assets.com/1146199715/1119784780.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
