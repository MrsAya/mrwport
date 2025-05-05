import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mr Wiguna - Web Developer',
  description: 'Portofolio Muhammad Radya Wiguna, seorang Web Developer dan Android Developer.',
  keywords: ['Web Developer', 'Android Developer', 'Portofolio'],
};

export default function Home() {
  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <Image
          src="/profile.jpg"
          alt="Foto Profil"
          width={150}
          height={150}
          className="rounded-full mx-auto border-4 border-gray-300"
          priority
        />
        <h1 className="text-4xl font-bold mt-6">Halo, Saya Mr Wiguna!</h1>
        <p className="text-lg text-gray-600 mt-2">
          Web Developer | Android Developer | Game Enthusiast
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-3xl">
        {/* About Section */}
        <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tentang Saya</h2>
          <p className="text-gray-700 dark:text-gray-400">
            Saya adalah seorang Web Developer dan Android Developer yang bersemangat untuk menciptakan pengalaman pengguna yang luar biasa.
            Saya memiliki pengalaman dalam HTML, CSS, JavaScript, React, Next.js, PHP, Kotlin, JetPackCompose.
          </p>
          <div className='text-right'>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center bg-blue-500 dark:bg-gray-900 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 dark:hover:bg-gray-600 ml-auto transition-transform transform hover:scale-105">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Proyek Saya</h2>
          <p className="text-gray-700 dark:text-gray-400">
            Lihat beberapa proyek yang telah saya kerjakan, mulai dari aplikasi web hingga aplikasi android.
          </p>
          <div className='text-right'>
            <Link
              href="/projects"
              className="mt-4 inline-flex items-center bg-green-500 dark:bg-gray-900 text-white px-6 py-2 rounded-md shadow hover:bg-green-600 dark:hover:bg-gray-600 ml-auto transition-transform transform hover:scale-105">
                Lihat Proyek
                <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        &copy; 2025 Aya. All rights reserved.
      </footer>
    </div>
  );
}
