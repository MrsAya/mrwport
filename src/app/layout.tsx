import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mr Wiguna - Web Developer",
  description:
    "Portofolio Muhammad Radya Wiguna, seorang Web Developer dan Android Developer.",
};

// Dijalankan sebelum halaman digambar agar tema pilihan pengguna tidak berkedip.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-line">
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-6 font-mono text-xs text-muted sm:px-6">
            <span>&copy; {new Date().getFullYear()} Aya</span>
            <span>All rights reserved.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
