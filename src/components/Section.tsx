import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  /** Jeda animasi masuk (ms). Kosongkan untuk bagian di bawah layar pertama. */
  delay?: number;
};

/** Baris bagian bernomor: nomor di kiri, isi di kanan, dipisah garis tipis. */
export default function Section({ id, index, title, children, delay }: SectionProps) {
  return (
    <section
      id={id}
      className={`grid scroll-mt-14 gap-3 border-t border-line py-10 sm:grid-cols-[5.5rem_1fr] sm:gap-6 sm:py-12 ${
        delay === undefined ? '' : 'rise'
      }`}
      style={delay === undefined ? undefined : ({ '--d': `${delay}ms` } as React.CSSProperties)}
    >
      <span className="font-mono text-xs tracking-widest text-accent sm:pt-1.5">{index}</span>
      <div className="min-w-0">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}
