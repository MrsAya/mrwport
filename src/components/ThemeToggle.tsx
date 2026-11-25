'use client';

import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'theme';

function currentTheme(): 'light' | 'dark' {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === 'light' || chosen === 'dark') return chosen;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const toggle = () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Penyimpanan diblokir: tema tetap berganti untuk kunjungan ini.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Ganti tema terang/gelap"
      title="Ganti tema"
      className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {/* Ikon dipilih lewat CSS agar tidak berkedip saat halaman dimuat */}
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden />
      <Moon className="block h-4 w-4 dark:hidden" aria-hidden />
    </button>
  );
}
