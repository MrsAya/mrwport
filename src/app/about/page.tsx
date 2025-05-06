import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Saya - Mr Wiguna',
  description: 'Portofolio Muhammad Radya Wiguna, seorang Web Developer dan Android Developer.',
  keywords: ['Web Developer', 'Android Developer', 'Portofolio', 'Next.js', 'React', 'Kotlin', 'Jetpack Compose', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Muhammad Radya Wiguna'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tentang Saya</h1>
      </header>
      <main className="w-full max-w-3xl">
        {/* Education Section */}
        <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Pendidikan</h2>
          <ul className="list-none space-y-4">
            <li className="flex flex-col items-center">
              <Image
                src="/university-logo.png"
                alt="Universitas Pendidikan Indonesia"
                width={100}
                height={100}
                className="mb-4 bg-white rounded-full shadow-md"
              />
              <strong>Universitas Pendidikan Indonesia</strong>S1 Teknik Komputer (2020 - 2024)
            </li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Pengalaman</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            <li className="flex flex-col items-center lg:col-span-2">
              <Image
                src="/company-logo.png"
                alt="Dicoding Indonesia"
                width={100}
                height={100}
                className="mb-2 bg-white rounded-full shadow-md"
              />
              <strong>FE & BE Developer Kampus Merdeka</strong> - Dicoding Indonesia (2022)
              <p className="text-sm mt-1">
                Mengembangkan aplikasi web menggunakan React dan Next.js.
              </p>
            </li>
            <li className="flex flex-col items-center  lg:col-span-2">
              <Image
                src="/company-logo.png"
                alt="Dicoding Indonesia"
                width={100}
                height={100}
                className="mb-2 bg-white rounded-full shadow-md"
              />
              <strong>Android Developer Bootcamp</strong> - Dicoding Indonesia (2025)
              <p className="text-sm mt-1">
                Membuat aplikasi Android menggunakan Kotlin dan Jetpack Compose.
              </p>
            </li>
            {/* <li className="flex flex-col items-center lg:col-span-3">
              <Image
                src="/internship-logo.png"
                alt="Internship Program"
                width={50}
                height={50}
                className="mb-2"
              />
              <strong>Internship</strong> - Program Magang (2020 - 2021)
              <p className="text-sm mt-1">
                Berkontribusi dalam pengembangan aplikasi internal perusahaan.
              </p>
            </li> */}
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Sertifikat</h2>
          <ul className="list-none space-y-4">
            <li>
              <Link
                href="https://www.dicoding.com/certificates/53XED72OKPRN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-gray-400 dark:hover:text-gray-100 hover:underline"
              >
                <strong>Belajar Membuat Aplikasi Android dengan Jetpack Compose</strong> - Dicoding (2025)
              </Link>
            </li>
            <li>
              <Link
                href="https://www.dicoding.com/certificates/1OP82OGJLPQK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-gray-400 dark:hover:text-gray-100 hover:underline"
              >
                <strong>Belajar Fundamental Aplikasi Android</strong> - Dicoding (2025)
              </Link>
            </li>
            <li>
              <Link
                href="https://www.dicoding.com/certificates/MEPJKN026X3V"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-gray-400 dark:hover:text-gray-100 hover:underline"
              >
                <strong>Menjadi Front-End Web Developer Expert</strong> - Dicoding (2022)
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}