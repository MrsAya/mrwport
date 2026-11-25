import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

/** Tautan teks dengan panah; panah bergeser saat disorot. */
export default function ArrowLink({ href, children, external = false }: ArrowLinkProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group inline-flex items-center gap-2 border-b border-line pb-1 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
    >
      {children}
      <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}
