'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

// Tiap tautan menggulir ke bagian di halaman yang sama; `ids` adalah bagian yang
// membuat tautan itu menyala saat sedang terlihat.
const NAV = [
  { href: '#tentang', label: 'Tentang', ids: ['tentang'] },
  { href: '#riwayat', label: 'Riwayat', ids: ['riwayat', 'pengalaman', 'sertifikat'] },
  { href: '#proyek', label: 'Proyek', ids: ['proyek'] },
  { href: '#kontak', label: 'Kontak', ids: ['kontak'] },
];

export default function SiteHeader() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const sections = ['beranda', ...NAV.flatMap((item) => item.ids)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Bagian aktif = bagian terakhir yang tepi atasnya sudah melewati garis sedikit di bawah header.
    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && sections.length > 0) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }
      const line = window.innerHeight * 0.35;
      let current = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-2 px-5 sm:px-6">
        <a href="#beranda" className="flex items-center gap-2 font-mono text-sm font-medium tracking-widest">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          MRW
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Navigasi bagian" className="flex items-center">
            {NAV.map(({ href, label, ids }) => {
              const active = ids.includes(activeId);
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={active ? 'location' : undefined}
                  className={`rounded-full px-2 py-1.5 font-mono text-xs tracking-wide transition-colors sm:px-3 ${
                    active ? 'text-accent' : 'text-muted hover:text-fg'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
