import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Situs sekarang satu halaman; alamat lama diarahkan ke bagian yang sesuai.
  async redirects() {
    return [
      { source: "/about", destination: "/#riwayat", permanent: false },
      { source: "/projects", destination: "/#proyek", permanent: false },
    ];
  },
};

export default nextConfig;
