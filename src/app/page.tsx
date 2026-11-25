import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Section from '@/components/Section';
import ArrowLink from '@/components/ArrowLink';

export const metadata: Metadata = {
  title: 'Mr Wiguna - Web Developer',
  description: 'Portofolio Muhammad Radya Wiguna, seorang Web Developer dan Android Developer.',
  keywords: ['Web Developer', 'Android Developer', 'Portofolio', 'Next.js', 'React', 'Kotlin', 'Jetpack Compose', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Muhammad Radya Wiguna'],
};

const STACK = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'PHP', 'Kotlin', 'Jetpack Compose'];

const EXPERIENCE = [
  {
    role: 'FE & BE Developer Kampus Merdeka',
    org: 'Dicoding Indonesia',
    year: '2022',
    detail: 'Mengembangkan aplikasi web menggunakan React dan Next.js.',
  },
  {
    role: 'Android Developer Bootcamp',
    org: 'Dicoding Indonesia',
    year: '2025',
    detail: 'Membuat aplikasi Android menggunakan Kotlin dan Jetpack Compose.',
  },
];

const CERTIFICATES = [
  {
    href: 'https://www.dicoding.com/certificates/53XED72OKPRN',
    title: 'Belajar Membuat Aplikasi Android dengan Jetpack Compose',
    issuer: 'Dicoding',
    year: '2025',
  },
  {
    href: 'https://www.dicoding.com/certificates/1OP82OGJLPQK',
    title: 'Belajar Fundamental Aplikasi Android',
    issuer: 'Dicoding',
    year: '2025',
  },
  {
    href: 'https://www.dicoding.com/certificates/MEPJKN026X3V',
    title: 'Menjadi Front-End Web Developer Expert',
    issuer: 'Dicoding',
    year: '2022',
  },
];

// Repo publik di github.com/MrsAya. Tambahkan `detail` untuk memberi deskripsi singkat.
const PROJECTS: { name: string; tech?: string; detail?: string; href: string }[] = [
  { name: 'mrwport', tech: 'TypeScript', detail: 'Situs portofolio ini.', href: 'https://github.com/MrsAya/mrwport' },
  { name: 'todolist-php', tech: 'PHP', href: 'https://github.com/MrsAya/todolist-php' },
  { name: 'AES-TA', tech: 'PHP', href: 'https://github.com/MrsAya/AES-TA' },
  {
    name: 'AplikasiPemilihanKetua',
    detail: 'Pemilihan Umum Ketua Mabim',
    href: 'https://github.com/MrsAya/AplikasiPemilihanKetua',
  },
];

const SOCIALS = [
  { href: 'https://www.instagram.com/muhrwiguna27/', label: 'Instagram', Icon: FaInstagram },
  { href: 'https://www.linkedin.com/in/muhammadrwiguna/', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://github.com/MrsAya', label: 'GitHub', Icon: FaGithub },
];

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className="h-12 w-12 shrink-0 rounded-md border border-line bg-white object-contain p-1"
    />
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-6">
      {/* Hero */}
      <section id="beranda" className="scroll-mt-14 pb-14 pt-14 sm:pb-20 sm:pt-24">
        <p className="label rise">Portofolio</p>

        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="rise" style={{ '--d': '80ms' } as React.CSSProperties}>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Halo, saya
              <br />
              <span className="text-accent">Mr Wiguna</span>.
            </h1>
            <p className="mt-5 font-mono text-xs leading-relaxed text-muted sm:text-sm">
              Web Developer <span className="text-accent">/</span> Android Developer{' '}
              <span className="text-accent">/</span> Game Enthusiast
            </p>
          </div>

          <div className="frame rise w-fit shrink-0" style={{ '--d': '160ms' } as React.CSSProperties}>
            <Image
              src="/profile.jpg"
              alt="Foto profil Mr Wiguna"
              width={128}
              height={128}
              className="h-28 w-28 rounded-md object-cover sm:h-32 sm:w-32"
              priority
            />
          </div>
        </div>
      </section>

      <Section id="tentang" index="01" title="Tentang Saya" delay={220}>
        <p className="max-w-xl leading-relaxed text-muted">
          Saya adalah seorang Web Developer dan Android Developer yang bersemangat untuk menciptakan
          pengalaman pengguna yang luar biasa.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Teknologi yang dikuasai">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="riwayat" index="02" title="Pendidikan" delay={300}>
        <div className="flex items-start gap-4">
          <Logo src="/university-logo.png" alt="Universitas Pendidikan Indonesia" />
          <div>
            <p className="font-medium">Universitas Pendidikan Indonesia</p>
            <p className="mt-1 text-sm text-muted">S1 Teknik Komputer</p>
            <p className="mt-1 font-mono text-xs text-muted">2020 - 2024</p>
          </div>
        </div>
      </Section>

      <Section id="pengalaman" index="03" title="Pengalaman">
        <ul className="space-y-8">
          {EXPERIENCE.map(({ role, org, year, detail }) => (
            <li key={role} className="flex items-start gap-4">
              <Logo src="/company-logo.png" alt={org} />
              <div>
                <p className="font-medium">{role}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {org} <span className="text-accent">/</span> {year}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="sertifikat" index="04" title="Sertifikat">
        <ul className="divide-y divide-line border-y border-line">
          {CERTIFICATES.map(({ href, title, issuer, year }) => (
            <li
              key={href}
              className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <p className="font-medium leading-snug">{title}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {issuer} <span className="text-accent">/</span> {year}
                </p>
              </div>
              <div className="shrink-0">
                <ArrowLink href={href} external>
                  Lihat
                </ArrowLink>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="proyek" index="05" title="Proyek Saya">
        <p className="max-w-xl leading-relaxed text-muted">
          Beberapa proyek yang telah saya kerjakan, mulai dari aplikasi web hingga aplikasi android.
        </p>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {PROJECTS.map(({ name, tech, detail, href }) => (
            <li
              key={name}
              className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <p className="break-words font-medium tracking-tight">{name}</p>
                {detail && <p className="mt-1 text-sm text-muted">{detail}</p>}
                {tech && <p className="mt-1 font-mono text-xs text-muted">{tech}</p>}
              </div>
              <div className="shrink-0">
                <ArrowLink href={href} external>
                  GitHub
                </ArrowLink>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <ArrowLink href="https://github.com/MrsAya" external>
            Semua repo di GitHub
          </ArrowLink>
        </div>
      </Section>

      <Section id="kontak" index="06" title="Kontak Saya">
        <p className="max-w-xl leading-relaxed text-muted">Hubungi saya melalui sosial media berikut:</p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {SOCIALS.map(({ href, label, Icon }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
