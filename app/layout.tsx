// app/layout.tsx
import React from 'react';
import Link from 'next/link';
import '@/app/globals.css'; // pastikan Tailwind ter-import

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo Bergerak Naik Turun */}
            <div className="flex items-center space-x-2">
              <span className="inline-block animate-bounce text-2xl">🤖</span>
              <span className="font-extrabold text-xl tracking-wider text-blue-600 animate-bounce [animation-delay:0.2s]">
                DACIA ROBOTICS
              </span>
            </div>
            
            {/* Menu Navigasi Antar Halaman */}
            <div className="flex space-x-6 text-sm font-medium">
              <Link href="/akademik" className="hover:text-blue-600 transition">Dashboard</Link>
              <Link href="/akademik/fase" className="hover:text-blue-600 transition">Fase Riset</Link>
              <Link href="/akademik/proyek" className="hover:text-blue-600 transition">Proyek Aktif</Link>
              <Link href="/akademik/artikel" className="hover:text-blue-600 transition">Artikel</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
